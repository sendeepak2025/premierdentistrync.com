import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { blogPostMap, blogPosts, type BlogPost } from "@/lib/blogPosts";
import { site } from "@/lib/site";
import {
  absoluteUrl,
  jsonLd,
  localSearchAreas,
  primarySeoKeywords,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function postImage(post: BlogPost) {
  if (post.image) return post.image;
  return post.content.match(/<img src="([^"]+)"/)?.[1] ?? "";
}

function postImageUrl(post: BlogPost) {
  const image = postImage(post);
  return image ? absoluteUrl(image) : absoluteUrl("/og-image.png");
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap.get(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Premier Dentistry`,
    description: post.excerpt || "Dental care article from Premier Dentistry.",
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: [
      ...primarySeoKeywords,
      post.title,
      "dental blog Charlotte NC",
      "Ballantyne dental advice",
      ...localSearchAreas.map((area) => `dentist near ${area}`),
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
      authors: [site.doctor.name],
      images: [{ url: postImageUrl(post) }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Dental care article from Premier Dentistry.",
      images: [postImageUrl(post)],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostMap.get(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
  const canonical = `/blog/${post.slug}`;
  const articleText = stripHtml(post.content);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl(`${canonical}#article`),
        headline: post.title,
        description: post.excerpt || articleText.slice(0, 220),
        image: postImageUrl(post),
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          "@id": absoluteUrl("/#dr-anand-patel"),
          name: site.doctor.name,
        },
        publisher: { "@id": absoluteUrl("/#dentist") },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": absoluteUrl(canonical),
        },
        articleSection: "Dental education",
        about: [
          "Dentistry",
          "Oral health",
          "Ballantyne dental care",
          "Charlotte NC dentist",
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl(`${canonical}#breadcrumb`),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dental Blog",
            item: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(canonical),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <article>
        <section className="relative overflow-hidden bg-brand text-white">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-brand-2/70 blur-3xl" />
          <div className="absolute -left-28 -bottom-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75"
            >
              <Link href="/" className="hover:text-white">
                Premier Dentistry
              </Link>
              <span className="text-white/40">/</span>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white">Article</span>
            </nav>

            <p className="text-sm font-medium tracking-[0.18em] uppercase text-white/70">
              {formatDate(post.date)}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </section>

        <Section bg="white">
          <div className="mx-auto max-w-3xl">
            {postImage(post) ? (
              <img
                src={postImage(post)}
                alt=""
                className="mb-10 max-h-[520px] w-full rounded-2xl object-cover shadow-card"
                loading="eager"
              />
            ) : null}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Section>
      </article>

      <Section bg="surface" className="pt-0">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] uppercase text-brand-2">
                More from the blog
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                Keep reading
              </h2>
            </div>
            <Button href="/blog" variant="secondary">
              View All Posts
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <p className="text-sm text-muted">{formatDate(item.date)}</p>
                <h3 className="mt-3 font-display text-xl leading-tight text-ink transition group-hover:text-brand">
                  {item.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Read article
                  <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}

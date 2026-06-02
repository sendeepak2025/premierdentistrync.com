import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { CallToAction } from "@/components/CallToAction";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";
import { localSearchAreas, primarySeoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dental Blog | Ballantyne & Charlotte Dental Tips",
  description:
    "Dental care articles from Premier Dentistry in Ballantyne, including preventive care, restorative options, whitening, sleep apnea, and family dental tips.",
  alternates: { canonical: "/blog" },
  keywords: [
    ...primarySeoKeywords,
    "dental blog Charlotte NC",
    "Ballantyne dental tips",
    "oral health education Charlotte",
    ...localSearchAreas.map((area) => `dental advice near ${area}`),
  ],
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

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <>
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-brand-2/70 blur-3xl" />
        <div className="absolute -left-28 -bottom-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75"
          >
            <Link href="/" className="hover:text-white">
              Premier Dentistry
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Blog</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] uppercase text-white/70">
                Dental Blog
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Helpful guidance for healthier smiles.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                Practical articles from Premier Dentistry on prevention, treatment
                options, comfort, and planning your dental care with confidence.
              </p>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
            >
              {postImage(featured) ? (
                <img
                  src={postImage(featured)}
                  alt=""
                  className="h-56 w-full object-cover"
                  loading="eager"
                />
              ) : null}
              <div className="p-6">
                <p className="text-sm text-white/70">{formatDate(featured.date)}</p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-white">
                  {featured.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/78">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                  Read article
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Section bg="surface">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Latest Posts</Eyebrow>
            <Heading className="mt-4">Patient education and updates</Heading>
          </div>
          <Button href="/contact" variant="secondary">
            Schedule a Visit
            <Icon name="calendar" className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              {postImage(post) ? (
                <img
                  src={postImage(post)}
                  alt=""
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-brand-soft text-brand">
                  <Icon name="sparkle" className="h-10 w-10" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-muted">{formatDate(post.date)}</p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-ink transition group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-ink-2">
                  {post.excerpt || "Read the full article from Premier Dentistry."}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-brand">
                  Read more
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}

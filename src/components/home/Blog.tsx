import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import heroImg from '@public/images/home-page-11/hero-img.png';
import LinkButton from '../ui/button/LinkButton';
import { IBlogPost } from '@/interface';
const blogs: IBlogPost[] =  [
  {
    tag: "Meetup",
    author: "Nivolia Network Team",
    authorImage: heroImg.src,
    publishDate: "2025-11-08T10:00:00Z",
    title: "Nivolia Connect: Winter Tech Meetup — Build, Network, Launch",
    description: "Join founders, builders, and technologists for an evening of igniting collaboration — lightning talks, roundtables, and hands-on networking to help you accelerate your next idea.",
    thumbnail: heroImg.src,
    readTime: "4 min",
    slug: "nivolia-connect-winter-tech-meetup-2025",
    content: " Nivolia Connect — Winter Tech Meetup\n\n**Date & Time:** Friday, December 12, 2025 • 18:00 — 21:30 (GMT)\n\n**Location:** The Loft @ Innovation Hub, 21 Market Lane, London (hybrid: in-person + live stream)\n\n---\n\n### Why attend\nNivolia Connect brings together early-stage founders, product builders, and tech professionals to collaborate across ideas, partnerships, and hiring. Expect rapid-fire learning, warm introductions, and tangible next steps — not just slides.\n\n### What to expect\n- **Lightning Talks (5 speakers):** 7-minute talks on product-market fit, community-driven growth, and low-cost prototyping.\n- **Founders’ Roundtables:** Small facilitated tables focused on fundraising, developer hiring, and GTM tactics.\n- **Partner Showcase:** Meet technology partners and local service providers offering pilot collaborations.\n- **Open Networking:** Curated intros and a “matchboard” so you’re connected with people who matter.\n\n### Featured Speakers\n- **Amara L.** — Co-founder, BrightStack (AI-driven observability)\n- **Jordan T.** — Head of Product, LumenLabs (SaaS scale-up)\n- **Dr. S. Nwosu** — Community Lead, TechBridge\n\n### Agenda (high level)\n- 18:00 — Doors, registration & welcome drinks\n- 18:30 — Opening remarks from Nivolia Network\n- 18:40 — Lightning talks\n- 19:20 — Break & partner showcase\n- 19:40 — Roundtables\n- 20:30 — Open networking + matchmaking\n- 21:15 — Closing & next steps\n\n### Who should come\n- Early-stage founders and product leads\n- Engineers and designers interested in startup opportunities\n- Investors, mentors, and ecosystem partners\n- Anyone looking to expand their professional network in tech\n\n### Tickets & Registration\n- **General (in-person):** £15 — includes refreshments and access to partner demo area\n- **Virtual pass:** Free — livestream + community Slack access\n\n**Register:** https://example.com/events/nivolia-connect-winter-2025\n\n---\n\n### FAQs\n**Q: Do I need to come alone?**\nA: You’re welcome to bring a co-founder or colleague — please purchase one ticket per person.\n\n**Q: Can I apply to speak?**\nA: Yes — we’re accepting short speaker submissions until November 24. Email speak@nivolia.com with a 1-paragraph pitch.\n\n**Q: Are recordings available?**\nA: Lightning talks will be recorded and shared with registered attendees after the event.\n\n---\n\n### Get involved\nInterested in sponsoring, running a roundtable, or hosting a future meetup? Contact events@nivolia.com.\n\n\n*Powered by Nivolia Network — where connection leads to momentum.*"
  }
] //getMarkDownData('src/data/blogs').slice(7, 10);

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:py-[100px] py-20 bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center space-y-5 md:mb-[70px] mb-10">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green dark:!text-accent/60 dark:!bg-accent/10">
              Upcoming event
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>  Connect With the Community</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[492px] mx-auto">
                  &nbsp;Engage with industry leaders, entrepreneurs, and rising talent in our in-person and virtual events designed to spark meaningful connections.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 items-start lg:gap-8 gap-y-12">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 xl:col-span-6 lg:col-span-5">
                <BlogCardV4 blog={blogs[0]} className="bg-white dark:bg-background-8" />
              </div>
            </RevealAnimation>

          <div className="col-span-12 xl:col-span-6 lg:col-span-7 space-y-8">
              {/* <RevealAnimation delay={0.6}>
                <BlogCardV5 blog={blogs[0]} className="bg-white dark:bg-background-8" />
              </RevealAnimation> */}

            {/*     <RevealAnimation delay={0.7}>
                <BlogCardV5 blog={blogs[2]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>
          */}  </div> 
          </div>
          <RevealAnimation delay={0.6}>
            <div className="flex justify-center mt-14 section-button-01">
              <LinkButton
                href="/blog-01"
                className="btn btn-secondary btn-md dark:btn-transparent hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
                Explore the Learning Hub
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;

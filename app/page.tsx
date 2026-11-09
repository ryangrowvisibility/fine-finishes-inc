import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 502-6228";
const TEL = "tel:+19165026228";
const SMS = "sms:+19165026228";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Fine%20Finishes%20Inc&query_place_id=ChIJRS2fG2XPmoARH36QKm14QPQ";

const reviews = [
  { name: "Natalie A.", job: "Roman clay walls", text: "Fernando and his crew were responsive, on time and truly artists. She is thrilled with her Roman clay and says a craftsman like this is hard to find in the area." },
  { name: "Genny L.", job: "Plastered fireplace", text: "A beautiful job plastering her fireplace. They listened carefully to what she wanted, responded to every request and kept everything neat and tidy while working in her home." },
  { name: "Marcella K.", job: "Limewash", text: "She found Fernando through a Facebook referral for limewash. He was patient while she chose a color and happily made sample boards for her to look at first." },
  { name: "Angela J.", job: "Rental property prep", text: "After two previous contractors, she prepared a new property and an older home for rental with Fernando's team. Professional and detail oriented, with great results. She will only work with them going forward." },
  { name: "Sondra M.", job: "Exterior painting", text: "Found them through a Nextdoor recommendation and they did not disappoint: prompt, courteous, neat and reasonably priced." },
  { name: "Will W.", job: "Painting", text: "The price was great, they showed up when they said they would and did a great job. He recommends them without hesitation." },
];

const steps = [
  { t: "Call or text", d: "Tell us about the rooms, the exterior or the finish you have seen and liked. Photos by text are welcome." },
  { t: "We see the space", d: "We look at the surfaces, talk through colors and finishes, and make sample boards when you want to see a limewash or specialty finish first." },
  { t: "Careful prep", d: "Patching, sanding and masking come first. Good prep is what makes a paint job last, so we do not rush it." },
  { t: "Paint and finish", d: "The crew arrives when we said we would and keeps your home neat and tidy while we work." },
  { t: "Final walk-through", d: "We go over everything with you and touch up anything that needs it before we call the job done." },
];

const faqs = [
  { q: "Are you licensed?", a: "Yes. Fine Finishes Inc holds California CSLB License #979454 (Painting and Decorating), with a $15,000 contractor bond through American Contractors Indemnity." },
  { q: "What is limewash, and why would I want it?", a: "Limewash is a mineral finish that gives walls a soft, matte look with gentle movement in the color, so it reads very differently from flat paint. It suits both interior feature walls and exteriors. We can make sample boards so you can see the color in your own light." },
  { q: "Can I see a sample before you start?", a: "Yes. We make sample boards for specialty finishes so you can choose with confidence." },
  { q: "Do you paint cabinets?", a: "Yes. We repaint kitchen and built-in cabinets, and you can see a few before-and-after examples in our photos above." },
  { q: "Do you work on rentals and commercial spaces?", a: "Yes. We paint residential and commercial properties, and we have prepared homes for the rental market for repeat customers." },
  { q: "What areas do you cover?", a: "We work in Sacramento and the surrounding area. If you are not sure we reach you, call or text and ask." },
  { q: "How do I get a price?", a: `Call or text ${PHONE}. Tell us what you are looking to paint and we will set up a time to see it and give you a quote.` },
];

const gallery: { n: number; w: number; h: number; alt: string }[] = [
  { n: 9, w: 1080, h: 1080, alt: "Two-story heritage home painted warm yellow with white trim" },
  { n: 1, w: 608, h: 1080, alt: "Fine Finishes crew member working on a red plaster feature wall" },
  { n: 3, w: 1080, h: 1080, alt: "Before and after of a two-story stucco home repainted in white and charcoal" },
  { n: 5, w: 608, h: 1080, alt: "Bathroom with soft textured plaster walls and a wood vanity" },
  { n: 7, w: 1080, h: 1080, alt: "Before and after of oak cabinets repainted white" },
  { n: 2, w: 608, h: 1080, alt: "Dark charcoal exterior paint on a garage and siding" },
  { n: 4, w: 1080, h: 1080, alt: "Before and after of a white entry door repainted navy blue" },
  { n: 6, w: 608, h: 1080, alt: "Kitchen with cabinets painted black and light walls" },
  { n: 10, w: 1080, h: 1080, alt: "Before and after of a staircase railing repainted white" },
  { n: 11, w: 608, h: 1080, alt: "Two-story home painted bright green with a matching garage door" },
  { n: 8, w: 1080, h: 1080, alt: "Front door painted dark brown with fresh white trim" },
  { n: 12, w: 608, h: 1080, alt: "Freshly painted hallway with a gray accent wall and wood floors" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "Fine Finishes Inc",
  telephone: "+1-916-502-6228",
  areaServed: "Sacramento, CA",
  hasMap: MAPS,
  image: "/images/p9.jpg",
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 9 },
  hasCredential: "CSLB License #979454",
};

function CallBtn({ className = "" }: { className?: string }) {
  return <a href={TEL} className={`btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-cta px-7 text-lg font-bold text-on-cta hover:bg-cta-dark ${className}`}><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-paper focus:p-3">Skip to main content</a>

      <div className="hidden bg-brand-dark text-[1rem] text-white md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-1.5"><span>Serving Sacramento and the surrounding area</span><span className="font-semibold">CSLB License #979454</span></div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5 text-brand-dark"><Icon name="roller" className="h-7 w-7" /><span className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-tight text-ink">Fine Finishes Inc</span></a>
          <nav aria-label="Main" className="hidden items-center gap-6 font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-lg font-bold xl:block">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-[48px] items-center rounded-full bg-cta px-6 font-bold text-on-cta hover:bg-cta-dark md:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-full bg-cta text-on-cta md:hidden"><Icon name="phone" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <h1>Painting Contractor in Sacramento: Interior, Exterior &amp; Limewash</h1>
              <p className="mt-5 max-w-[54ch] text-xl leading-relaxed text-muted">Clean repaints with real surface prep, plus hand-applied limewash, Roman clay and plaster that are hard to find around here. Fernando and his crew show up when they say they will.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallBtn />
                <a href={SMS} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border-2 border-ink/70 px-7 text-lg font-bold hover:bg-tint"><Icon name="message" className="h-5 w-5" />Text Us</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                <Stars /><span>5.0</span><span aria-hidden="true" className="text-line">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">9 Google reviews</a><span aria-hidden="true" className="text-line">|</span><span>CSLB #979454</span>
              </p>
            </div>
            <div className="grid grid-cols-[1.7fr_1fr] gap-3">
              <Image src="/images/p9.jpg" width={1080} height={1080} priority alt="Two-story heritage home painted warm yellow with white trim by Fine Finishes" className="soft h-full w-full rounded-3xl object-cover" />
              <Image src="/images/p1.jpg" width={608} height={1080} priority alt="Fine Finishes crew member working on a red plaster feature wall" className="soft h-full w-full rounded-3xl object-cover" />
            </div>
          </div>
        </section>

        <section aria-label="Why homeowners hire us" className="bg-brand-dark text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
            {[["sparkle", "5.0 Google rating", "from 9 reviews"], ["shield", "CSLB #979454", "Painting and Decorating"], ["brush", "Limewash specialists", "plus Roman clay and plaster"], ["home", "Homes and businesses", "residential and commercial"]].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3"><Icon name={i} className="h-7 w-7 shrink-0" /><span className="leading-tight"><span className="block font-bold">{a}</span><span className="text-[1.0625rem] text-white/85">{b}</span></span></li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="max-w-[20ch]">Painting Services in Sacramento</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-12">
              <article className="reveal overflow-hidden rounded-3xl border-2 border-brand bg-paper lg:col-span-7">
                <div className="grid h-full sm:grid-cols-[1fr_0.75fr]">
                  <div className="flex flex-col p-7">
                    <span className="self-start rounded-full bg-brand px-3 py-0.5 text-[0.9375rem] font-semibold text-white">Our specialty</span>
                    <h3 className="mt-4 text-2xl">Limewash, Roman Clay &amp; Plaster</h3>
                    <p className="mt-3 grow leading-relaxed text-muted">Feature walls, fireplaces and whole rooms with the depth flat paint can&apos;t give you. Everything is applied by hand, and we will make sample boards so you can choose the color before we start.</p>
                    <a href={TEL} className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark hover:text-brand">Call about this<Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                  <Image src="/images/p5.jpg" width={608} height={1080} alt="Bathroom with soft textured plaster walls" className="h-64 w-full object-cover sm:h-full" />
                </div>
              </article>
              <article className="reveal flex flex-col rounded-3xl bg-tint p-7 lg:col-span-5">
                <span className="text-brand-dark"><Icon name="home" className="h-8 w-8" /></span>
                <h3 className="mt-4 text-2xl">Exterior Painting</h3>
                <p className="mt-3 grow leading-relaxed text-muted">Stucco, siding, trim, garage doors and front doors. We prep the surfaces properly so the color holds up to the Sacramento sun, and we can help you pick a color scheme for the whole house.</p>
                <a href={TEL} className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark hover:text-brand">Call about this<Icon name="arrow" className="h-4 w-4" /></a>
              </article>
              {[["roller", "Interior Painting", "Walls, ceilings, trim and stairwells, with floors and furniture protected and the house kept tidy each day."], ["cabinet", "Cabinet Painting", "Dated oak cabinets turned into clean, freshly painted ones, without the cost of replacing them."], ["badge", "Rentals & Commercial", "Residential and commercial repainting, including getting homes and new properties ready to rent."]].map(([i, t, d]) => (
                <article key={t} className="reveal rounded-3xl border border-line bg-paper p-7 lg:col-span-4">
                  <span className="text-brand-dark"><Icon name={i} className="h-7 w-7" /></span>
                  <h3 className="mt-3">{t}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted">{d}</p>
                  <a href={TEL} className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark hover:text-brand">Call about this<Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h2>Rated 5.0 from 9 Google Reviews</h2>
                <p className="mt-4 text-muted">Customers have found us through Nextdoor and Facebook recommendations. Here is what they said after the job.</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark underline underline-offset-4">Read all reviews on Google<Icon name="arrow" className="h-4 w-4" /></a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {reviews.map((r) => (
                  <figure key={r.name} className="reveal rounded-2xl bg-paper p-6">
                    <Stars className="h-4 w-4" />
                    <blockquote className="mt-3 text-[1.0625rem] leading-relaxed">{r.text}</blockquote>
                    <figcaption className="mt-4 font-bold">{r.name}<span className="block font-normal text-muted">{r.job}</span></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Image src="/images/p6.jpg" width={608} height={1080} alt="Kitchen with black painted cabinets finished by Fine Finishes" className="soft mx-auto max-h-[560px] w-auto rounded-3xl object-cover" />
            <div>
              <h2>Painters Who Treat It as a Craft</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Fine Finishes Inc is a licensed Sacramento painting contractor. We do the everyday repaints people need, and we also do the work most painters turn down: limewash, Roman clay and plastered fireplaces that have to be done by hand.</p>
                <p>When you call, you will likely work with Fernando. Customers describe him as patient and honest, and happy to make sample boards until you are sure about a color.</p>
                <p>Our crew, including German, keeps the job tidy, shows up when expected and takes the prep seriously, because that is the part you can&apos;t see that decides how long the paint lasts.</p>
              </div>
              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {["California CSLB License #979454", "$15,000 contractor bond", "Sample boards for specialty finishes", "Neat, tidy, on-time crews"].map((d) => <li key={d} className="flex items-start gap-2.5 font-semibold"><Icon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />{d}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2>How It Works</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-5">
              {steps.map((s, i) => (
                <li key={s.t} className="reveal flex gap-4 md:block">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-[family-name:var(--font-heading)] text-xl font-extrabold text-white">{i + 1}</span>
                  <div className="md:mt-4"><h3>{s.t}</h3><p className="mt-1.5 text-[1.0625rem] leading-relaxed text-muted">{s.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2>Our Work Around Sacramento</h2>
            <p className="mt-3 max-w-[60ch] text-muted">Real jobs from our crews, including a few before-and-afters.</p>
            <div className="mt-10 columns-2 gap-4 lg:columns-4 [&>*]:mb-4">
              {gallery.map((g) => <Image key={g.n} src={`/images/p${g.n}.jpg`} width={g.w} height={g.h} alt={g.alt} loading="lazy" className="w-full break-inside-avoid rounded-2xl" />)}
            </div>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-2">
            <iframe title="Map of Sacramento, California" src="https://maps.google.com/maps?q=Sacramento%2C%20CA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="order-2 h-[340px] w-full rounded-3xl border border-line lg:order-1" />
            <div className="order-1 lg:order-2">
              <h2>Serving Sacramento and the Surrounding Area</h2>
              <p className="mt-4 text-muted">From a single room to the outside of a two-story home, we paint across the Sacramento area. Not sure we come out your way? A quick call or text will tell you.</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 font-semibold"><Icon name="pin" className="h-5 w-5 text-brand" />Sacramento, CA</div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <h2>Common Questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-paper px-5">
                  <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4 text-lg font-bold">{f.q}<Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand" /></summary>
                  <p className="pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark text-white">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:py-20">
            <h2 className="max-w-[24ch] text-white">Ready to Get a Price on Your Paint Job?</h2>
            <p className="mt-3 max-w-[50ch] text-xl leading-relaxed text-white/85">Call or text Fine Finishes and tell us what you are looking to paint.</p>
            <a href={TEL} className="btn mt-7 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-paper px-8 text-xl font-bold text-ink hover:bg-tint"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-extrabold">Fine Finishes Inc</p>
            <p className="mt-3"><a href={TEL} className="font-bold">{PHONE}</a></p>
            <p className="mt-1 text-muted">Sacramento, CA and surrounding area</p>
          </div>
          <div><h3>Services</h3><ul className="mt-3 space-y-1.5 text-muted">{["Interior painting", "Exterior painting", "Limewash and specialty finishes", "Roman clay and plaster", "Cabinet painting", "Residential and commercial"].map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><h3>Licensing</h3><p className="mt-3 text-muted">CSLB License #979454 (Painting and Decorating)</p><p className="mt-1.5 text-muted">$15,000 bond, American Contractors Indemnity</p><a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-[44px] items-center font-semibold underline underline-offset-4">See us on Google</a></div>
        </div>
        <p className="border-t border-line px-5 py-5 text-center text-[1.0625rem] text-muted">&copy; {new Date().getFullYear()} Fine Finishes Inc. All rights reserved.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper p-2 md:hidden">
        <a href={TEL} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-cta font-bold text-on-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand font-bold text-white"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}

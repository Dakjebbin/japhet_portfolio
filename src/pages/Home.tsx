import { motion } from "motion/react"
import big_jay001 from "../assets/big_jay001.jpeg";
import big_jay002 from "../assets/big_jay002.jpeg";
import big_jay003 from "../assets/big_jay003.jpeg";


const NAV = ["About us", "Services", "Prices", "Portfolio", "Contacts"];

// Black-and-white imagery (rendered monochrome via the `grayscale` utility).
const IMG = {
  lights:big_jay003,
  portrait:big_jay002,
  texture: big_jay001
};

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-smoke bg-white md:px-6 px-3 md:py-12 py-6">
      <div className="w-full max-w-card overflow-hidden rounded-2xl bg-paper shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        className="flex items-center gap-8 bg-paper px-9.5 py-5.5">
          <span className="whitespace-nowrap font-script text-3xl leading-none text-ink">
           BIG JAY
          </span>

          <nav className="ml-7 hidden flex-1 gap-9 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item}
                href="/#"
                className="font-sans text-[13px] tracking-[0.08em] text-ink-soft transition-opacity hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex gap-3 md:ml-0">
            {[GridIcon, SendIcon, FacebookIcon].map((Icon, i) => (
              <button
                key={i}
                aria-label={["Gallery", "Telegram", "Facebook"][i]}
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper transition hover:-translate-y-0.5 hover:bg-black"
              >
                <Icon />
              </button>
            ))}
          </div>
        </motion.header>

        {/* Hero */}
        <section className="relative flex h-135 max-md:h-115">
          {/* Left light panel */}
          <div className="relative flex-[1.25] overflow-hidden">
            <img
              src={IMG.lights}
              alt=""
              className="absolute md:object-top object-right inset-0 h-full w-full object-cover grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-paper/15 to-transparent" />
          </div>

          {/* Right dark panel */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={IMG.texture}
              alt=""
              className="absolute inset-0 h-full grayscale w-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/35 to-black/5" />
          </div>

          {/* Overlapping heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          className="absolute left-11 top-10 z-4 font-display text-[58px] font-extrabold leading-[0.92] tracking-[-0.01em] text-ink [text-shadow:0_1px_0_rgba(255,255,255,0.4)] max-md:left-7 max-md:top-7 max-md:text-[40px] md:text-black text-[#f3f2f2]">
          BIG JAY's
            <br />
           PHOTOGRAPHY
          </motion.h1>

          {/* Center portrait */}
          <figure className="absolute bottom-0 left-1/2 top-0 z-3 w-85 -translate-x-1/2 overflow-hidden max-md:w-50">
            <img
              src={IMG.portrait}
              alt="Studio portrait"
              className="h-full w-full object-cover object-top grayscale contrast-[1.08]"
            />
          </figure>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          className="absolute right-15 top-[48%] z-5 flex flex-col items-end gap-5 max-md:bottom-9 max-md:right-6 max-md:top-auto">
            <button className="cursor-pointer rounded-full border border-white/45 bg-transparent px-8.5 py-4 font-sans text-[15px] text-white uppercase tracking-[0.14em] transition hover:-translate-y-0.5 hover:bg-white/10 max-md:px-6 max-md:py-3 max-md:text-xs">
              See portfolio
            </button>
            <button className="mr-4.5 cursor-pointer rounded-full border border-paper bg-paper px-10 py-4 font-sans text-[15px] font-medium uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-white max-md:mr-0 max-md:px-7 max-md:py-3 max-md:text-xs">
              Order
            </button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M21.5 2.5 2 11l6.5 2.2L11 20l3-4.3 5 2.1 2.5-15.3ZM9 13.4l8.3-6.6-6 7.4-.1 3-2.2-3.8Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3Z" />
    </svg>
  );
}
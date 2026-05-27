import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle1, subtitle2, ctaText, ctaHref, onCtaClick }) {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh] px-4 py-8 text-center border-b border-yellow-500"
      style={{
        background: 'radial-gradient(circle at top, #ffe149 0%, #ffe536 55%, #ffd900 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('https://srinidhichits.com/assests/about%20bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-black tracking-widest leading-none text-white drop-shadow-md uppercase">
          {title}
        </h1>
        {subtitle1 && (
          <p className="mt-3 text-gray-900 max-w-2xl mx-auto leading-snug text-base md:text-lg font-bold">
            {subtitle1}
          </p>
        )}
        {subtitle2 && (
          <p className="mt-1 text-gray-900 max-w-2xl mx-auto leading-snug text-base md:text-lg font-bold">
            {subtitle2}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaHref || "#bottom"}
            onClick={onCtaClick}
            className="mt-5 inline-flex h-10 px-6 items-center justify-center rounded-full bg-[#fe2121] text-white text-sm font-black uppercase tracking-wide shadow-md hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200"
          >
            {ctaText}
          </a>
        )}
      </motion.div>
    </section>
  );
}

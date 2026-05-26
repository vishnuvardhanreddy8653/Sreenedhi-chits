import { motion } from 'framer-motion';

export default function BranchCard({ branch, active, onHover, onLeave }) {
  return (
    <motion.div
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-5 mb-6 transition-all duration-300 ${
        active ? 'ring-2 ring-pink-400 scale-105 z-10' : 'hover:scale-105'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
      aria-label={`Branch: ${branch.name}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-block w-4 h-4 rounded-full bg-pink-400 shadow-lg" />
        <span className="font-semibold text-lg text-white drop-shadow-md">
          {branch.name}
          {branch.headOffice && (
            <span className="ml-2 px-2 py-0.5 text-xs rounded bg-pink-500/80 text-white font-bold">Head Office</span>
          )}
        </span>
      </div>
      <div className="text-white/90 text-sm mb-1">
        <span className="block font-medium">{branch.address}</span>
      </div>
      <div className="flex flex-col gap-1 text-white/80 text-xs">
        <span>📞 <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:underline">{branch.phone}</a></span>
        <span>✉️ <a href={`mailto:${branch.email}`} className="hover:underline">{branch.email}</a></span>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const ACHIEVEMENTS = [
  { icon: <Building2 size={32} />, value: "12+", label: "Branches", color: "text-red-600", bg: "bg-red-50" },
  { icon: <Users size={32} />, value: "1000+", label: "Employees", color: "text-red-600", bg: "bg-red-50" },
  { icon: <Award size={32} />, value: "12K+", label: "Satisfied Customers", color: "text-red-600", bg: "bg-red-50" },
  { icon: <TrendingUp size={32} />, value: "15K+", label: "Chits Managed", color: "text-red-600", bg: "bg-red-50" },
];

const STEPS = [
  { num: "01", title: "Set a Goal", desc: "Define what you are saving for — a home, education, or business." },
  { num: "02", title: "Join the Group", desc: "Enroll in a chit plan that matches your monthly budget." },
  { num: "03", title: "Start Saving", desc: "Make regular monthly contributions. Small amounts add up fast." },
  { num: "04", title: "Get Huge Amounts", desc: "Win an auction or receive the full payout at plan completion." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section
        className="relative overflow-hidden min-h-[480px] flex items-center justify-center px-4 text-center border-b border-yellow-500"
        style={{
          background: 'radial-gradient(circle at top, #ffe149 0%, #ffe536 55%, #ffd900 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url('https://srinidhichits.com/assests/about%20bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-[56px] md:text-[80px] font-black tracking-[4px] leading-none mb-5 text-white drop-shadow-[15px_30px_20px_rgba(0,0,0,0.35)]">
            ABOUT US
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto leading-none text-[24px] md:text-[30px] font-bold">
            Anyone can dream up great ideas,
          </p>
          <p className="text-gray-900 max-w-2xl mx-auto text-[24px] md:text-[30px] font-bold mt-2">
            but an idea is nothing until it's realized.
          </p>
          <a
            href="#bottom"
            className="mt-8 inline-flex h-12 w-[260px] items-center justify-center rounded-full bg-[#fe2121] text-white font-black uppercase tracking-[1px] shadow-[5px_5px_18px_rgba(250,12,12,0.856)]"
          >
            Get to Know Us
          </a>
        </motion.div>
      </section>

      <section id="bottom" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Chit Funds?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Chit Funds are the greatest form of financial organisations, protecting the dreams of their customers by safeguarding their money. You can choose a chit which suits your capital needs. They help you maximize returns by considering your opportunity cost — unlike a bank FD, your money works for <strong>you and your group</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
                <div className={`w-16 h-16 ${a.bg} ${a.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{a.icon}</div>
                <div className={`text-4xl font-extrabold ${a.color} mb-2`}>{a.value}</div>
                <p className="text-gray-500 text-sm font-medium">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="text-4xl font-extrabold text-gray-100 select-none">{step.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

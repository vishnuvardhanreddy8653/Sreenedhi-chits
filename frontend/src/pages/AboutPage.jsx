import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import usePageContent from '../hooks/usePageContent';

const DEFAULT_CONTENT = {
  hero: {
    title: "ABOUT US",
    subtitle1: "Anyone can dream up great ideas,",
    subtitle2: "but an idea is nothing until it's realized.",
    ctaText: "Get to Know Us"
  },
  whyChitFunds: {
    title: "Why Chit Funds?",
    description: "Chit Funds are the greatest form of financial organisations, protecting the dreams of their customers by safeguarding their money. You can choose a chit which suits your capital needs. They help you maximize returns by considering your opportunity cost — unlike a bank FD, your money works for you and your group."
  },
  achievementsTitle: "Our Achievements",
  achievements: [
    { iconName: "Building2", value: "12+", label: "Branches", color: "text-red-600", bg: "bg-red-50" },
    { iconName: "Users", value: "1000+", label: "Employees", color: "text-red-600", bg: "bg-red-50" },
    { iconName: "Award", value: "12K+", label: "Satisfied Customers", color: "text-red-600", bg: "bg-red-50" },
    { iconName: "TrendingUp", value: "15K+", label: "Chits Managed", color: "text-red-600", bg: "bg-red-50" },
  ],
  howItWorksTitle: "How It Works",
  steps: [
    { num: "01", title: "Set a Goal", desc: "Define what you are saving for — a home, education, or business." },
    { num: "02", title: "Join the Group", desc: "Enroll in a chit plan that matches your monthly budget." },
    { num: "03", title: "Start Saving", desc: "Make regular monthly contributions. Small amounts add up fast." },
    { num: "04", title: "Get Huge Amounts", desc: "Win an auction or receive the full payout at plan completion." },
  ]
};

const ICON_MAP = {
  Building2: <Building2 size={32} />,
  Users: <Users size={32} />,
  Award: <Award size={32} />,
  TrendingUp: <TrendingUp size={32} />
};

export default function AboutPage() {
  const { content } = usePageContent('about', DEFAULT_CONTENT);

  return (
    <div className="bg-white">
      <PageHero
        title={content.hero.title}
        subtitle1={content.hero.subtitle1}
        subtitle2={content.hero.subtitle2}
        ctaText={content.hero.ctaText}
        ctaHref="#bottom"
      />

      <section id="bottom" className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whyChitFunds.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {content.whyChitFunds.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.achievementsTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.achievements.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
                <div className={`w-16 h-16 ${a.bg} ${a.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {ICON_MAP[a.iconName] || <Building2 size={32} />}
                </div>
                <div className={`text-4xl font-extrabold ${a.color} mb-2`}>{a.value}</div>
                <p className="text-gray-500 text-sm font-medium">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.howItWorksTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.steps.map((step, i) => (
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

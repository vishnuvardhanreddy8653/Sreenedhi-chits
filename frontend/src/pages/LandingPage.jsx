import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const companyData = [
  { label: "Branches", value: "12+", icon: "🏢" },
  { label: "Employees", value: "1000+", icon: "👥" },
  { label: "Satisfied Customers", value: "12K+", icon: "😊" },
  { label: "Active Chits", value: "15K+", icon: "📋" },
  { label: "Cities Covered", value: "10+", icon: "🗺️" },
  { label: "Success Rate", value: "99.5%", icon: "⭐" }
];

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
          width: max-content;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Company Stats Banner */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-[#ffde21] to-yellow-100 py-4 border-b border-yellow-400 shadow-sm">
        <div className="flex animate-ticker">
          {[...companyData, ...companyData].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 px-8 border-r border-yellow-300 last:border-0 whitespace-nowrap">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <span className="font-bold text-gray-900 text-lg">{stat.value}</span>
                <span className="font-medium text-gray-700 text-xs block">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#ffde21] w-full border-b border-yellow-500 overflow-hidden">
        <div className="px-4 py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <img src={logo} alt="Srinidhi Chits Logo" className="h-32 md:h-48 w-auto object-contain drop-shadow-md" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tight mb-8 leading-normal py-4">
              <span className="text-red-600 drop-shadow-sm py-4 inline-block">శ్రీనిధి చిట్స్</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-900 font-medium mb-10 leading-relaxed">
              Smart Chitti provides you with reliable and high-return chit fund plans. Start saving seamlessly with our trusted financial ecosystem.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1">
                Start Saving Now
              </Link>
              <Link to="/schemes" className="bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-red-600 transition-all">
                View Available Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-[#ffde21] inline-block pb-2 px-4 uppercase tracking-wide">Why Choose Smart Chitti?</h2>
            <p className="mt-6 text-gray-700 font-medium max-w-2xl mx-auto">Experience the perfect blend of traditional savings and modern technology.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "High Returns", desc: "Maximize your savings with our optimized and secure chit plans.", icon: "💰" },
              { title: "100% Transparent", desc: "Track every payment and auction from your personalized dashboard.", icon: "🔍" },
              { title: "Trusted & Secure", desc: "Your investments are protected by industry-leading security protocols.", icon: "🛡️" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-[#ffde21] hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-6 bg-[#ffde21]/20 w-20 h-20 rounded-full flex items-center justify-center border-2 border-[#ffde21]">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="bg-[#ffde21] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-xl border border-yellow-500">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">Ready to transform your savings?</h2>
          <p className="text-gray-800 font-medium mb-10 text-lg relative z-10">Join thousands of smart investors who trust us with their financial goals.</p>
          <Link to="/register" className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 shadow-md transition-all hover:-translate-y-1 relative z-10">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import usePageContent from '../hooks/usePageContent';

const DEFAULT_CONTENT = {
  hero: {
    title: "AVAILABLE CHITS",
    subtitle1: "Choose from our wide range of plans tailored for every budget.",
    subtitle2: "From ₹3,900/month to ₹1,00,000/month — there's a plan for everyone."
  },
  durationFilters: ['All', '25 Months', '30 Months', '40 Months', '50 Months'],
  schemes: [
    { months: 50, maxBidPayable: "23,75,000", minInstallment: "32,500", maxInstallment: "50,000", minBidPayable: "15,00,000", highestDividend: "4,70,600", tag: "Most Popular" },
    { months: 25, maxBidPayable: "23,75,000", minInstallment: "75,000", maxInstallment: "1,00,000", minBidPayable: "17,50,000", highestDividend: "2,54,200", tag: "High Value" },
    { months: 50, maxBidPayable: "19,00,000", minInstallment: "26,000", maxInstallment: "40,000", minBidPayable: "12,00,000", highestDividend: null, tag: "" },
    { months: 50, maxBidPayable: "14,25,000", minInstallment: "19,500", maxInstallment: "30,000", minBidPayable: "9,00,000", highestDividend: null, tag: "" },
    { months: 30, maxBidPayable: "14,25,000", minInstallment: "35,000", maxInstallment: "50,000", minBidPayable: "9,75,000", highestDividend: "1,79,342", tag: "" },
    { months: 50, maxBidPayable: "9,50,000", minInstallment: "13,000", maxInstallment: "20,000", minBidPayable: "6,00,000", highestDividend: "1,79,348", tag: "" },
    { months: 40, maxBidPayable: "9,50,000", minInstallment: "17,500", maxInstallment: "25,000", minBidPayable: "6,50,000", highestDividend: "1,41,452", tag: "" },
    { months: 25, maxBidPayable: "9,50,000", minInstallment: "30,000", maxInstallment: "40,000", minBidPayable: "7,00,000", highestDividend: "83,296", tag: "" },
    { months: 30, maxBidPayable: "5,70,000", minInstallment: "14,000", maxInstallment: "20,000", minBidPayable: "3,90,000", highestDividend: "80,450", tag: "Great Starter" },
    { months: 50, maxBidPayable: "4,75,000", minInstallment: "6,500", maxInstallment: "10,000", minBidPayable: "3,00,000", highestDividend: "92,150", tag: "" },
    { months: 40, maxBidPayable: "4,75,000", minInstallment: "8,750", maxInstallment: "12,500", minBidPayable: "3,25,000", highestDividend: "60,119", tag: "" },
    { months: 25, maxBidPayable: "4,75,000", minInstallment: "15,000", maxInstallment: "20,000", minBidPayable: "3,50,000", highestDividend: "47,468", tag: "" },
    { months: 50, maxBidPayable: "2,85,000", minInstallment: "3,900", maxInstallment: "6,000", minBidPayable: "1,80,000", highestDividend: "49,590", tag: "" },
    { months: 30, maxBidPayable: "2,85,000", minInstallment: "7,000", maxInstallment: "10,000", minBidPayable: "1,95,000", highestDividend: "30,900", tag: "" },
    { months: 40, maxBidPayable: "2,85,000", minInstallment: "5,250", maxInstallment: "7,500", minBidPayable: "1,95,000", highestDividend: "42,310", tag: "" },
    { months: 50, maxBidPayable: "2,37,500", minInstallment: "3,250", maxInstallment: "5,000", minBidPayable: "1,50,000", highestDividend: "42,300", tag: "" },
    { months: 50, maxBidPayable: "1,90,000", minInstallment: "2,600", maxInstallment: "4,000", minBidPayable: "1,20,000", highestDividend: "27,380", tag: "" },
    { months: 25, maxBidPayable: "1,90,000", minInstallment: "6,000", maxInstallment: "8,000", minBidPayable: "1,40,000", highestDividend: "8,888", tag: "" },
  ]
};

export default function SchemesPage() {
  const { content } = usePageContent('schemes', DEFAULT_CONTENT);
  const [filter, setFilter] = useState('All');

  const filtered = content.schemes.filter(s => {
    if (filter === 'All') return true;
    return s.months === parseInt(filter);
  });

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <PageHero
        title={content.hero.title}
        subtitle1={content.hero.subtitle1}
        subtitle2={content.hero.subtitle2}
      />

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Filter by Duration:</span>
          {content.durationFilters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                filter === f ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400 whitespace-nowrap">{filtered.length} plans</span>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((scheme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1.5 rounded-full">
                    <Clock size={14} />
                    <span className="text-sm font-bold">{scheme.months} Months</span>
                  </div>
                  {scheme.tag && (
                    <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                      {scheme.tag}
                    </span>
                  )}
                </div>
                <div className="text-3xl font-extrabold text-gray-900">
                  ₹{scheme.maxBidPayable}
                </div>
                <p className="text-sm text-gray-500 mt-1">Max. Bid Payable</p>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-3 flex-grow">
                <DetailRow label="Min. Installment" value={`₹${scheme.minInstallment}`} />
                <DetailRow label="Max. Installment" value={`₹${scheme.maxInstallment}`} />
                <DetailRow label="Min. Bid Payable" value={`₹${scheme.minBidPayable}`} />
                <div className="h-12">
                  {scheme.highestDividend && (
                    <div className="flex items-center justify-between bg-emerald-50 px-3 py-2 rounded-xl h-full">
                      <span className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                        <TrendingUp size={13}/> Highest Dividend Paid
                      </span>
                      <span className="text-sm font-bold text-emerald-700">₹{scheme.highestDividend}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group-hover:bg-red-600">
                  Enroll in This Plan <ChevronRight size={16}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

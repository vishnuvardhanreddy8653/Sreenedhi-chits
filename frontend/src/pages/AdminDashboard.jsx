import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Briefcase, 
  CreditCard,
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

// Mock Data based on real Srinidhi schemes
const SCHEME_PORTFOLIO = [
  { id: 1, name: "50 Months Plan", members: 450, totalValue: "2.35 Cr", minInstallment: "19,500", progress: 85 },
  { id: 2, name: "40 Months Plan", members: 320, totalValue: "1.25 Cr", minInstallment: "17,500", progress: 65 },
  { id: 3, name: "30 Months Plan", members: 580, totalValue: "3.42 Cr", minInstallment: "14,000", progress: 92 },
  { id: 4, name: "25 Months Plan", members: 210, totalValue: "85 L", minInstallment: "30,000", progress: 45 }
];

const RECENT_CUSTOMERS = [
  { id: "CUST-8902", name: "Ramesh Kumar", scheme: "50 Months Plan", status: "Active", invested: "₹ 1,95,000", date: "Today" },
  { id: "CUST-8901", name: "Sita Reddy", scheme: "30 Months Plan", status: "Pending", invested: "₹ 42,000", date: "Yesterday" },
  { id: "CUST-8900", name: "Venkatesh P.", scheme: "25 Months Plan", status: "Completed", invested: "₹ 7,50,000", date: "12 May 2026" },
  { id: "CUST-8899", name: "Lakshmi S.", scheme: "40 Months Plan", status: "Active", invested: "₹ 87,500", date: "10 May 2026" },
  { id: "CUST-8898", name: "Praveen M.", scheme: "50 Months Plan", status: "Active", invested: "₹ 3,90,000", date: "08 May 2026" }
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Top Banner / Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CRM Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Company Portfolio & Customer Insights</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search customers..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            title="Total Customers" 
            value="12,450" 
            trend="+12%" 
            icon={<Users className="text-blue-600" size={24} />} 
            bg="bg-blue-50"
          />
          <MetricCard 
            title="Active Chits" 
            value="15K+" 
            trend="+8%" 
            icon={<Briefcase className="text-red-600" size={24} />} 
            bg="bg-red-50"
          />
          <MetricCard 
            title="Portfolio Value" 
            value="₹ 14.5 Cr" 
            trend="+24%" 
            icon={<TrendingUp className="text-emerald-600" size={24} />} 
            bg="bg-emerald-50"
          />
          <MetricCard 
            title="Monthly Collection" 
            value="₹ 82.5 L" 
            trend="+5%" 
            icon={<CreditCard className="text-orange-600" size={24} />} 
            bg="bg-orange-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Portfolio Section (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-bold text-gray-900 text-lg">Scheme Performance Portfolio</h2>
              <button className="text-red-600 text-sm font-medium hover:text-red-700 flex items-center gap-1">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {SCHEME_PORTFOLIO.map((scheme) => (
                <div key={scheme.id} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{scheme.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{scheme.members} Members • Min Inst: ₹{scheme.minInstallment}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">₹ {scheme.totalValue}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-red-600 h-2.5 rounded-full" 
                      style={{ width: `${scheme.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions / Insights (Spans 1 column) */}
          <div className="bg-gray-900 rounded-3xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <h2 className="font-bold text-xl mb-2 relative z-10">AI Insights</h2>
            <p className="text-gray-400 text-sm mb-6 relative z-10">System generated recommendations</p>
            
            <div className="space-y-4 relative z-10">
              <InsightCard text="High demand detected for 30 Months Plan this week." />
              <InsightCard text="5 pending collections from Top Tier customers." />
              <InsightCard text="New branch opening in Hyderabad might increase leads by 15%." />
            </div>

            <button className="w-full mt-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Generate Full Report <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Recent Customers Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-900 text-lg">Recent Customer Investments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Customer ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Scheme</th>
                  <th className="px-6 py-4">Amount Invested</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_CUSTOMERS.map((cust) => (
                  <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-600">{cust.id}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{cust.name}</td>
                    <td className="px-6 py-4 text-gray-600">{cust.scheme}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{cust.invested}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cust.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        cust.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {cust.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-gray-400 hover:text-gray-900 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon, bg }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${bg}`}>
          {icon}
        </div>
        <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg text-xs font-bold">
          {trend}
        </span>
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
      </div>
    </div>
  );
}

function InsightCard({ text }) {
  return (
    <div className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
        <p className="text-sm text-gray-200 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

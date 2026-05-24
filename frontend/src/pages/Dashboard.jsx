import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bell, Clock, CreditCard, TrendingUp, DollarSign, LogOut, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!userData || !token) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header & Notifications */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, {user.name}!</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Payment Notification Alert */}
            <div className="bg-orange-100 border border-orange-200 text-orange-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm animate-pulse">
              <Bell size={18} />
              <span className="text-sm font-semibold">Payment due in 2 days!</span>
              <button className="ml-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs hover:bg-orange-700 transition-colors">
                Pay Now
              </button>
            </div>
            <button onClick={() => { localStorage.clear(); navigate('/login'); }} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto space-x-2 mb-8 bg-white p-1.5 rounded-full shadow-sm border border-gray-100 w-fit">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Clock size={16}/>} label="Overview & History" />
          <TabButton active={activeTab === 'flexible'} onClick={() => setActiveTab('flexible')} icon={<TrendingUp size={16}/>} label="Flexible Plans" />
          <TabButton active={activeTab === 'loans'} onClick={() => setActiveTab('loans')} icon={<DollarSign size={16}/>} label="Apply Loan" />
          <TabButton active={activeTab === 'demat'} onClick={() => setActiveTab('demat')} icon={<CreditCard size={16}/>} label="Demat (Market) Inv." />
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'flexible' && <FlexiblePlansTab />}
          {activeTab === 'loans' && <LoansTab />}
          {activeTab === 'demat' && <DematInvestmentTab />}
        </div>

      </div>
    </div>
  );
}

// Sub-components for Tabs

function OverviewTab() {
  const history = [
    { id: "TXN-001", date: "14 May 2026", amount: "₹ 5,000", type: "Monthly Installment", status: "Success" },
    { id: "TXN-002", date: "14 Apr 2026", amount: "₹ 5,000", type: "Monthly Installment", status: "Success" },
    { id: "TXN-003", date: "02 Jan 2026", amount: "₹ 1,50,000", type: "Chit Payout (Auction)", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><CreditCard size={64}/></div>
          <p className="text-red-100 text-sm font-medium mb-1">Total Active Investments</p>
          <h3 className="text-3xl font-bold">₹ 45,000</h3>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-1">Current Active Plans</p>
          <h3 className="text-3xl font-bold text-gray-900">2</h3>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-1">Available Withdrawal Limit</p>
          <h3 className="text-3xl font-bold text-emerald-600">₹ 20,000</h3>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><FileText size={20}/> Investment History (100% Transparency)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-3 rounded-tl-xl">Date</th>
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3 rounded-tr-xl">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {history.map((h, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 text-gray-600">{h.date}</td>
                  <td className="px-4 py-4 font-mono text-gray-500">{h.id}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{h.type}</td>
                  <td className="px-4 py-4 font-bold text-gray-900">{h.amount}</td>
                  <td className="px-4 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 flex items-center gap-1 w-fit">
                      <CheckCircle size={12}/> {h.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 p-6 rounded-3xl flex justify-between items-center">
        <div>
          <h3 className="text-red-800 font-bold mb-1">Need funds urgently?</h3>
          <p className="text-red-600 text-sm">Early withdrawal is available within a short period based on service provider requirements.</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors">
          Request Early Withdrawal
        </button>
      </div>
    </div>
  );
}

function FlexiblePlansTab() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <TrendingUp size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Start a New Flexible Plan</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Invest anywhere from <strong>₹1 to ∞</strong> on a daily or monthly basis. Perfect for daily wage earners, freelancers, and businesses looking to park excess cash.
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8 text-left">
        <div className="border border-blue-200 bg-blue-50 p-4 rounded-2xl cursor-pointer hover:ring-2 ring-blue-500 transition-all">
          <h4 className="font-bold text-blue-900 mb-1">Daily Basis</h4>
          <p className="text-xs text-blue-700">Auto-debit a small amount daily</p>
        </div>
        <div className="border border-gray-200 p-4 rounded-2xl cursor-pointer hover:border-blue-500 transition-all">
          <h4 className="font-bold text-gray-900 mb-1">Monthly Basis</h4>
          <p className="text-xs text-gray-500">Standard monthly deposits</p>
        </div>
      </div>

      <div className="flex items-center border border-gray-200 rounded-full p-2 mb-6 focus-within:border-blue-500 focus-within:ring-2 ring-blue-100">
        <span className="pl-4 text-gray-500 font-bold">₹</span>
        <input type="number" placeholder="Enter custom amount..." className="w-full bg-transparent border-none focus:outline-none px-3 font-semibold text-gray-900" />
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
        Start Investing Now
      </button>
    </div>
  );
}

function LoansTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Standard Customer Loan</h2>
        <p className="text-gray-500 mb-6 text-sm">Get instant liquidity against your chit investments.</p>
        <div className="text-4xl font-extrabold text-gray-900 mb-2">2.0% <span className="text-lg text-gray-500 font-medium">interest rate</span></div>
        <ul className="space-y-3 mb-8 mt-6">
          <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-emerald-500"/> Instant Approval</li>
          <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-emerald-500"/> No Hidden Processing Fees</li>
        </ul>
        <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors">
          Apply Standard
        </button>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 blur-3xl opacity-30 rounded-full"></div>
        <div className="inline-block px-3 py-1 bg-red-500/20 text-red-200 border border-red-500/30 rounded-full text-xs font-bold mb-4">
          LOYAL CUSTOMER EXCLUSIVE
        </div>
        <h2 className="text-xl font-bold mb-2">Loyalty Loan Offer</h2>
        <p className="text-gray-400 mb-6 text-sm">Because you've been with us for over 1 year with perfect payment history.</p>
        <div className="text-4xl font-extrabold mb-2 text-red-300">1.8% <span className="text-lg text-gray-400 font-medium">interest rate</span></div>
        <ul className="space-y-3 mb-8 mt-6">
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle size={16} className="text-red-300"/> Lowest rate available</li>
          <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle size={16} className="text-red-300"/> Higher lending limits</li>
        </ul>
        <button className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-400 transition-colors">
          Claim Loyalty Loan
        </button>
      </div>
    </div>
  );
}

function DematInvestmentTab() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Type 2: 20% Demat Investment</h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-white/30">High Growth</span>
        </div>
        <p className="text-emerald-50 max-w-2xl leading-relaxed">
          Opt-in to allocate <strong>20% of your chit investments</strong> directly into the market shares. 
          When you withdraw, you get the full market return minus a nominal 1% company processing fee!
        </p>
      </div>
      
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-100 p-4 rounded-2xl">
            <p className="text-gray-500 text-xs font-medium mb-1">Your 20% Allocation</p>
            <h4 className="text-xl font-bold text-gray-900">₹ 9,000</h4>
          </div>
          <div className="border border-gray-100 p-4 rounded-2xl bg-emerald-50">
            <p className="text-emerald-700 text-xs font-medium mb-1">Current Market Value</p>
            <h4 className="text-xl font-bold text-emerald-600">₹ 10,250 <span className="text-sm font-normal">(+13.8%)</span></h4>
          </div>
          <div className="border border-gray-100 p-4 rounded-2xl">
            <p className="text-gray-500 text-xs font-medium mb-1">Company Fee (on return)</p>
            <h4 className="text-xl font-bold text-gray-900">1%</h4>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3 mb-8">
          <AlertCircle className="text-orange-600 mt-0.5 flex-shrink-0" size={18}/>
          <p className="text-sm text-orange-800">
            <strong>Market Risk Warning:</strong> If the market is down (DR), you have the full freedom to <em>wait</em> to withdraw until the market recovers, or withdraw immediately based on your own opinion.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-emerald-600 text-white py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors">
            Opt-In to Demat (20%)
          </button>
          <button className="flex-1 border-2 border-gray-200 text-gray-700 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors">
            Withdraw Market Funds
          </button>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active ? 'bg-red-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {icon} {label}
    </button>
  );
}

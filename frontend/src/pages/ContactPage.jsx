import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const CONTACT_CHANNELS = [
  { icon: <Phone size={22}/>, label: "Call Us", value: "+91 63022 96910", href: "tel:+916302296910", color: "text-blue-600", bg: "bg-blue-50", hover: "hover:bg-blue-600" },
  { icon: <MessageCircle size={22}/>, label: "WhatsApp", value: "+91 63022 96910", href: "https://wa.me/916302296910", color: "text-green-600", bg: "bg-green-50", hover: "hover:bg-green-600" },
  { icon: <InstagramIcon />, label: "Instagram", value: "@srinidhichits", href: "https://instagram.com", color: "text-pink-600", bg: "bg-pink-50", hover: "hover:bg-pink-600" },
  { icon: <FacebookIcon />, label: "Facebook", value: "Srinidhi Chits", href: "https://facebook.com", color: "text-blue-700", bg: "bg-blue-50", hover: "hover:bg-blue-700" },
  { icon: <Mail size={22}/>, label: "Email", value: "contact@srinidhichits.com", href: "mailto:contact@srinidhichits.com", color: "text-red-600", bg: "bg-red-50", hover: "hover:bg-red-600" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gray-50 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Get in <span className="text-purple-600">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Our team is ready to help you start your chit journey. Reach us instantly through any channel.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Channels */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Channels</h2>
            <p className="text-gray-500 mb-8 text-sm">Click on any channel to connect with our team directly and start your chit plan today.</p>
            <div className="space-y-4">
              {CONTACT_CHANNELS.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                  className={`flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm ${c.hover} hover:text-white hover:border-transparent transition-all group`}>
                  <div className={`p-3 ${c.bg} ${c.color} rounded-xl group-hover:bg-white/20 transition-colors`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-white">{c.label}</p>
                    <p className="text-sm text-gray-500 group-hover:text-white/80">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-purple-600"><MapPin size={22}/></div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Head Office</p>
                <p className="text-sm text-gray-500 leading-relaxed">Srinidhi Chits Pvt. Ltd.,<br/>Andhra Pradesh, India — 500001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">We'll get back to you within 1 business day.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32}/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you, {form.name}! Our team will contact you at {form.phone} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="I'd like to know more about the 50-month chit plan..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all resize-none"/>
                </div>
                <button type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <Send size={18}/> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

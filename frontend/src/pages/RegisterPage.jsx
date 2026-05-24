import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-500 mt-2 text-sm">Join thousands of smart investors today</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl mb-6 text-sm text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-xl mb-6 text-sm text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none"
                  placeholder="Ramesh Kumar"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password" value={form.password}
                  onChange={handleChange} required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none"
                  placeholder="Min. 8 characters"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword" value={form.confirmPassword}
                  onChange={handleChange} required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none"
                  placeholder="Repeat your password"
                />
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? 'Creating Account...' : 'Create Free Account'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-red-600 font-semibold hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

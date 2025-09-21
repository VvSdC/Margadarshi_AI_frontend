import React, { useState } from 'react';
import { 
  ChevronRight, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3,
  Users, 
  DollarSign, 
  Target, 
  Brain, 
  Shield, 
  Eye,
  ArrowRight,
  CheckCircle,
  XCircle,
  Activity,
  Briefcase,
  Mail,
  User,
  Building
} from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    businessIdea: '',
    companyName: '',
    industry: ''
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email: formData.email });
    navigateTo('main');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigateTo('details');
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setUser({ 
      email: formData.email,
      name: formData.name,
      businessIdea: formData.businessIdea,
      companyName: formData.companyName,
      industry: formData.industry
    });
    navigateTo('main');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Login Page Component
  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Margadarshi AI</h1>
            <p className="text-blue-200">AI-Powered Startup Analysis</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-white/70">Don't have an account?</p>
            <button
              onClick={() => navigateTo('signup')}
              className="text-blue-300 hover:text-blue-200 font-semibold mt-1"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Signup Page Component
  const SignupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Join Margadarshi AI</h1>
            <p className="text-blue-200">Create your account</p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-white/70">Already have an account?</p>
            <button
              onClick={() => navigateTo('login')}
              className="text-blue-300 hover:text-blue-200 font-semibold mt-1"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Details Page Component
  const DetailsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Tell Us About Your Business</h1>
            <p className="text-blue-200">Help us provide better insights</p>
          </div>
          
          <form onSubmit={handleDetailsSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" className="bg-gray-800">Select Industry</option>
                <option value="fintech" className="bg-gray-800">FinTech</option>
                <option value="healthcare" className="bg-gray-800">Healthcare</option>
                <option value="edtech" className="bg-gray-800">EdTech</option>
                <option value="ecommerce" className="bg-gray-800">E-commerce</option>
                <option value="saas" className="bg-gray-800">SaaS</option>
                <option value="ai" className="bg-gray-800">AI/ML</option>
              </select>
            </div>
            <div>
              <textarea
                name="businessIdea"
                placeholder="Describe your business idea..."
                value={formData.businessIdea}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Continue to Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // Main Page Component
  const MainPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Margadarshi AI</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user?.name || user?.email}</span>
              <button
                onClick={() => {
                  setUser(null);
                  navigateTo('login');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Startup Analysis</h2>
          <p className="text-xl text-blue-100 mb-6">
            Get comprehensive insights, risk assessments, and growth potential analysis for your startup investments.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigateTo('dashboard')}
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              View Dashboard <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigateTo('risks')}
              className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center gap-2"
            >
              Check Risk Indicators <Shield className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Growth Score</p>
                <p className="text-2xl font-bold text-gray-900">8.5/10</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Risk Level</p>
                <p className="text-2xl font-bold text-gray-900">Medium</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Market Rank</p>
                <p className="text-2xl font-bold text-gray-900">#12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Investment Grade</p>
                <p className="text-2xl font-bold text-gray-900">A-</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            onClick={() => navigateTo('dashboard')}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Investor Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics, growth metrics, and competitive benchmarking.
            </p>
            <div className="flex items-center text-blue-600 group-hover:text-blue-700">
              <span className="font-semibold">View Dashboard</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div 
            onClick={() => navigateTo('risks')}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Indicators</h3>
            <p className="text-gray-600 mb-4">
              AI-powered risk assessment with red flags and mitigation strategies.
            </p>
            <div className="flex items-center text-red-600 group-hover:text-red-700">
              <span className="font-semibold">Check Risks</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Team Analysis</h3>
            <p className="text-gray-600 mb-4">
              Founder background verification and team composition insights.
            </p>
            <div className="flex items-center text-green-600">
              <span className="font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Risk Indicators Page
  const RiskPage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigateTo('main')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Risk Indicators</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Risk Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Medium Risk Level</h2>
              <p className="text-gray-600">Overall risk assessment based on multiple factors</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">3</h3>
              <p className="text-gray-600">High Risk Flags</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">5</h3>
              <p className="text-gray-600">Medium Risk Flags</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600">Positive Indicators</p>
            </div>
          </div>
        </div>

        {/* Risk Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Financial Risks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Financial Risks
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Inconsistent Revenue Projections</p>
                  <p className="text-sm text-gray-600">Q3 projections don't align with historical growth</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">High Burn Rate</p>
                  <p className="text-sm text-gray-600">Current runway: 8 months</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Strong Unit Economics</p>
                  <p className="text-sm text-gray-600">LTV:CAC ratio of 4.2x</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Risks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Market Risks
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Inflated Market Size</p>
                  <p className="text-sm text-gray-600">TAM estimates appear 3x higher than industry standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">Competitive Pressure</p>
                  <p className="text-sm text-gray-600">5 well-funded competitors in same space</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Growing Market</p>
                  <p className="text-sm text-gray-600">25% YoY market growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Risks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-600" />
              Operational Risks
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">High Churn Rate</p>
                  <p className="text-sm text-gray-600">Monthly churn increased to 12%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">Key Person Risk</p>
                  <p className="text-sm text-gray-600">Heavy dependence on founder for sales</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Strong Technology Stack</p>
                  <p className="text-sm text-gray-600">Scalable architecture with 99.9% uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Risks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-600" />
              Team Risks
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">Limited Domain Experience</p>
                  <p className="text-sm text-gray-600">First-time founders in complex industry</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">Small Technical Team</p>
                  <p className="text-sm text-gray-600">Only 2 engineers for ambitious roadmap</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Strong Advisory Board</p>
                  <p className="text-sm text-gray-600">Industry veterans providing guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigateTo('main')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Investor Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{user?.companyName || 'Your Startup'}</h2>
              <p className="text-blue-100 mb-2">{user?.industry || 'Technology'} • Series A</p>
              <p className="text-blue-200">Last Updated: Today</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">A-</div>
              <div className="text-blue-200">Investment Grade</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-500 text-sm">Revenue Growth</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">185%</div>
            <div className="text-green-600 text-sm">+23% vs last quarter</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-500 text-sm">Active Users</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">47K</div>
            <div className="text-blue-600 text-sm">+12% MoM</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-500 text-sm">ARR</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">$2.4M</div>
            <div className="text-purple-600 text-sm">+156% YoY</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-gray-500 text-sm">Burn Multiple</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">1.8x</div>
            <div className="text-green-600 text-sm">Industry avg: 2.4x</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Growth Potential */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Growth Potential Analysis
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Market Opportunity</span>
                  <span className="text-green-600 font-bold">9.2/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Large addressable market with high growth rate</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Product-Market Fit</span>
                  <span className="text-blue-600 font-bold">8.1/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '81%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Strong customer retention and organic growth</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Scalability</span>
                  <span className="text-purple-600 font-bold">7.8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Technology platform supports rapid scaling</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Competitive Moat</span>
                  <span className="text-orange-600 font-bold">6.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Developing network effects and brand recognition</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <h4 className="font-bold text-green-800 mb-2">Key Growth Drivers</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Expanding to 3 new verticals in Q2</li>
                <li>• Partnership with major enterprise client</li>
                <li>• AI-powered features driving engagement</li>
                <li>• International expansion planned for H2</li>
              </ul>
            </div>
          </div>

          {/* Competitive Benchmarking */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Industry Benchmarking
            </h3>

            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Revenue Multiple</span>
                  <span className="text-blue-600 font-bold">Above Average</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Your Company: 12.5x</span>
                  <span>•</span>
                  <span>Industry Avg: 8.2x</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Growth Rate</span>
                  <span className="text-green-600 font-bold">Top Quartile</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Your Company: 185%</span>
                  <span>•</span>
                  <span>Industry Avg: 95%</span>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Burn Efficiency</span>
                  <span className="text-yellow-600 font-bold">Good</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Your Company: 1.8x</span>
                  <span>•</span>
                  <span>Industry Avg: 2.4x</span>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Customer Acquisition</span>
                  <span className="text-purple-600 font-bold">Excellent</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Your CAC: $125</span>
                  <span>•</span>
                  <span>Industry Avg: $245</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Top Competitors</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold">CompetitorA</span>
                    <span className="text-sm text-gray-600 ml-2">Series B • $15M ARR</span>
                  </div>
                  <span className="text-red-600 text-sm">Threat Level: High</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold">CompetitorB</span>
                    <span className="text-sm text-gray-600 ml-2">Series C • $32M ARR</span>
                  </div>
                  <span className="text-yellow-600 text-sm">Threat Level: Medium</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold">CompetitorC</span>
                    <span className="text-sm text-gray-600 ml-2">Series A • $8M ARR</span>
                  </div>
                  <span className="text-green-600 text-sm">Threat Level: Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Recommendations */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            AI Investment Recommendations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border-l-4 border-green-500 bg-green-50">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Strong Buy Recommendation
              </h4>
              <p className="text-green-700 text-sm mb-3">
                Exceptional growth metrics, strong product-market fit, and experienced team position this startup for significant returns.
              </p>
              <div className="text-sm text-green-600">
                <strong>Recommended Investment:</strong> $500K - $1M<br/>
                <strong>Expected ROI:</strong> 15-25x over 5-7 years
              </div>
            </div>

            <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Key Monitoring Points
              </h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Monitor burn rate and runway extension</li>
                <li>• Track competitive response to new features</li>
                <li>• Watch for regulatory changes in target market</li>
                <li>• Assess team scaling and retention</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-3">Investment Thesis Summary</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              This startup demonstrates exceptional fundamentals with revenue growth significantly above industry benchmarks, 
              strong unit economics, and a large addressable market. The team has proven execution capability, and the product 
              shows clear signs of product-market fit. While there are some competitive risks to monitor, the overall opportunity 
              presents compelling risk-adjusted returns for early-stage investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate page based on current state
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'details':
        return <DetailsPage />;
      case 'main':
        return <MainPage />;
      case 'risks':
        return <RiskPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;
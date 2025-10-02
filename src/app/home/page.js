'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '../Components/DashboardLayout';

const DashboardHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDetails, setShowDetails] = useState(false);

  // Sample data
  const patientName = "Omor kenny";
  const upcomingAppointment = {
  testName: 'Full Body Checkup - Comprehensive',
  date: '2025-10-05',
  time: '10:00 AM',
  doctor: 'Dr. Sarah Johnson',
  location: 'ProMed Lab - Main Branch',
  address: '123 Health Street, Downtown, State',
  testsIncluded: [
    'Complete Blood Count (CBC)',
    'Liver Function Test',
    'Kidney Function Test',
    'Lipid Profile',
    'Thyroid Function Test',
    'Blood Sugar (Fasting & PP)',
    'Vitamin D',
    'Vitamin B12'
  ],
  instructions: [
    'Fasting required: 10-12 hours before test',
    'Bring your ID card and appointment confirmation',
    'Arrive 15 minutes early',
    'Wear comfortable clothing'
  ],
  price: '$2499'
};

  const recentActivity = [
    { id: 1, action: 'Test results available', test: 'Blood Test', time: '2 hours ago' },
    { id: 2, action: 'Appointment confirmed', test: 'Full Body Checkup', time: '1 day ago' },
    { id: 3, action: 'Report downloaded', test: 'Advanced Checkup', time: '3 days ago' }
  ];

  const healthMetrics = [
    { name: 'Blood Pressure', value: '120/80', status: 'Normal', unit: 'mmHg' },
    { name: 'Blood Sugar', value: '95', status: 'Normal', unit: 'mg/dL' },
    { name: 'BMI', value: '23.5', status: 'Healthy', unit: 'kg/m²' },
    { name: 'Cholesterol', value: '180', status: 'Normal', unit: 'mg/dL' }
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Compact Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {getGreeting()}, {patientName}
            </h1>
            <p className="text-gray-600 mt-1">Here&apos;s what&apos;s happening with your health today</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-lg font-semibold text-gray-900">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">12</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Total Tests</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">8</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Appointments</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">5</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Reports Ready</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">1</span>
            </div>
            <p className="text-sm font-medium text-gray-600">Upcoming</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Appointment & Actions */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Next Appointment Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-900">Next Appointment</h2>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  Confirmed
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{upcomingAppointment.testName}</h3>
                  <p className="text-gray-600 text-sm">{upcomingAppointment.doctor}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-gray-900">{formatDate(upcomingAppointment.date)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Time</p>
                    <p className="font-semibold text-gray-900">{upcomingAppointment.time}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => setShowDetails(!showDetails)}
                      className="flex-1 py-2.5 bg-[#407BFF] text-white text-sm font-medium rounded-lg hover:bg-[#3366DD] transition"
                  >
                    {showDetails ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="flex-1 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
                    Reschedule
                  </button>
                </div>
              </div>
                        {/* Slide-out Details Section */}
{showDetails && (
  <div className="mt-6 pt-6 border-t border-gray-200">
    
    {/* Location & Price */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Location</p>
            <p className="text-sm font-semibold text-gray-900">{upcomingAppointment.location}</p>
            <p className="text-xs text-gray-600 mt-1">{upcomingAppointment.address}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Total Cost</p>
            <p className="text-2xl font-bold text-gray-900">{upcomingAppointment.price}</p>
            <p className="text-xs text-green-600 mt-1">Payment confirmed</p>
          </div>
        </div>
      </div>
    </div>

    {/* Tests Included */}
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        Tests Included ({upcomingAppointment.testsIncluded.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {upcomingAppointment.testsIncluded.map((test, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
            <span className="text-sm text-gray-700">{test}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-[#407BFF] hover:bg-blue-50 transition group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-100 transition">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Book Test</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-[#407BFF] hover:bg-blue-50 transition group">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-green-100 transition">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Results</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-[#407BFF] hover:bg-blue-50 transition group">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-100 transition">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">History</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-[#407BFF] hover:bg-blue-50 transition group">
                  <Link href='/profile'>
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-100 transition">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Profile</span>
                  </Link>
                </button>
              </div>
            </div>

            {/* Health Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-2">{metric.name}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                    <p className="text-xs text-gray-500 mb-2">{metric.unit}</p>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      {metric.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Activity */}
          <div className="space-y-6">
            
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600 mt-1">{activity.test}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm text-[#407BFF] font-medium hover:bg-blue-50 rounded-lg transition">
                View All Activity
              </button>
            </div>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Our support team is here to assist you with any questions.</p>
              <button className="w-full py-2 bg-white text-[#407BFF] text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                Contact Support
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
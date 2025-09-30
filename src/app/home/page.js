'use client'
import React, { useState } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

const DashboardHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample data
  const patientName = "John Doe";
  const upcomingAppointment = {
    testName: 'Full Body Checkup - Comprehensive',
    date: '2025-10-05',
    time: '10:00 AM',
    doctor: 'Dr. Sarah Johnson'
  };

  const recentActivity = [
    { id: 1, action: 'Test results available', test: 'Blood Test', time: '2 hours ago', icon: '📋' },
    { id: 2, action: 'Appointment confirmed', test: 'Full Body Checkup', time: '1 day ago', icon: '✅' },
    { id: 3, action: 'Report downloaded', test: 'Advanced Checkup', time: '3 days ago', icon: '⬇️' }
  ];

  const healthMetrics = [
    { name: 'Blood Pressure', value: '120/80', status: 'Normal', icon: '❤️', color: 'from-red-400 to-pink-500' },
    { name: 'Blood Sugar', value: '95 mg/dL', status: 'Normal', icon: '🩸', color: 'from-blue-400 to-cyan-500' },
    { name: 'BMI', value: '23.5', status: 'Healthy', icon: '⚖️', color: 'from-green-400 to-emerald-500' },
    { name: 'Cholesterol', value: '180 mg/dL', status: 'Normal', icon: '💊', color: 'from-purple-400 to-indigo-500' }
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
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Welcome Header with Gradient Background */}
        <div className="bg-gradient-to-r from-[#407BFF] via-[#5B8FFF] to-[#7BA3FF] rounded-3xl p-8 
        md:p-10 mb-6 shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {getGreeting()}, {patientName}! 👋
                </h1>
                <p className="text-blue-100 text-lg">Welcome back to your health dashboard</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-4 text-gray-700">
                <p className="text-sm text-blue-300">Today</p>
                <p className="text-2xl font-bold">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <button className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600
           hover:to-blue-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all
            transform hover:-translate-y-1">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-1">Book Test</h3>
            <p className="text-blue-100 text-sm">Schedule appointment</p>
          </button>

          <button className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600
           hover:to-green-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all
            transform hover:-translate-y-1">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-1">View Results</h3>
            <p className="text-green-100 text-sm">Check test reports</p>
          </button>

          <button className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600
           hover:to-purple-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all 
           transform hover:-translate-y-1">
            <div className="text-4xl mb-3">🩺</div>
            <h3 className="font-bold text-lg mb-1">My Health</h3>
            <p className="text-purple-100 text-sm">Health metrics</p>
          </button>

          <button className="bg-gradient-to-br from-orange-500 to-orange-600
           hover:from-orange-600 hover:to-orange-700 rounded-2xl p-6 text-white shadow-lg 
           hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-4xl mb-3">👤</div>
            <h3 className="font-bold text-lg mb-1">Profile</h3>
            <p className="text-orange-100 text-sm">Account settings</p>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Upcoming Appointment - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 
          rounded-3xl p-8 shadow-xl border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 
              rounded-xl flex items-center justify-center text-2xl shadow-lg">
                ⏰
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Next Appointment</h2>
            </div>
            
            {upcomingAppointment ? (
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{upcomingAppointment.testName}</h3>
                    <p className="text-gray-600 mb-1">👨‍⚕️ {upcomingAppointment.doctor}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Confirmed
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">📅 Date</p>
                    <p className="font-bold text-gray-800">{formatDate(upcomingAppointment.date)}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">🕐 Time</p>
                    <p className="font-bold text-gray-800">{upcomingAppointment.time}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-gradient-to-r from-[#407BFF] to-[#5B8FFF] text-white rounded-xl font-semibold hover:shadow-lg transition">
                    View Details
                  </button>
                  <button className="flex-1 py-3 border-2 border-[#407BFF] text-[#407BFF] rounded-xl font-semibold hover:bg-blue-50 transition">
                    Reschedule
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No upcoming appointments</p>
                <button className="px-6 py-3 bg-gradient-to-r from-[#407BFF] to-[#5B8FFF] text-white rounded-xl font-semibold">
                  Book Now
                </button>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 shadow-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-xl shadow-lg">
                🔔
              </div>
              <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{activity.action}</p>
                      <p className="text-gray-600 text-xs">{activity.test}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-200 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              💚
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your Health Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                  {metric.icon}
                </div>
                <h3 className="text-sm text-gray-600 mb-2">{metric.name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-2">{metric.value}</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {metric.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100 text-sm mb-1">Total Tests</p>
                <p className="text-4xl font-bold">12</p>
              </div>
              <div className="text-5xl opacity-50">📝</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm mb-1">Appointments</p>
                <p className="text-4xl font-bold">8</p>
              </div>
              <div className="text-5xl opacity-50">📅</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm mb-1">Reports Ready</p>
                <p className="text-4xl font-bold">5</p>
              </div>
              <div className="text-5xl opacity-50">📊</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
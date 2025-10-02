'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '../Components/DashboardLayout';

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      testName: 'Full Body Checkup - Comprehensive',
      date: '2025-10-05',
      time: '10:00 AM',
      status: 'Confirmed',
      price: '$2499',
      doctor: 'Dr. Sarah Johnson',
      location: 'ProMed Lab - Main Branch'
    },
    {
      id: 2,
      testName: 'Full Body Checkup - Essential',
      date: '2025-10-12',
      time: '02:00 PM',
      status: 'Pending',
      price: '$1499',
      doctor: 'Dr. Michael Chen',
      location: 'ProMed Lab - Downtown'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      testName: 'Full Body Checkup - Advanced',
      date: '2025-09-15',
      time: '09:00 AM',
      status: 'Completed',
      price: '$3499',
      doctor: 'Dr. Emily Roberts',
      location: 'ProMed Lab - Main Branch',
      reportReady: true
    },
    {
      id: 4,
      testName: 'Full Body Checkup - Essential',
      date: '2025-08-20',
      time: '11:00 AM',
      status: 'Completed',
      price: '$1499',
      doctor: 'Dr. James Wilson',
      location: 'ProMed Lab - Downtown',
      reportReady: true
    }
  ];

  const appointments = activeTab === 'upcoming' ? upcomingAppointments : pastAppointments;

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleCancel = (id) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      alert(`Appointment ${id} cancelled successfully!`);
    }
  };

  const handleReschedule = (id) => {
    alert(`Rescheduling appointment ${id}...`);
  };

  const handleDownloadReport = (id) => {
    alert(`Downloading report for appointment ${id}...`);
  };

  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[#407BFF] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#151516]">My Appointments</h1>
              <p className="text-gray-600">Manage your test appointments</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-6 inline-flex">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'upcoming'
                ? 'bg-[#407BFF] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Upcoming ({upcomingAppointments.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'past'
                ? 'bg-[#407BFF] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Past ({pastAppointments.length})
          </button>
        </div>

        {/* Appointments List */}
        {appointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#151516] mb-2">No Appointments Found</h3>
            <p className="text-gray-600 mb-6">You don&apos;t have any {activeTab} appointments yet.</p>
            <button className="px-6 py-3 bg-[#407BFF] text-white rounded-lg font-semibold hover:bg-[#3366DD] transition">
              Book New Appointment
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                
                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{appointment.testName}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Total Cost</p>
                      <p className="text-2xl font-bold text-[#407BFF]">{appointment.price}</p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Doctor Info */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Doctor</p>
                        <p className="font-semibold text-gray-900 text-sm">{appointment.doctor}</p>
                      </div>
                    </div>

                    {/* Location Info */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-semibold text-gray-900 text-sm">{appointment.location}</p>
                      </div>
                    </div>

                    {/* Date Info */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="font-semibold text-gray-900 text-sm">{formatDate(appointment.date)}</p>
                      </div>
                    </div>

                    {/* Time Info */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="font-semibold text-gray-900 text-sm">{appointment.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {activeTab === 'upcoming' ? (
                      <>
                        <button 
                          onClick={() => handleReschedule(appointment.id)}
                          className="flex-1 px-4 py-2.5 bg-[#407BFF] text-white text-sm font-medium rounded-lg hover:bg-[#3366DD] transition"
                        >
                          Reschedule
                        </button>
                        <button 
                          onClick={() => handleCancel(appointment.id)}
                          className="flex-1 px-4 py-2.5 border border-red-500 text-red-500 text-sm font-medium rounded-lg hover:bg-red-50 transition"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        {appointment.reportReady && (
                          <button 
                            onClick={() => handleDownloadReport(appointment.id)}
                            className="flex-1 px-4 py-2.5 bg-[#407BFF] text-white text-sm font-medium rounded-lg hover:bg-[#3366DD] transition flex items-center justify-center gap-2"
                          >
                            
                            Download Report
                          </button>
                        )}
                        <button className="flex-1 px-4 py-2.5 border border-[#407BFF] text-[#407BFF] text-sm font-medium rounded-lg hover:bg-blue-50 transition">
                          Book Again
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Quick Action Button */}
        <Link href='/bookings'>
        <div className="mt-8 text-center">
          <button className="px-8 py-4 bg-white text-[#407BFF] border-2 border-[#407BFF] rounded-lg font-bold hover:bg-[#407BFF] hover:text-white transition shadow-lg flex items-center gap-2 mx-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Book New Appointment
          </button>
        </div>
        </Link>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default MyAppointments;
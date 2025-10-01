'use client'
import React, { useState } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+234 803 456 7890',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    address: '123 Health Street, Lagos',
    emergencyContact: '+234 805 123 4567',
    emergencyName: 'Jane Doe'
  });

  const [notifications, setNotifications] = useState({
    emailResults: true,
    smsReminders: true,
    appointmentAlerts: true,
    healthTips: false,
    promotions: false
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationToggle = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    alert('Password change functionality');
  };

  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Profile Card */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-3xl p-8 mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center text-6xl shadow-2xl">
                👤
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{profileData.fullName}</h1>
              <p className="text-purple-100 text-lg mb-4">{profileData.email}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-purple-600 text-sm font-semibold">
                  🩸 {profileData.bloodGroup}
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-purple-600 text-sm font-semibold">
                  📅 Member since 2024
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-purple-600 text-sm font-semibold">
                  ✅ Verified
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {isEditing ? '✏️ Editing...' : '✏️ Edit Profile'}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'personal'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            👤 Personal Info
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'security'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🔒 Security
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🔔 Notifications
          </button>
        </div>

        {/* Personal Info Tab */}
        {activeTab === 'personal' && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                📝
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={profileData.bloodGroup}
                  onChange={handleInputChange}
                 
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Name</label>
                <input
                  type="text"
                  name="emergencyName"
                  value={profileData.emergencyName}
                  onChange={handleInputChange}
               
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Number</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={profileData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition disabled:bg-gray-50"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  💾 Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition"
                >
                  ❌ Cancel
                </button>
              </div>
            )}
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🔐
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Password</h3>
                    <p className="text-gray-600 text-sm">Last changed 30 days ago</p>
                  </div>
                  <button
                    onClick={handleChangePassword}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Two-Factor Authentication</h3>
                    <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                  </div>
                  <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-50 transition">
                    Enable 2FA
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Active Sessions</h3>
                    <p className="text-gray-600 text-sm">Manage your active login sessions</p>
                  </div>
                  <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition">
                    View Sessions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🔔
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Notification Preferences</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {key === 'emailResults' && 'Receive test results via email'}
                      {key === 'smsReminders' && 'Get SMS reminders for appointments'}
                      {key === 'appointmentAlerts' && 'Notifications for upcoming appointments'}
                      {key === 'healthTips' && 'Weekly health tips and advice'}
                      {key === 'promotions' && 'Special offers and promotions'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationToggle(key)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      value ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                        value ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
    </DashboardLayout>
  );
};

export default ProfileSettings;
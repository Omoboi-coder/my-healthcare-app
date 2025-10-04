'use client'
import React, {useState} from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    testPackage: '',
    concerns: '',
    preferredDate: '',
    preferredTime: '',
  });

  const testPackages = [  
    { id: 1, name: 'Full Body Checkup - Essential', price: '$1499', tests: '8 Tests' },
    { id: 2, name: 'Full Body Checkup - Comprehensive', price: '$2499', tests: '28 Tests', recommended: true },
    { id: 3, name: 'Full Body Checkup - Advanced', price: '$3499', tests: '68 Tests' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Appointment booked successfully! We will contact you shortly.');
  };

  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F5F8FF] to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#407BFF] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#151516] mb-2">Book Your Appointment</h1>
          <p className="text-gray-600 text-lg">Fill in your details and select your preferred test package</p>
        </div>

        <div className="space-y-6">
          
          {/* Personal Information Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-[#151516] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#407BFF] text-white rounded-full flex items-center justify-center text-sm">1</span>
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF] 
                   text-[#666363] placeholder:text-[#666363] focus:border-transparent outline-none transition"
                  placeholder="Omor Kenny"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF]
                   text-[#666363] placeholder:text-[#666363] focus:border-transparent outline-none transition"
                  placeholder="kenny@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF]
                   text-[#666363] placeholder:text-[#666363] focus:border-transparent outline-none transition"
                  placeholder="+999 XXX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF]
                   text-[#666363] placeholder:text-[#666363] focus:border-transparent outline-none transition"
                  placeholder="25"
                  min="1"
                  max="120"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                <div className="flex gap-4">
                  {['Male', 'Female', 'Other'].map((gender) => (
                    <label key={gender} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleChange}
                        className="w-5 h-5 text-[#407BFF] focus:ring-[#407BFF]"
                      />
                      <span className="ml-2 text-gray-700">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Test Package Selection */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-[#151516] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#407BFF] text-white rounded-full flex items-center 
              justify-center text-sm">2</span>
              Select Test Package
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {testPackages.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all ${
                    formData.testPackage === pkg.name
                      ? 'border-[#407BFF] bg-[#F5F8FF]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="testPackage"
                    value={pkg.name}
                    checked={formData.testPackage === pkg.name}
                    onChange={handleChange}
                    className="absolute top-4 right-4 w-5 h-5 text-[#407BFF] focus:ring-[#407BFF]"
                  />
                  
                  <div className="flex items-center justify-between pr-8">
                    <div>
                      <div className="flex items-start md:items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#151516]">{pkg.name}</h3>
                        {pkg.recommended && (
                          <span className="px-2 py-1 bg-[#407BFF] text-white text-xs rounded-full">RECOMMENDED</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{pkg.tests}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#407BFF]">{pkg.price}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Medical Concerns */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-[#151516] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#407BFF] text-white rounded-full flex items-center
               justify-center text-sm">3</span>
              Medical Concerns
            </h2>
            
            <div>
              <label className="block text-[17px] font-medium text-gray-700 mb-2">
                What health concerns do you have? (Optional)
              </label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF]
                 text-[#666363] placeholder:text-[#666363] focus:border-transparent outline-none transition resize-none"
                placeholder="Please describe any symptoms or health concerns you'd like to address..."
              />
            </div>
          </div>

         {/* Preferred Date & Time */}
          <div className="pb-6">
            <h2 className="text-xl font-semibold text-[#151516] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#407BFF] text-white rounded-full flex items-center justify-center text-sm">4</span>
              Preferred Schedule
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full max-w-full overflow-hidden">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                <input
                  type="text"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  placeholder="dd/mm/yyyy"
                  className="w-full min-w-0 max-w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF] focus:border-transparent outline-none transition text-[#666363] placeholder:text-[#666363] box-border"
                />
              </div>

              <div className="w-full max-w-full overflow-hidden">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full min-w-0 max-w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#407BFF] focus:border-transparent outline-none transition text-[#666363] box-border appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                >
                  <option value="">Select time slot</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>
          </div> 

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              className="w-full md:w-auto px-12 py-4 bg-[#407BFF] text-white text-lg font-bold rounded-lg 
              hover:bg-[#3366DD] transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Info Footer */}
        <div className="mt-8 p-4 bg-[#F5F8FF] rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[#407BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-semibold text-[#151516] mb-1">Important Information</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• You will receive a confirmation email within 24 hours</li>
                <li>• Please arrive 15 minutes before your scheduled time</li>
                <li>• Bring a valid ID and your confirmation email</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default BookingForm;
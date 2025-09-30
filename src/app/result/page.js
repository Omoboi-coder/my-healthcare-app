'use client'
import React, { useState } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

const TestResults = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  // Sample test results data
  const testResults = [
    {
      id: 1,
      testName: 'Full Body Checkup - Comprehensive',
      date: '2025-09-15',
      status: 'Ready',
      doctor: 'Dr. Sarah Johnson',
      summary: 'All parameters within normal range',
      color: 'green',
      icon: '✓',
      resultsCount: 28,
      highlights: [
        { name: 'Blood Sugar', value: '95 mg/dL', status: 'Normal', range: '70-100' },
        { name: 'Cholesterol', value: '180 mg/dL', status: 'Normal', range: '< 200' },
        { name: 'Hemoglobin', value: '14.5 g/dL', status: 'Normal', range: '13-17' }
      ]
    },
    {
      id: 2,
      testName: 'Full Body Checkup - Essential',
      date: '2025-08-20',
      status: 'Ready',
      doctor: 'Dr. Michael Chen',
      summary: 'Minor attention needed',
      color: 'yellow',
      icon: '!',
      resultsCount: 8,
      highlights: [
        { name: 'Blood Pressure', value: '135/88 mmHg', status: 'Elevated', range: '< 120/80' },
        { name: 'Blood Sugar', value: '92 mg/dL', status: 'Normal', range: '70-100' },
        { name: 'BMI', value: '26.5', status: 'Elevated', range: '18.5-24.9' }
      ]
    },
    {
      id: 3,
      testName: 'Full Body Checkup - Advanced',
      date: '2025-07-10',
      status: 'Ready',
      doctor: 'Dr. Emily Roberts',
      summary: 'All parameters excellent',
      color: 'green',
      icon: '✓',
      resultsCount: 68,
      highlights: [
        { name: 'Vitamin D', value: '45 ng/mL', status: 'Optimal', range: '30-100' },
        { name: 'Thyroid TSH', value: '2.1 mIU/L', status: 'Normal', range: '0.5-5.0' },
        { name: 'Liver Function', value: 'Normal', status: 'Normal', range: 'Normal' }
      ]
    }
  ];

  const getStatusColor = (color) => {
    switch(color) {
      case 'green': return 'bg-green-50 border-green-200';
      case 'yellow': return 'bg-yellow-50 border-yellow-200';
      case 'red': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusIconBg = (color) => {
    switch(color) {
      case 'green': return 'bg-green-500';
      case 'yellow': return 'bg-yellow-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getParameterColor = (status) => {
    switch(status) {
      case 'Normal': return 'text-green-600 bg-green-100';
      case 'Optimal': return 'text-blue-600 bg-blue-100';
      case 'Elevated': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleDownload = (id) => {
    alert(`Downloading report for test ${id}...`);
  };

  const handleView = (result) => {
    setSelectedResult(selectedResult?.id === result.id ? null : result);
  };

  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F5F8FF] via-white to-[#E8F0FF] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Animation */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#407BFF] to-[#3366DD] rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#151516] mb-2">My Test Results</h1>
          <p className="text-gray-600 text-lg">View and download your medical reports</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Total Tests</p>
                <p className="text-3xl font-bold">{testResults.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">All Normal</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Latest Test</p>
                <p className="text-xl font-bold">{formatDate(testResults[0].date)}</p>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          {testResults.map((result) => (
            <div key={result.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              
              {/* Main Card Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  
                  {/* Status Icon */}
                  <div className={`w-14 h-14 ${getStatusIconBg(result.color)} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{result.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#151516] mb-1">{result.testName}</h3>
                        <p className="text-gray-600 text-sm">by {result.doctor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {result.status}
                        </span>
                        <span className="text-gray-500 text-sm">{formatDate(result.date)}</span>
                      </div>
                    </div>

                    {/* Summary Banner */}
                    <div className={`${getStatusColor(result.color)} border-2 rounded-xl p-4 mb-4`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                          </svg>
                          <span className="font-semibold text-gray-700">{result.summary}</span>
                        </div>
                        <span className="text-sm text-gray-600">{result.resultsCount} parameters tested</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleView(result)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#407BFF] text-white rounded-lg font-semibold hover:bg-[#3366DD] transition shadow-md"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        {selectedResult?.id === result.id ? 'Hide Details' : 'View Details'}
                      </button>
                      
                      <button
                        onClick={() => handleDownload(result.id)}
                        className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#407BFF] text-[#407BFF] rounded-lg font-semibold hover:bg-[#F5F8FF] transition"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Details Section */}
              {selectedResult?.id === result.id && (
                <div className="bg-gradient-to-br from-[#F5F8FF] to-white border-t-2 border-gray-100 p-6 animate-fadeIn">
                  <h4 className="text-lg font-bold text-[#151516] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#407BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Key Parameters
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {result.highlights.map((param, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">{param.name}</p>
                        <p className="text-2xl font-bold text-[#151516] mb-2">{param.value}</p>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getParameterColor(param.status)}`}>
                            {param.status}
                          </span>
                          <span className="text-xs text-gray-500">Range: {param.range}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default TestResults;
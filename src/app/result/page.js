'use client'
import React, { useState } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

const TestResults = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  const testResults = [
    {
      id: 1,
      testName: 'Full Body Checkup - Comprehensive',
      date: '2025-09-15',
      status: 'Ready',
      doctor: 'Dr. Sarah Johnson',
      summary: 'All parameters within normal range',
      color: 'green',
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
      case 'green': return 'bg-green-50 border-green-200 text-green-700';
      case 'yellow': return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'red': return 'bg-red-50 border-red-200 text-red-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getParameterColor = (status) => {
    switch(status) {
      case 'Normal': return 'text-green-700 bg-green-100';
      case 'Optimal': return 'text-blue-700 bg-blue-100';
      case 'Elevated': return 'text-amber-700 bg-amber-100';
      default: return 'text-gray-700 bg-gray-100';
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
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#407BFF] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Test Results</h1>
              <p className="text-gray-600">View and download your medical reports</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Tests</p>
                  <p className="text-3xl font-bold text-gray-900">{testResults.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Normal Results</p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Latest Test</p>
                  <p className="text-xl font-bold text-gray-900">{formatDate(testResults[0].date)}</p>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          {testResults.map((result) => (
            <div key={result.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-2 border-b border-gray-100">
                       {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-[19px] md:text-xl font-bold text-[#151516] mb-1">{result.testName}</h3>
                        <p className="text-gray-600 text-sm">by {result.doctor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {result.status}
                        </span>
                        <span className="text-gray-500 text-sm">{formatDate(result.date)}</span>
                      </div>
                    </div>
                    </div>
                </div>

                {/* Summary Alert */}
                <div className={`${getStatusColor(result.color)} border rounded-lg p-4 mb-4`}>
                    <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="font-medium">{result.summary}</span>
                  </div>
                   <span className="text-sm text-gray-600">{result.resultsCount} parameters tested</span>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-7 md:gap-3">
                  <button
                    onClick={() => handleView(result)}
                    className="flex-1 px-4 py-2 bg-[#407BFF] text-white text-sm  font-medium rounded-lg hover:bg-[#3366DD] transition"
                  >
                    {selectedResult?.id === result.id ? 'Hide Details' : 'View Details'}
                  </button>
                  
                  <button
                    onClick={() => handleDownload(result.id)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedResult?.id === result.id && (
                <div className="border-t border-gray-100 bg-gray-50 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Key Parameters</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {result.highlights.map((param, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{param.name}</p>
                        <p className="text-2xl font-bold text-gray-900 mb-2">{param.value}</p>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getParameterColor(param.status)}`}>
                            {param.status}
                          </span>
                          <span className="text-xs text-gray-500">Range: {param.range}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Note:</span> For detailed analysis and recommendations, please consult with your healthcare provider.
                    </p>
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
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AirtelPaymentProps {
  variant?: 'hero' | 'products' | 'compact';
}

export default function AirtelPayment({ variant = 'compact' }: AirtelPaymentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState<'input' | 'instructions'>('input');

  const merchantCode = '6962718';
  const ussdCode = '*185*9#';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && amount) {
      setStep('instructions');
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setAmount('');
    setStep('input');
    setIsModalOpen(false);
  };

  const formatPhoneNumber = (number: string) => {
    // Remove any non-digit characters
    const cleaned = number.replace(/\D/g, '');
    // Add country code if not present
    if (cleaned.startsWith('0')) {
      return `+256${cleaned.substring(1)}`;
    }
    if (cleaned.startsWith('256')) {
      return `+${cleaned}`;
    }
    return `+256${cleaned}`;
  };

  // Different button styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'hero':
        return 'bg-white/10 backdrop-blur-md rounded-2xl p-6 airtel-badge hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105';
      case 'products':
        return 'bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 shadow-lg airtel-badge border-2 border-red-200 hover:border-red-300 transition-all duration-300 cursor-pointer transform hover:scale-105';
      case 'compact':
        return 'bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-red-200 airtel-badge hover:border-red-300 transition-all duration-300 cursor-pointer transform hover:scale-105';
    }
  };

  const getButtonContent = () => {
    const content = (
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img 
          src="/Airtel_logo-01.png" 
          alt="Pay with Airtel Money" 
          className={`${variant === 'hero' ? 'h-16' : variant === 'products' ? 'h-12' : 'h-16'} w-auto airtel-flash`}
        />
        <div className={`${variant === 'hero' ? 'text-white' : 'text-gray-800'} text-center sm:text-left`}>
          <p className={`${variant === 'hero' ? 'text-lg' : 'text-base'} font-bold ${variant === 'hero' ? '' : 'text-red-600'}`}>
            Pay with Airtel Money
          </p>
          <p className={`text-sm ${variant === 'hero' ? 'text-white/80' : 'text-gray-600'}`}>
            Click to start payment
          </p>
        </div>
        <div className={`${variant === 'hero' ? 'text-white' : 'text-red-600'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    );

    return content;
  };

  return (
    <>
      {/* Payment Button */}
      <div onClick={() => setIsModalOpen(true)} className={getButtonStyles()}>
        {getButtonContent()}
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={resetForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/Airtel_logo-01.png" 
                      alt="Airtel Money" 
                      className="h-12 w-auto bg-white rounded-lg p-1"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">Airtel Money</h3>
                      <p className="text-sm text-white/90">Quick & Secure Payment</p>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {step === 'input' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Airtel Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                          📱
                        </span>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="0700 000 000"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Enter your Airtel number (e.g., 0700123456)</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount (UGX)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                          💰
                        </span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="10,000"
                          min="100"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Minimum: UGX 1,000</p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Continue to Payment →
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    {/* Success Header */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <span className="text-3xl">✅</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Payment Instructions Ready!</h4>
                      <p className="text-gray-600">Follow the steps below to complete your payment</p>
                    </div>

                    {/* Payment Details Summary */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone Number:</span>
                        <span className="font-semibold">{formatPhoneNumber(phoneNumber)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-red-600">UGX {parseInt(amount).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Step-by-Step Instructions */}
                    <div className="space-y-4">
                      <h5 className="font-bold text-gray-900 text-lg">Payment Steps:</h5>
                      
                      <div className="space-y-3">
                        {[
                          { step: 1, icon: '📞', text: `Dial ${ussdCode} on your Airtel phone`, color: 'bg-red-50 border-red-200' },
                          { step: 2, icon: '💳', text: `Select "Make Payment" or "Pay Bill"`, color: 'bg-orange-50 border-orange-200' },
                          { step: 3, icon: '🔢', text: `Enter Merchant Code: ${merchantCode}`, color: 'bg-yellow-50 border-yellow-200' },
                          { step: 4, icon: '💰', text: `Enter Amount: UGX ${parseInt(amount).toLocaleString()}`, color: 'bg-green-50 border-green-200' },
                          { step: 5, icon: '🔐', text: 'Enter your Airtel Money PIN', color: 'bg-blue-50 border-blue-200' },
                          { step: 6, icon: '✅', text: 'Confirm the transaction', color: 'bg-purple-50 border-purple-200' },
                        ].map((item) => (
                          <div key={item.step} className={`flex items-start space-x-3 p-3 rounded-lg border-2 ${item.color}`}>
                            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-sm">
                              {item.step}
                            </div>
                            <div className="flex items-center space-x-2 flex-1">
                              <span className="text-xl">{item.icon}</span>
                              <p className="text-sm font-medium text-gray-700">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Dial Button */}
                    <a
                      href={`tel:${ussdCode}`}
                      className="block w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                    >
                      📞 Dial {ussdCode} Now
                    </a>

                    {/* Alternative: Copy Code */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(merchantCode);
                          alert('Merchant code copied!');
                        }}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-all"
                      >
                        📋 Copy Merchant Code
                      </button>
                      <button
                        onClick={resetForm}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-all"
                      >
                        🔄 New Payment
                      </button>
                    </div>

                    {/* Contact Support */}
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-2">Need help?</p>
                      <a
                        href="https://wa.me/256777408026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        💬 Contact us on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

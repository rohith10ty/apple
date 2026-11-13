import React, { useState } from 'react';
import { X, MessageSquare, Calendar, Phone, MapPin, Send, CheckCircle2, User, Sparkles } from 'lucide-react';
import { AppleLogo } from './AppleLogo';
import { useCart } from '../../context/CartContext';

export const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useCart();
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'appointment' | 'phone'
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'specialist',
      name: 'Sarah (Apple Specialist)',
      text: 'Hello! Welcome to Apple. How can I help you choose the right iPhone or accessory today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  if (!isContactModalOpen) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: userText }
    ]);
    setInputMessage('');

    // Simulated intelligent Apple specialist response
    setTimeout(() => {
      let reply = "The iPhone 18 Pro features our new A20 Pro chip and Grade 5 Titanium unibody, offering incredible battery life and ProRAW capabilities. Would you like me to help you choose between 256GB and 512GB storage?";
      if (userText.toLowerCase().includes('battery') || userText.toLowerCase().includes('charge')) {
        reply = "iPhone 18 Pro delivers up to 33 hours of video playback and fast charges to 50% in just 30 minutes with the 25W MagSafe charger.";
      } else if (userText.toLowerCase().includes('camera')) {
        reply = "The 48MP Fusion camera on iPhone 18 Pro introduces a physical variable aperture from f/1.4 to f/4.0, allowing you to capture stunning shallow depth-of-field naturally!";
      } else if (userText.toLowerCase().includes('trade') || userText.toLowerCase().includes('price')) {
        reply = "You can trade in your current smartphone and receive up to $650 (or ₹58,000) in instant credit towards your new iPhone today!";
      }

      setChatMessages(prev => [
        ...prev,
        {
          sender: 'specialist',
          name: 'Sarah (Apple Specialist)',
          text: reply
        }
      ]);
    }, 700);
  };

  const handleBookAppointment = (e) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-neutral-950 rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto text-white">
            <AppleLogo className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Apple Specialist Concierge</h2>
          <p className="text-xs text-neutral-400">
            Get personalized advice from our Apple Specialists and Genius Bar technicians
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10 mb-6">
          <button
            onClick={() => setActiveTab('chat')}
            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'chat'
                ? 'bg-white text-black font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Live Chat</span>
          </button>

          <button
            onClick={() => setActiveTab('appointment')}
            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'appointment'
                ? 'bg-white text-black font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Genius Bar</span>
          </button>

          <button
            onClick={() => setActiveTab('phone')}
            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'phone'
                ? 'bg-white text-black font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </button>
        </div>

        {/* Tab 1: Live Chat */}
        {activeTab === 'chat' && (
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-3 p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {msg.name && (
                    <span className="text-[10px] text-neutral-500 mb-1 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-neutral-400" />
                      {msg.name}
                    </span>
                  )}
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-white text-black font-medium rounded-tr-sm'
                        : 'bg-white/10 text-neutral-200 border border-white/10 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about iPhone models, camera, battery..."
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Genius Bar Appointment */}
        {activeTab === 'appointment' && (
          <div>
            {!appointmentBooked ? (
              <form onSubmit={handleBookAppointment} className="space-y-3 text-xs">
                <div>
                  <label className="text-neutral-400 block mb-1">Select Apple Store</label>
                  <select className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white">
                    <option className="bg-neutral-900">Apple BKC — Bandra Kurla Complex, Mumbai</option>
                    <option className="bg-neutral-900">Apple Saket — Select CITYWALK, New Delhi</option>
                    <option className="bg-neutral-900">Apple Fifth Avenue — New York, NY</option>
                    <option className="bg-neutral-900">Apple Regent Street — London, UK</option>
                  </select>
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">Topic</label>
                  <select className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white">
                    <option className="bg-neutral-900">iPhone 18 Pro Demo & Setup</option>
                    <option className="bg-neutral-900">Trade-In Physical Assessment</option>
                    <option className="bg-neutral-900">Data Transfer & iCloud Migration</option>
                  </select>
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">Date & Preferred Time</label>
                  <input
                    type="date"
                    defaultValue="2026-11-14"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors mt-4 cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Appointment Reserved!</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  A confirmation pass has been added to your Apple Wallet. Our Specialist will be ready for you.
                </p>
                <button
                  onClick={() => setAppointmentBooked(false)}
                  className="text-xs text-neutral-300 underline pt-2"
                >
                  Book another session
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Telephone Directory */}
        {activeTab === 'phone' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-neutral-400 block">Apple Store Direct Hotline (Toll-Free):</span>
              <a href="tel:18006927753" className="text-base font-bold text-white font-mono hover:underline block">
                1-800-MY-APPLE (1-800-692-7753)
              </a>
              <span className="text-[11px] text-neutral-500">Available 24 hours a day, 7 days a week.</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-neutral-400 block">Apple Store India Hotline:</span>
              <a href="tel:0008000401966" className="text-base font-bold text-white font-mono hover:underline block">
                000800 040 1966
              </a>
              <span className="text-[11px] text-neutral-500">Lines open Monday through Sunday, 9:00 AM – 9:00 PM IST.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

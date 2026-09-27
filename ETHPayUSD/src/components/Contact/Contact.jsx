import React from "react";

function Contact() {
  return (
    <div className="h-screen bg-gradient-to-br from-black via-[#0a0f1c] to-black flex items-center justify-center px-4">
     <form action="https://formsubmit.co/ab262133@gmail.com" method="POST" 
        className="w-full max-w-lg bg-black/60 backdrop-blur-lg border border-blue-900 rounded-3xl shadow-[0_0_30px_rgba(0,89,255,0.2)] p-10 text-white relative overflow-hidden group"
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition duration-700 bg-gradient-to-br from-blue-700 via-transparent to-blue-900 rounded-3xl blur-2xl pointer-events-none"></div>

        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-200 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-blue-300 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-200 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-blue-300 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition duration-300"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-blue-200 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            required
            placeholder="Write something nice... 😄"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-blue-300 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-xl shadow-xl transition duration-300 transform hover:scale-105 active:scale-95"
        >
           Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

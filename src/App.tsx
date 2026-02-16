import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Agentation } from 'agentation';

// Sample bounty/task submissions data
const submissions = [
  { prize: "$1000", role: "Quest", topic: "Give Feedback", time: "3d 8h" },
  { prize: "$500", role: "Bounty", topic: "Build a UI Component", time: "18d 1h" },
  { prize: "$2500", role: "Bounty", topic: "Create a Landing Page", time: "40m" },
  { prize: "$800", role: "Quest", topic: "Review our Features", time: "12h ago" },
  { prize: "$100", role: "Quest", topic: "Visit our Website", time: "1d ago" },
  { prize: "$300", role: "Quest", topic: "Write Documentation", time: "6h ago" },
  { prize: "$750", role: "Quest", topic: "Test New Feature Flow", time: "9h ago" },
  { prize: "$200", role: "Quest", topic: "Join Discord & Verify", time: "30m ago" },
  { prize: "$600", role: "Quest", topic: "Report UX Bugs", time: "4h ago" },
];


function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FAFAFA] text-zinc-900 font-sans">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/images/quinty-logo.png" 
            alt="Quinty Logo" 
            className="w-9 h-9 filter grayscale brightness-0"
          />
          <span className="text-xl font-bold font-heading tracking-tight">Quinty</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Hero Content */}
        <div>
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 shadow-sm mb-8"
            >
              <span className="w-2 h-2 bg-[#0EA885]" />
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Base Batches 002</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold font-heading tracking-tighter text-zinc-900 mb-6 leading-[0.9]"
            >
              Trust shouldn't <br />
              be <span className="text-[#0EA885]">optional.</span>
            </motion.h1>

            {/* Value Props */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 mb-10 max-w-lg"
            >
              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs text-[#0EA885] mt-1.5 pt-0.5 border-t border-[#0EA885]/30">01</span>
                <p className="text-lg text-zinc-600 font-normal">Requester lock rewards in smart contract before work begins.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs text-[#0EA885] mt-1.5 pt-0.5 border-t border-[#0EA885]/30">02</span>
                <p className="text-lg text-zinc-600 font-normal">Solvers submit work with their x account account.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-mono text-xs text-[#0EA885] mt-1.5 pt-0.5 border-t border-[#0EA885]/30">03</span>
                <p className="text-lg text-zinc-600 font-normal">Earn your on-chain job reputation.</p>
              </div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.quinty.io"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200 bg-zinc-900 hover:bg-black text-white hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Launch App</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Tutorial</span>
              </button>
            </div>
            
            <p className="mt-4 text-[10px] text-zinc-500">
              Trust and transparency come standard with smart contract. <a href="https://docs.quinty.io" className="text-[#0EA885] font-medium hover:underline underline-offset-4 ml-1">Read the docs →</a>
            </p>
          </motion.div>
        </div>

        {/* Right Column - Submissions Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-full min-h-[500px] bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/40 overflow-hidden flex flex-col border-t-2 border-t-[#0EA885]"
        >
          {/* Panel Header */}
          <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
              <span className="w-1.5 h-1.5 bg-[#0EA885] animate-pulse" />
              Active Activities
            </div>
            <div className="flex gap-1.5 opacity-20">
              <div className="w-2 h-2 bg-zinc-900" />
              <div className="w-2 h-2 bg-zinc-900" />
            </div>
          </div>

          {/* Column Headers */}
          <div className="grid grid-cols-12 px-6 py-3 border-b border-zinc-100 bg-zinc-50/30 text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
            <div className="col-span-4">Project</div>
            <div className="col-span-4">Prize</div>
            <div className="col-span-4 text-right">Time</div>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 relative overflow-hidden">
            {/* Top Fade */}
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

            <div className="absolute inset-0 p-2 overflow-hidden">
              <div className="animate-scroll-up">
                {/* First set of items */}
                <div className="space-y-1">
                  {submissions.map((item, index) => (
                    <div 
                      key={`first-${index}`}
                      className="grid grid-cols-12 items-center px-4 py-3 hover:bg-zinc-50 transition-colors cursor-default group"
                    >
                      <div className="col-span-4 flex flex-col">
                        <span className="font-semibold text-xs text-zinc-900">{item.topic}</span>
                        <span className="text-[10px] text-zinc-500">{item.role}</span>
                      </div>
                      <div className="col-span-5">
                        <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                          {item.prize}
                        </span>
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="text-[10px] text-zinc-400 font-mono group-hover:text-zinc-600">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="space-y-1">
                  {submissions.map((item, index) => (
                    <div 
                      key={`second-${index}`}
                      className="grid grid-cols-12 items-center px-4 py-3 hover:bg-zinc-50 transition-colors cursor-default group"
                    >
                      <div className="col-span-4 flex flex-col">
                        <span className="font-semibold text-xs text-zinc-900">{item.topic}</span>
                        <span className="text-[10px] text-zinc-500">{item.role}</span>
                      </div>
                      <div className="col-span-5">
                        <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                          {item.prize}
                        </span>
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="text-[10px] text-zinc-400 font-mono group-hover:text-zinc-600">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full absolute bottom-0 left-0 border-t border-zinc-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <p className="text-[#0EA885] text-xs font-medium">
            © {new Date().getFullYear()} Quinty Labs.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-zinc-900 shadow-2xl overflow-hidden border border-zinc-800"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Tutorial Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Agentation - only in development */}
      {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  "Happy Birthday My Love 💖",
  "You're the most amazing person in my life 💫",
  "Today, I just want to celebrate YOU — your smile, your heart, your soul. 💝",
  "Thank you for being the light in my life, my sunshine on dark days ☀️",
  "You deserve all the happiness in the world and more ✨",
  "Every moment with you feels like a fairytale coming true 🌹",
  "Let’s make this birthday a memory you’ll always cherish 🎂",
  "You're my greatest gift, and I promise to cherish you forever 💞",
  "With each passing year, you shine brighter and love deeper 🌟",
  "Here's to more smiles, more kisses, and endless love 💋"
];

const reasons = [
  "Your smile lights up my day ☀️",
  "You always believe in me ✨",
  "You give the best hugs 🤗",
  "We laugh at the same silly things 😂",
  "You're my biggest supporter 💪",
  "You make everything feel magical ✨",
  "Your kindness melts my heart 🥹",
  "You're beautiful inside and out 💐",
  "You never give up on us 💞",
  "You're my forever person 💍"
];

function FloatingHearts() {
  const [screenWidth, setScreenWidth] = useState(1000);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-2xl"
          initial={{ opacity: 0, y: 0, x: Math.random() * screenWidth }}
          animate={{ opacity: 1, y: -screenWidth }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{ left: `${Math.random() * 100}%` }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}

function LoveBoxes() {
  const boxColors = ["bg-pink-200", "bg-rose-300", "bg-fuchsia-400", "bg-red-300"];
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 z-10">
      {reasons.slice(0, 6).map((text, index) => (
        <motion.div
          key={index}
          className={`w-40 h-40 ${boxColors[index % boxColors.length]} rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-center p-4 text-white font-bold transform transition-transform`}
          whileHover={{ scale: 1.1, rotateX: 15, rotateY: 15 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Happy Birthday Babe 💕";
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-100 via-rose-200 to-pink-50 min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-12 relative overflow-hidden">
      <FloatingHearts />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-pink-700 z-10 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday, My Love! 🎉
      </motion.h1>

      <motion.div
        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-xl z-10 border border-pink-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {messages.map((msg, index) => (
          <motion.p
            key={index}
            className="text-lg md:text-xl text-pink-900 my-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
          >
            {msg}
          </motion.p>
        ))}
      </motion.div>

      <LoveBoxes />

      <footer className="text-center mt-12 text-sm text-pink-500 z-10">
        Made with 💗 just for you.
      </footer>
    </div>
  );
}

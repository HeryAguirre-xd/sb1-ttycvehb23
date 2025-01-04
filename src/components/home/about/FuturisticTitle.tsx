import React from 'react';
import { motion } from 'framer-motion';

export default function FuturisticTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0000] via-[#800080] to-[#4B0082] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative px-7 py-6 bg-[#1A1A1A] rounded-lg leading-none flex items-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#800080]">
          De Rio Rico, AZ<br />al mundo!
        </h2>
      </div>
    </motion.div>
  );
}
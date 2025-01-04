import React from 'react';
import { motion } from 'framer-motion';
import { eventTypes } from '../../../config/eventTypes';

export default function EventCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {eventTypes.map((event, index) => (
        <motion.div
          key={event}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#800080] rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-[#1A1A1A]/50 backdrop-blur-sm p-6 rounded-xl border border-[#8B0000]/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#800080]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white font-semibold z-10">{event}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
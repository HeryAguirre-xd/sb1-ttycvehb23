import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../../config/stats';

export default function StatsDisplay() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#800080]/20 rounded-lg blur-sm" />
          <div className="relative bg-[#1A1A1A]/30 backdrop-blur-sm p-6 rounded-lg border border-[#8B0000]/20">
            <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#FF0000]" />
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              className="text-3xl font-bold text-white mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import picture1 from '../../../assets/picture1.jpg';
import picture2 from '../../../assets/picture2.jpg';

const images = [picture1, picture2];

export default function AnimatedGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-xl blur-xl" />
      
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative aspect-square rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={image}
            alt="Band performance"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 border-2 border-accent/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </motion.div>
  );
}
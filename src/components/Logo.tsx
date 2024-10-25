import React from 'react'
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <>
    <article className="logo">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          className="logo__part"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0] }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: index * 0.2, // Ger en fördröjning för varje del
          }}
        />
      ))}
    </article>
    </>
  )
}

export default Logo
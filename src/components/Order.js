import React from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const Order = ({ pizza }) => {
  const containerVariants = {
    hidden : {
      opacity: 0,
      x:'100vw'
    },
    visible : {
      opacity : 1,
      x : 0,
      transition:{
        type:'spring', 
        mass : 0.4,
        damping : 8,
        when : "beforeChildren",
        staggerChildren : 0.5
      }
    }
  }
  const childVarints = {
    hidden : {
      opacity: 0,
    },
    visible : {
      opacity : 1,
      transition : {
        duration: 1.5
      }
    }
  }
  const [showTitle , setshowTitle] = useState(true);
  setTimeout(() => {
    setshowTitle(false);
  }, 4000);
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (<motion.h2
          exit={{y : -1000}}        
        >Thank you for your order :)
        </motion.h2>)}
      </AnimatePresence>
      
      <motion.p variants={childVarints}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarints}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;
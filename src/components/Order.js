import React from 'react';
import {motion} from 'framer-motion';
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
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarints}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarints}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;
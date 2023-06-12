import React from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
export default function Modal({showModal, setShowModal}) {
    const backdropVariants = {
        visible : {opacity : 1},
        hidden : {opacity : 0}
    }
    const modalVariants = {
        hidden : {
            y : '-100vh',
            opacity : 0
        },
        visible : {
            y : "250px",
            opacity : 1,
            transition : {
                delay : 0.5
            }
        }
    }
    return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className='backdrop'
            variants={backdropVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
        >
            <motion.div className='modal'
                variants={modalVariants}
            >
                <p>Want to order another Pizza?</p>
                <Link to='/'>
                    <button>Start Again</button>
                </Link>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'
import Navbar from "../components/ui/Navbar";

function Home() {
  return (
    <div>
    <Navbar>

    </Navbar>
    <motion.div
        animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Veggie />
        <Popular />
    </motion.div>
    </div>

  )
}

export default Home;
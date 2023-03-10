//Brandon Le
//3-10-23
//Tic Tac Toe Tutorial but made with React and bootstrap. My special features were a bunch of different animations and effects from framer-motion. I had a lot of fun messing around with them and trying to ge them to work.


import '../css/style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';

function Square({ value, onSquareClick }) {
  const controls = useAnimation();

  async function handleClick() {
    await controls.start({ scale: [1, 1.3, 1], transition: { duration: 0.3 } });
    onSquareClick();
  }

  return (
    <motion.div className="col-2" animate={controls}>
      <motion.button className="btn btn-outline-secondary square" onClick={handleClick}>
        {value}
      </motion.button>
    </motion.div>
  );
}

export default Square;
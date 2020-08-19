import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
  const {show, clicked} = props;
  return (
    show ? <div onClick={clicked} className="Backdrop"/> : null
  );
};

export default Backdrop;

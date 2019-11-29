import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = (props) => {
  const { id, children } = props;
  return (
    <li className="NavigationItem">
      <Link to={'/' + id}>{children}</Link>
    </li>
  );
};

export default NavigationItem;

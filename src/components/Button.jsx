import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({link,text}) => {
  return (
    <div>
      <Link to={link}>
        <button className="btn btn-primary btn-sm">{text}</button>
      </Link>
    </div>
  );
}

export default Button
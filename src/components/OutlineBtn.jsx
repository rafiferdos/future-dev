import React from 'react'
import { Link } from 'react-router-dom';

const OutlineBtn = ({link,text}) => {
  return (
    <>
      <Link to={link}>
        <button className="btn btn-outline btn-primary btn-sm">{text}</button>
      </Link>
    </>
  );
}

export default OutlineBtn
import { React } from 'react';
import './NotFound.scss';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page-wrapper">
      <h1>Sorry friend, there is no such page on our site.</h1>
      <Link to='/'>Home Page</Link>
    </div>
  )
}

export default NotFound;

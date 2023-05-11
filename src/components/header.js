import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <div className="header">
    <div className="title">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="books">Books</Link>
      <Link to="/categories" className="categories">Categories</Link>
    </div>
    <div className="icon">
      <FaUser />
    </div>
  </div>
);

export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
  if(searchQuery.trim()===""){
    navigate(`/`)
  }else{
      // Navigate to search results page with search term in URL
      navigate(`/search?query=${searchQuery}`);
  }
  };


  return (
    <div>
      <nav className="navbar-new">
        <a href="/" className="navbar-brand-new">
          MovieDb
        </a>
        <ul className="followLink">
          <li>
            <Link className="liLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="liLink" to="/top-rated">
              Top Rated
            </Link>
          </li>
          <li>
            <Link className="liLink" to="/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="form-inline-new">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;

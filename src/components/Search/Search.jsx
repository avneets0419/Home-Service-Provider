import React from 'react'
import "./Search.css"

import { FiSearch} from "react-icons/fi";
function Search() {
  return (
    <div>
        <div className="search-box">
          <input type="text" placeholder="Search for services..." />
          <FiSearch className="search-icon" />
        </div>
    </div>
  )
}

export default Search
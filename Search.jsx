import React from 'react'
import { FaSearch } from "react-icons/fa"
export default function Search() {
  return (
    <form>
        <div className="input-group">
            <input type="text"
             placeholder="Search Your favorite Restaurant..."
              id="search_field"
               className="form-control" />

        
        <div className="input-group-append">
            <button id="search_btn" className="btn">
                <FaSearch/>

            </button>
        </div>
    </div>
   
        
    </form>
  );
}

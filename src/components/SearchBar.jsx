import React, {useState} from 'react';
import {func} from "prop-types";

const SearchBar = ({handleSubmit}) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <header className="searchbar">
        <form className="form" onSubmit={(e)=> handleSubmit(e, value)}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSubmit: func
}

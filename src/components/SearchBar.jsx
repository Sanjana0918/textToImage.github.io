import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input value={searchTerm} onChange={handleChange} type="text" />
      </form>
    </div>
  );
}

export default SearchBar;

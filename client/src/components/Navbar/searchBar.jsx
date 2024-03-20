import './SearchBarStyle.css';

function  SearchBar({ handleChange, handleSubmit }) {
    return (
      <div className="search-bar-container">
        <form className="search-bar-form" onChange={ handleChange } >
          <input className="search-bar-form" placeholder="Country By Name"  type='search' />
          <button className="search-bar-button" type='submit' onClick={handleSubmit}>Buscar</button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
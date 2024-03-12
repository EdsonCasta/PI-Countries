function  SearchBar({ handleChange, handleSubmit }) {
    return (
      <div>
        <form onChange={ handleChange } >
          <input placeholder="Country By Name"  type='search' />
          <button type='submit' onClick={handleSubmit}>Buscar</button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
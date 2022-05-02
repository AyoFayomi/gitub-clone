import "../styles/search.css";

const Search = ({inputHandler}) => {
  
  return (
    <form className="search-container">
      <input
        type="text"
        name="Search"
        id="Search"
        placeholder="Find a repository..."
        className="search-input"
        onChange={inputHandler}
      />
      <select
        name="Type"
        list="Type"
        id="Type"
        className="search-type"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Type
        </option>
        {/* <option value=""></option>
        <option value=""></option> */}
      </select>
      <select
        name="Language"
        list="Language"
        id="Language"
        className="search-language"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Language
        </option>
        {/* <option value=""></option>
        <option value=""></option> */}
      </select>
      <select
        name="Sort"
        list="Sort"
        id="Sort"
        className="search-sort"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Sort
        </option>
        {/* <option value=""></option>
        <option value=""></option> */}
      </select>
    </form>
  );
};

export default Search;

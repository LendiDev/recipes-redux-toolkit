import { ChangeEvent, useState } from "react";

interface IRecipeSearch {
  handleSearchQuery: (searchTerm: string) => void;
}

export const RecipeSearch = ({ handleSearchQuery }: IRecipeSearch) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    handleSearchQuery(searchTerm);
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    if (searchValue.length < 1) {
      handleSearchQuery('');
    }

    setSearchTerm(searchValue);
  }

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <label>
        Search recipe:
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Enter search"
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

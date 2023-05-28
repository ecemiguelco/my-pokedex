import { useState } from "react";

const FilterCategory = ({ itemCategories, filterCategory }) => {
  // const [category, setCategory] = useState("");

  const options = itemCategories.map((category) => {
    return <option>{category}</option>;
  });

  const handleSelect = (e) => {
    console.log(e.target.value);
    filterCategory(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
};

export default FilterCategory;

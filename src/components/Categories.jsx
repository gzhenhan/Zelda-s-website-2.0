import PropTypes from "prop-types";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="mx-4 mb-6 px-4 py-2 border border-[#ccc] rounded-[5px] bg-gold text-white text-base cursor-pointer transition-colors duration-300 hover:bg-brand"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default Categories;

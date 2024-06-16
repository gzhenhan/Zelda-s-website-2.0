import "../css/Photos.css";
import { useState } from "react";
import photoData from "../photoData.js";
import PhotoItem from "./PhotoItem.jsx";
import Title from "./Title";
import Categories from "./Categories.jsx";
import Masonry from "react-masonry-css";

const allCategories = [
  "all",
  ...new Set(photoData.map((item) => item.category)),
];

const Photos = () => {
  const [photoItems, setPhotoItems] = useState(photoData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setPhotoItems(photoData);
      return;
    }
    const newItems = photoData.filter((item) => item.category === category);
    setPhotoItems(newItems);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <div>
      <Title title="Photos" />
      <Categories categories={categories} filterItems={filterItems} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photoItems.map((photoItem) => (
          <PhotoItem key={photoItem.id} {...photoItem} />
        ))}
      </Masonry>
    </div>
  );
};

export default Photos;

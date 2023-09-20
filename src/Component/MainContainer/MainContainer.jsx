import React, { useEffect, useState } from "react";
import BookContainer from "../BookContainer/BookContainer";
import BookMarkContainer from "../BookMarkContainer/BookMarkContainer";
import "./MainContainer.css";

const MainContainer = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [titles, setTitles] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  let countBookmarkNum = 0;
  const handleBookmarkedNum = (product) => {
    countBookmarkNum = countBookmarkNum + 1;
    const newQuantity = [...quantity, countBookmarkNum];
    setQuantity(newQuantity);
    const newTitle = [...titles, product.title];
    setTitles(newTitle);
  };
  let countTime;
  const handleReadingTime = (timeIs) => {
    countTime = time + parseInt(timeIs);
    setTime(countTime);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-4/5 mx-auto">
      <div className="col-span-4">
        {products.map((product) => (
          <BookContainer
            product={product}
            handleBookmarkedNum={handleBookmarkedNum}
            handleReadingTime={handleReadingTime}
            key={product.id}
          ></BookContainer>
        ))}
      </div>
      <div className="col-span-2 for-side-container p-8">
        <div className="time-div mb-14">
          <h1 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {time} min</h1>
        </div>
        <h1 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {quantity.length}
        </h1>
        {titles.map((title, index) => (
          <BookMarkContainer key={index} title={title}></BookMarkContainer>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;

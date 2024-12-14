import AddItem from "./components/AddItem";
import "./App.css";
import List from "./components/List";
import BucketList from "./components/BucketList";
import React, { useEffect, useState } from "react";

function App() {
  const [food, setFood] = useState("");
  const [shopingList, setShopingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleInput = (e) => {
    setFood(e.target.value);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    setShopingList(data);
  };

  useEffect(() => {
    // make an api call
    fetchItems(food);
  }, [food]);

  const handleShopingList = (e) => {
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shopingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setFood("");
  };

  const handleRight = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };
  const handleClose = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id != id);
    setBucketList(newList);
  };
  return (
    <>
      <h1>Shoping List</h1>
      <AddItem handleInput={handleInput} food={food}></AddItem>
      {food.length >= 2 && (
        <List
          shopingList={shopingList}
          handleShopingList={handleShopingList}
        ></List>
      )}
      <BucketList
        bucketList={bucketList}
        handleRight={handleRight}
        handleClose={handleClose}
      ></BucketList>
    </>
  );
}

export default App;

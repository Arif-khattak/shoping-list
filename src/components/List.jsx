function List({ shopingList, handleShopingList }) {
  return (
    <>
      <div onClick={handleShopingList} className="list">
        {shopingList.map((item, index) => {
          return (
            <div data-id={index} className="product">
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;

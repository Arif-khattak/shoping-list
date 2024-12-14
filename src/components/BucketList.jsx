import React from "react";

function BucketList({ bucketList, handleRight, handleClose }) {
  return (
    <div>
      {bucketList.map((item) => {
        return (
          <div className="bucket-list">
            <button onClick={() => handleRight(item.id)}>✓</button>
            <div className={item.isDone ? "strike" : ""}>{item.data}</div>
            <button onClick={() => handleClose(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default BucketList;

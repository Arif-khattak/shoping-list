function AddItem({ handleInput, food }) {
  return (
    <div className="add-item">
      <input onChange={handleInput} type="text" value={food} />
    </div>
  );
}

export default AddItem;

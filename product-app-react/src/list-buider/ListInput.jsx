import './ListInput.css';
function ListInput({ handleOnChange, handleOnClick }) {
  return (
    <div className="Input">
      <input onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}
export {ListInput};
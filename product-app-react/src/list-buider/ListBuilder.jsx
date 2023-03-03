import { useState } from "react";
import { ListInput } from "./ListInput";
import { ListOutput } from "./ListOutput";
import "./ListBuilder.css";

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  function validProduct() {
    if (!newItem) {
      alert("Product name can not be empty!");
      return false;
    }
    if (
      [...list].find((item) => {
        return item === newItem;
      })
    ) {
      alert("Duplicate product!");
      return false;
    }
    if(newItem.length >= 10) {
      alert("Product name is too large!");
      return false;
    }
    return true;
  }
  function handleOnChange(event) {
    setNewItem(event.target.value);
  }
  function handleOnClick() {
    if (!validProduct()) {
      return;
    }
    setList([...list, newItem]);
  }
  return (
    <div className="ListBuilder">
      <ListInput
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />
      <ListOutput list={list} />
    </div>
  );
}

export { ListBuilder };

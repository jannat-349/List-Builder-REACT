import { useState } from "react";
import "./ListBuilder.css";
import ListInput from "./ListInput";
import ListOutput from "./ListOutput";

function ListBuilder() {
  const [list, setList] = useState([]);

  return (
    <div className="ListBuilder">
      <ListInput products={list} setProducts = {setList} />
      <ListOutput products={list} setProducts = {setList}/>
    </div>
  );
}

export { ListBuilder };

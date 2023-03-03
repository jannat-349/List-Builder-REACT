function ListOutput({ list }) {
    return (
      <div className="Output">
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  export {ListOutput};
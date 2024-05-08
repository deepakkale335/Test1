import React from "react";

const ListComponent = ({ list, handleEdit, handleDisable }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return (
            <>
              <li key={index}>{item}</li>
              <button onClick={() => handleEdit(item, index)}> edit </button>
              <button onClick={() => handleDisable(item)}> disable </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComponent;

import Item from "./Item";

const List = ({ list, setList }) => {
  const deleteHandler = (id) => {
    setList(list.filter((obj) => obj.objectID !== id));
  };

  return (
    <ul>
      {list.map((item) => (
        <div>
          <Item key={item.objectID} item={item} />
          <button onClick={() => deleteHandler(item.objectID)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default List;

import Item from "./Item";

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
};

export default List;

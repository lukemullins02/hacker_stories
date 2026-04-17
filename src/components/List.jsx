import Item from "./Item";

const List = (props) => {
  console.log("List renders");

  return (
    <ul>
      {props.list.map((item) => {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
};

export default List;

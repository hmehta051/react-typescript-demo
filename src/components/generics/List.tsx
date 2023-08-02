import React from "react";
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
  renderItem: (item: T) => React.ReactNode;
};
const List = <T extends {}>({ items, onClick, renderItem }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
};

export default List;

// const List = <M extends { id: number }>({
//   items,
//   onClick,
//   renderItem,
// }: ListProps<M>) => {
//   return (
//     <div>
//       <h2>List of Items</h2>
//       {items.map((item, index) => {
//         return (
//           <div key={item.id} onClick={() => onClick(item)}>
//             {renderItem(item)}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// <List
//   items={[{ id: 1, label: "Item 1" }, { id: 2, label: "Item 2" }]}
//   onClick={(item) => console.log(item)}
//   renderItem={(item) => <div>{item.label}</div>}
// />

import { Name } from "./Person.types";
type PersonListProps = {
  name: Name[]; // types of array of object
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name, idx) => {
        return <h2 key={idx}>{`${name.firstName} ${name.lastName}`}</h2>;
      })}
    </div>
  );
};

export default PersonList;

import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import FetchData from "./components/effect/FetchData";
import List from "./components/generics/List";
import CustomButton from "./components/html/CustomButton";
import Text from "./components/polumorphic/Text";
import DomRef from "./components/ref/DomRef";
import Mutable from "./components/ref/Mutable";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Walker",
  };
  const personNameList = [
    {
      firstName: "Ms",
      lastName: "Dhoni",
    },
    {
      firstName: "Virat",
      lastName: "Kohli",
    },
    {
      firstName: "Rohit",
      lastName: "Sharma",
    },
  ];
  return (
    <div className="App">
      <Greet name="Hemendra" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={personNameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Hemendra</Heading>
      </Oscar>
      <Greet name="Hem" isLoggedIn={false} />
      <Button
        handleClick={(e, idx) => {
          console.log("Button Click", e, idx);
        }}
      ></Button>
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <Mutable />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={["Hello", "Bye", "Good", "Bad"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            firstName: "Ms",
            lastName: "Dhoni",
          },
          { id: 2, firstName: "Virat", lastName: "Kohli" },
          {
            id: 3,
            firstName: "Rohit",
            lastName: "Sharma",
          },
        ]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <div>{item.firstName}</div>}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someIs" size="sm" color="secondary">
        Label
      </Text>
      <FetchData />
    </div>
  );
}

export default App;

import React from "react";
// Use Type for building Application and Use Interface for Building Library
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: false;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Welcome ${props.name}! You have ${messageCount} Unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;

import React from "react";
type ContainerPropsStyles = {
  styles: React.CSSProperties;
};
const Container = (props: ContainerPropsStyles) => {
  return (
    <div style={props.styles}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, autem.
    </div>
  );
};

export default Container;

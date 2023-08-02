import React from "react";
type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: boolean;
  isZero?: never;
};
type ZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero?: never;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;

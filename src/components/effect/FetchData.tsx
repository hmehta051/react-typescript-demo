import React, { useState, useEffect } from "react";
// import axios from "axios";

interface IData {
  id: number;
  name: string;
  email: string;
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   try {
    //     // Using axios
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setData(response.data);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    //   setIsLoading(false);
    // };

    // fetchData();

    // Alternatively, using fetch:
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;

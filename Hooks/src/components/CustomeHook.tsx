import React from "react";
import useFetchData from "../hooks/useFetchData";

export const CustomeHook = () => {
  const { data } = useFetchData("https://api.github.com/users");
  return (
    <div>
      <h1>Custome Hook</h1>
      <div style={{ height: "300px", overflow: "Scroll" }}>
        {data &&
          data.map((user: any) => (
            <div
              className="text-white"
              style={{ display: "flex", justifyContent: "space-between" }}
              key={user.id}
            >
              <p> {user.type} </p>
              <h5> {user.login} </h5>
            </div>
          ))}
      </div>
    </div>
  );
};

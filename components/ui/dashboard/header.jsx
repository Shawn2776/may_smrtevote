import React from "react";
import { Button } from "../button";

const Header = ({ type, action }) => {
  return (
    <div className="flex justify-between w-full mb-10">
      <h1 className="text-2xl font-semibold capitalize">{type}</h1>
      <p className="px-2 py-1 rounded-md bg-bg">
        <Button variant="icon">
          Add <span className="capitalize">&nbsp;{type}</span>
        </Button>
      </p>
    </div>
  );
};

export default Header;

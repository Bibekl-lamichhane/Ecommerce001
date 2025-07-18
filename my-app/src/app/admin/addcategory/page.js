import { Button, Input } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col  mx-40 gap-12 justify-center items-center">
      <div className="text-2xl text-amber-600 font-bold">
        Add new Category :-
      </div>
      <div>
        <Input  className="" name="category"  placeholder="Enter new category here" />
      </div>
      <div>
        <Button type="Submit">Add Category</Button>
      </div>
    </div>
  );
};

export default page;

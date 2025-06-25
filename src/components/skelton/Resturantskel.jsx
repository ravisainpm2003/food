import { Skeleton } from "@mui/material";
import React from "react";

const Resturantskel = () => {
  return (
    <div>
      <div className="px-2">
        <Skeleton variant="rectangular" className="col-12 my-2" height={20} />
        <Skeleton variant="rectangular" className="col-12 my-2" height={20} />
        <Skeleton variant="rectangular" className="col-w-75 my-2" height={20} />
        <Skeleton variant="rectangular" className="col-12 my-2" height={20} />
      </div>
      <div className="d-flex col-12 p-1 container">
        <Skeleton variant="rectangular" className="col-2 my-1" height={200} />
        <Skeleton
          variant="rectangular"
          className="col-2 my-1 m-2"
          height={200}
        />
      </div>
      <div className="d-flex col-12 p-1 container">
        <div className="col-8 p-1">
          <Skeleton variant="rectangular" className=" my-1" height={550} />
          <Skeleton variant="rectangular" className=" my-3" height={350} />
          <Skeleton variant="rectangular" className=" my-3" height={350} />
        </div>
        <div className="col-4 p-1">
          <Skeleton variant="rectangular" className=" my-1 m-2" height={1280} />
        </div>
      </div>
    </div>
  );
};

export default Resturantskel;

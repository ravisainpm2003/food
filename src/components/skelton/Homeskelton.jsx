import { Skeleton } from "@mui/material";
import React from "react";

const Homeskelton = () => {
  return (
    <div>
      <div className="col-12 d-flex justify-content-between p-1 container">
        <div className="col-3"></div>
        <div className="col-3 ">
          <Skeleton variant="rectangular" className="col-11 " height={250} />
        </div>
        <div className="col-3 ">
          <Skeleton variant="rectangular" className="col-11" height={250} />
        </div>
        <div className="col-3 ">
          <Skeleton variant="rectangular" className="col-11 " height={250} />
        </div>
        {/* <div className="bg-danger">
          <p>cshcvhkc</p>
        </div> */}
      </div>
    </div>
  );
};

export default Homeskelton;

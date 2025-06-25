import { Skeleton } from "@mui/material";
import React from "react";

const Searchskel = () => {
  return (
    <div>
      <div className="col-12 d-flex justify-content-between p-1 container">
        <Skeleton variant="rectangular" className="col-3 " height={250} />
        <Skeleton variant="rectangular" className="col-3 " height={250} />
        <Skeleton variant="rectangular" className="col-3 " height={250} />
        <Skeleton variant="rectangular" className="col-3 " height={250} />
      </div>
    </div>
  );
};

export default Searchskel;

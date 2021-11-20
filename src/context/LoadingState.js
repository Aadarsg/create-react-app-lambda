import React, { useState } from "react";
import LoadingContext from "./LoadingContext";

const LoadingState = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  return (
    <LoadingContext.Provider value={[loadingStatus, setLoadingStatus]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
export default LoadingState;

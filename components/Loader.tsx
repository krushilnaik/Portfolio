import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen absolute grid place-content-center z-50 top-0 left-0 bg-black/50 text-3xl">
      Loading...
    </div>
  );
}

export default Loader;

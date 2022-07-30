import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen sticky grid place-content-center z-50 top-0 bottom-0 left-0 bg-black/50 text-3xl">
      <Image src="/images/loader.gif" width={150} height={150} alt="loading" />
    </div>
  );
}

export default Loader;

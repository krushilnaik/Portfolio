import { PropsWithChildren } from "react";

function Heading(props: PropsWithChildren) {
  const { children } = props;

  return <h2 className="text-3xl md:text-5xl my-9">{children}</h2>;
}

export default Heading;

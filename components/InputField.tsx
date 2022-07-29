import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  element: "input" | "textarea";
}

function InputField(props: Props) {
  const { type, placeholder, element } = props;

  const [value, setValue] = useState("");

  const variants: Variants = {
    filled: {
      x: -15,
      y: -15,
      scale: 0.6,
    },
    unfilled: {
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div className="relative">
      <motion.span
        variants={variants}
        initial={false}
        animate={value ? "filled" : "unfilled"}
        className="absolute transition-all text-slate-400 left-2"
      >
        {placeholder}
      </motion.span>
      {element === "input" ? (
        <input
          type={type}
          defaultValue={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          className="bg-transparent border-b-2 border-b-rose-300 w-full p-1 outline-none"
        />
      ) : (
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          defaultValue={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          className="bg-transparent border-b-2 border-rose-300 w-full p-1 outline-none resize-none"
        ></textarea>
      )}
    </div>
  );
}

export default InputField;

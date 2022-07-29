import React, { useState } from "react";
interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  element: "input" | "textarea";
}

function InputField(props: Props) {
  const { type, placeholder, element } = props;
  const [value, setValue] = useState("");

  return (
    <div className="input" data-placeholder={placeholder}>
      {element === "input" ? (
        <input
          type={type}
          name={type}
          id={type}
          defaultValue={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      ) : (
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="resize-none"
        ></textarea>
      )}
    </div>
  );
}

export default InputField;

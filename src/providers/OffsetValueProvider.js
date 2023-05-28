import { createContext, useState } from "react";

const OffestvalueContext = createContext();

const OffsetValueProvider = (props) => {
  const [offsetValue, setOffsetValue] = useState(0);

  return (
    <OffestvalueContext.Provider value={[offsetValue, setOffsetValue]}>{props.children}</OffestvalueContext.Provider>
  );
};

export { OffestvalueContext, OffsetValueProvider };

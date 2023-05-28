import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = (props) => {
  const [status, setStatus] = useState(true);

  return <StatusContext.Provider value={[status, setStatus]}>{props.children}</StatusContext.Provider>;
};

export { StatusContext, StatusProvider };

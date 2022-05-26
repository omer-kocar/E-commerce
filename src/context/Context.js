import React, { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleShowChange = () => setShow(true);
  const handleCloseChange = () => setShow(false);

  return (
    <CardContext.Provider
      value={{
        show,
        setShowCanvas: handleShowChange,
        setCloseCanvas: handleCloseChange,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };

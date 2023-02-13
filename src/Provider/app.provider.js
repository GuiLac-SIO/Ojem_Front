import React, { useContext, createContext, useState    } from "react"; 
const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const providerValues = {
    }; 
    return (
        // state
        data


          // function 
    );
}
const useApp = () => {
    const app = useContext(AppContext);
    if (app === null) {
      throw new Error("useApp is null");
    }
  
    return app;
  };
  
  export { AppProvider, useApp };
  
 
import React, { useContext, createContext, useState ,useEffect   } from "react"; 
import axios from 'axios';
const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [User, setUser] = useState([]);
    const[Enfant, setEnfant] = useState([])
    const [token, setToken] = useState([]);


 

    const providerValues = {
              // state
              
              Enfant,
              User,
              token,
              setEnfant,
              setToken,
              setUser,
         // function 
       
         
    }; 
    return (
        <AppContext.Provider value={providerValues}>{children}</AppContext.Provider> 
         
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
  
 
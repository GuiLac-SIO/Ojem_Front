import React, { useContext, createContext, useState ,useEffect   } from "react"; 
import axios from 'axios';
const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [User, setUser] = useState([]);
    const [token, setToken] = useState([]);


    const getUser = (url) => {
  
      axios.get('http://192.168.1.71:3001/user/getUser')
      url
        .then(response =>  { 
          setUser(response.data); 
        })
        .catch(error => {
          console.log(error);
        });
    
    }





    const providerValues = {
              // state
              User,
              token,
              setToken,
         // function 
         getUser
         
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
  
 
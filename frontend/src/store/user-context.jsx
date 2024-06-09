import { createContext, useEffect, useState } from "react";


export const UserContext = createContext({
    user: {},
    logIn: ()=>{},
    signUp: ()=>{},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const logIn = (email, password) => {
    console.log(email, password);
  }

  const signUp = (name, email, password, repeatedPassword) => {
    console.log(name, email, password, repeatedPassword);
  }

  const ctxValue = {
    user,
    logIn,
    signUp,
  };

  return (
    <UserContext.Provider value={ctxValue}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
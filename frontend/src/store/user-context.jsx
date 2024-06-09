import { createContext, useState } from "react";


export const UserContext = createContext({
    user: {},
    setUser: () => {},
    logIn: ()=>{},
    signUp: ()=>{},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const logIn = async (useremail, userpassword) => {
    const obj = {email: useremail, password: userpassword};
    console.log(JSON.stringify(obj));
    try {
        const response = await fetch("http://srv25.mikr.us:20183/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        if(!response.ok){
            console.log(response.message);
            throw new Error(response.message);
        }
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data);
        console.log(data);
    } catch (err) {
        throw new Error(err.message);
    }
  }

  const signUp = async (name, email, password, repeatedPassword) => {
    try {
        const response = await fetch("http://srv25.mikr.us:20183/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name, email: email, password: password})
        });
        if(!response.ok){
            console.log(response.message);
            throw new Error(response.message);
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        throw new Error(err.message);
    }
  }

  const ctxValue = {
    user,
    setUser,
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
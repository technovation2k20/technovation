import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  userData: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const loginHandler = (user) => {
    setUser(user);
  };

  const userDataHandler = (data) => {
    setUserData(data);
  };

  const logoutHandler = () => {
    setUser(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        userData: userData,
        login: loginHandler,
        initData: userDataHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

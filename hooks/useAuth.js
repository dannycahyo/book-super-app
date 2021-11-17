import { useRouter } from "next/router";
import React, { useState, useContext, createContext, useEffect } from "react";
import useToken from "./useToken";
import axios from "axios";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState({ data: null });
  const router = useRouter();

  const { userJwt, setUserJwt } = useToken();

  //   const getUserInfo = async (email) => {
  //     axios({
  //       method: "GET",
  //       url: `/api/auth/accountinfo?email=${email}`,
  //     })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => console.error(error));
  //   };

  const login = (email, password) => {
    const userData = {
      email,
      password,
    };
    axios({
      method: "POST",
      url: `http://localhost:3001/login`,
      data: userData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        setUser({ data: response.data });
        if (token) {
          setUserJwt(token);
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = (username, email, password) => {
    const userData = {
      email,
      password,
      username,
    };
    axios({
      method: "POST",
      url: `http://localhost:3001/signup`,
      data: userData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        const token = response.data.token;
        setUser({ data: response.data });
        console.log("This is for user", user);
        if (token) {
          setUserJwt(token);
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("This is for user", user);

  return {
    user,
    login,
    register,
  };
};

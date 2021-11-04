import { useEffect, useState } from "react";

export default function useToken() {
  const [userJwt, setUserJwt] = useState<null | string>(typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null);


  useEffect(() => {
   
    if (userJwt !== null) {
      localStorage.setItem("jwtToken", userJwt);
    }
  }, [userJwt]);

  return { userJwt, setUserJwt };
}

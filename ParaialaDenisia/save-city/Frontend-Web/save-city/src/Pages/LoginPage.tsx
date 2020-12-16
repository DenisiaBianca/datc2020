import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const { getUser } = Services();

  const getUserFunction = async () => {
    try {
      const userData = await getUser();
      setUser(userData.data);
      console.log(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUserFunction();
  }, [user]);

  return (
    <div>
      <h2>Login Page</h2>
      {user}
    </div>
  );
}

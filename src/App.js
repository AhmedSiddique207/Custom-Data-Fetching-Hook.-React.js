import React, { useState } from "react";
import PostContainer from "./components/postContainer";
import MainContext from "./context/mainContext";
import { UseFetchUser } from "./customHooks/useFetchUser";


export default function App() {

  const { user, loading, error } = UseFetchUser(2);

  console.log(user, loading, error);

  const [userData, setUserData] = useState({

    displayName: "Ahmed",

    standard: "7b",

    location: "Hyd"

  });


  return (

    <MainContext.Provider value={{ ...userData, setUserData }}>

      <div >
        {loading ? "Loading...." : <PostContainer />}


      </div>

    </MainContext.Provider>

  );

}

import axios from "axios";
import React, { useEffect, useState } from "react";
import Datas from "./Datas";


const Profile = () => {
  const [state, setstate] = useState([]);

  const callAxios = async () => {
    await axios
      .get("https://dry-reef-16810.herokuapp.com/Api")
      .then((res) => {
        console.log("data posted", res);
        setstate(res.data);
      })
      .catch((err) => {
        console.log("data not ", err);
      });
  };
  useEffect(() => {
    callAxios();
  }, []);
  return (
    <div className="container">
      <div class="row">
        {state.map((pro) => {
          return (
            <>
             <Datas pro={pro}/>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;

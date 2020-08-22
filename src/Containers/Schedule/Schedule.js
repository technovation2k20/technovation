import React, { useState, useEffect } from "react";

import axios from "../../util/axios";

const Schedule = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("/schedule.json");
      setData(res.data);
    }
    loadData();
  }, []);

  return data ? (
    <div
      style={{
        backgroundImage: `url(${data.src})`,
        height: "83vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  ) : null;
};

export default Schedule;

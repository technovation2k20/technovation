import React, { useState, useEffect } from "react";

import axios from "../../util/axios";

const Schedule = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("schedule");
      if (res.data) setData(res.data[0].src);
    }
    loadData();
  }, []);

  return data ? (
    <div
      style={{
        backgroundImage: `url(${data})`,
        height: "83vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  ) : null;
};

export default Schedule;

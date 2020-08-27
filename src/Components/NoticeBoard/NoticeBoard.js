import React, { useState, useEffect } from "react";

import axios from "../../util/axios";
import classes from "./NoticeBoard.module.css";

const NoticeBoard = (props) => {
  const colors = [
    "#66d7ee",
    "#66a1ee",
    "#7166ee",
    "#a866ee",
    "#ee66aa",
    "#ee6d66",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("notices");
      if(res.data) {
        setData(res.data);
      } else {
        setData([]);
      }
    }
    if (!data.length) loadData();
    return () => {
      setData(null);
    };
  }, [data.length]);

  return (
    <div className={classes.board}>
      <h1 className={classes.board__heading}>News</h1>

      <section className={classes.board__news}>
        {data && data.length ? (
          data.slice(0, 5).map(({ date, title }, i) => (
            <div
              key={i}
              className={classes.newsItem}
              style={{ borderLeft: `4px solid ${colors[i % 6]}` }}
            >
              <p className={classes.date}>{date.toLocaleString()}</p>
              <p className={classes.title}>{title}</p>
            </div>
          ))
        ) : (
          <p>No News Yet</p>
        )}
      </section>
    </div>
  );
};

export default NoticeBoard;

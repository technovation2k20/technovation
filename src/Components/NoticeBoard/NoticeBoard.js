import React, { useState, useEffect } from "react";

import axios from "../../util/axios";
import classes from "./NoticeBoard.module.css";

const NoticeBoard = (props) => {
  // const categories = [
  //   "all",
  //   "news",
  //   "updates",
  //   "maintenance",
  //   "events",
  //   "important",
  // ];
  // const colors = [
  //   "#66d7ee",
  //   "#66a1ee",
  //   "#7166ee",
  //   "#a866ee",
  //   "#ee66aa",
  //   "#ee6d66",
  // ];

  // const navItems = categories.map((category, index) => ({
  //   category,
  //   color: colors[index],
  // }));

  // const latestDate = new Date();
  // const fillerTitle =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe";

  // const limit = 5;

  // navItems.slice(1).forEach(({ category, color }) => {
  //   for (let i = 0; i < limit; i += 1) {
  //     const date = new Date(
  //       latestDate - 1000 * 60 * 60 * 24 * Math.ceil(Math.random() * 100)
  //     );
  //     data.push({
  //       category,
  //       color,
  //       date,
  //       title: fillerTitle,
  //     });
  //   }
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get("/notices.json");
      setData(res.data);
    }
    loadData();
    return () => {
      setData(null);
    };
  });

  return (
    <div className={classes.board}>
      <h1 className={classes.board__heading}>News</h1>

      <section className={classes.board__news}>
        {data && data.length ? (
          data.slice(0, 5).map(({ color, date, title }, i) => (
            <a
              key={i}
              className={classes.newsItem}
              style={{ borderLeft: `4px solid ${color}` }}
            >
              <p className={classes.date}>{date.toDateString()}</p>
              <p className={classes.title}>{title}</p>
            </a>
          ))
        ) : (
          <p>No News Yet</p>
        )}
      </section>
    </div>
  );
};

export default NoticeBoard;

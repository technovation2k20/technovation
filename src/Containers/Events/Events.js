import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import Card from "../../Components/Card/Card";
import Spinner from '../../Components/Spinner/Spinner';
import { EventContext } from "../../context/event-context";

const Event = (props) => {
  const events = useContext(EventContext);

  const data = events.events;

  return (
    data ? (
      <Grid
        container
        spacing={6}
        style={{ height: "90%", overflowY: "auto", marginTop: "10px" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h3
            style={{ textAlign: "center", fontSize: "42px", fontWeight: 400 }}
          >
            Technical Events
          </h3>
        </Grid>
        {data.map(
          (e, i) =>
            e.catagory === "technical" && (
              <Card
                key={i}
                name={e.title}
                altName={e.altName}
                imgSrc={e.imageUrl}
                imgDesc={e.altName}
                desc={e.description}
                event={e.eventId}
              ></Card>
            )
        )}
        <Grid item xs={12} sm={12} md={12}>
          <h3
            style={{ textAlign: "center", fontSize: "42px", fontWeight: 400 }}
          >
            Non-Technical Events
          </h3>
        </Grid>

        {data.map(
          (e, i) =>
            e.catagory === "non-technical" && (
              <Card
                key={i}
                name={e.title}
                altName={e.altName}
                imgSrc={e.imageUrl}
                imgDesc={e.altName}
                desc={e.description}
                event={e.eventId}
              ></Card>
            )
        )}
        <Grid item xs={12} sm={12} md={12}>
          <h3
            style={{ textAlign: "center", fontSize: "42px", fontWeight: 400 }}
          >
            Literary Events
          </h3>
        </Grid>
        {data.map(
          (e, i) =>
            e.catagory === "literary" && (
              <Card
                key={i}
                name={e.title}
                altName={e.altName}
                imgSrc={e.imageUrl}
                imgDesc={e.altName}
                desc={e.description}
                event={e.eventId}
              ></Card>
            )
        )}
        <Grid item xs={12} sm={12} md={12}>
          <h3
            style={{ textAlign: "center", fontSize: "42px", fontWeight: 400 }}
          >
            Gaming Events
          </h3>
        </Grid>
        {data.map(
          (e, i) =>
            e.catagory === "gaming" && (
              <Card
                key={i}
                name={e.title}
                altName={e.altName}
                imgSrc={e.imageUrl}
                imgDesc={e.altName}
                desc={e.description}
                event={e.eventId}
              ></Card>
            )
        )}
        <Grid item xs={12} sm={12} md={12}>
          <h3
            style={{ textAlign: "center", fontSize: "42px", fontWeight: 400 }}
          >
            Mega Events
          </h3>
        </Grid>
        {data.map(
          (e, i) =>
            e.catagory === "mega" && (
              <Card
                key={i}
                name={e.title}
                altName={e.altName}
                imgSrc={e.imageUrl}
                imgDesc={e.altName}
                desc={e.description}
                event={e.eventId}
              ></Card>
            )
        )}
      </Grid>
    ) : (<Spinner />)
  );
};

export default Event;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Components/Work";
import LandingPage from "./Components/LandingPage";
let Cosmic = require("cosmicjs")();

const App = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    Cosmic.authenticate({
      email: process.env.REACT_APP_EMAIL,
      password: process.env.REACT_APP_PASSWORD
    })
      .then(data => {
        Cosmic = require("cosmicjs")({
          token: data.token
        });

        Cosmic.getBuckets().then(data =>
          data.buckets.forEach(item => {
            if (item.title === "joelhordegard") {
              const bucket = Cosmic.bucket({
                slug: item.title,
                read_key: item.api_access.read_key,
                write_key: ""
              });

              bucket.getBucket().then(({ bucket: { objects } }) => {
                const byOrder = objects.slice(0);
                byOrder.sort(function(a, b) {
                  return a.order - b.order;
                });


                setVideos(byOrder);
              });
            }
          })
        );
      })
      .catch(err => {
        throw new Error("Not authorized");
      });
  }, []);

  console.log("videos: ", videos)
  return (
    <Router>
      <Switch>
        <Route path="/work">
          <Home videos={videos} />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

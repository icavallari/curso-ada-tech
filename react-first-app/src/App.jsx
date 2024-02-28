import { ThreeDots } from "react-loader-spinner";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import "./styles/App.css";
import axios from "axios";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );

      const json = response.data;
      setNews(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((item) => <Article key={item.id} item={item} />)
        )}
      </section>
    </>
  );
}

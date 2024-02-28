import React from "react";
import "./Article.css";

export function Article(props) {
  const item = props.item;

  return (
    <article id="article">
      <img src={item.imageUrl} alt="" style={{ borderRadius: "15px" }} />

      <div className="article-infos">
        <h2>{item.id}</h2>
        <h3>{item.newsSite}</h3>
        <p style={{ textAlign: "justify" }}>{item.summary}</p>
      </div>
    </article>
  );
}

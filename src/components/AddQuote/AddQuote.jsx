import React from "react";
import "../AddQuote/inputQuote.css";
import "../../style/adaptation/addQuoteAdaptation.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuote } from "../../toolkitRedux/toolkitSlice";

const AddQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const randomColor = useSelector((state) => state.toolkit.randomColor);
  const dispatch = useDispatch();
  const handlClick = () => {
    dispatch(
      addQuote({
        author: "-" + author,
        quote: quote,
      }),
      setQuote(""),
      setAuthor("")
    );
  };
  return (
    <div className="inputBoxWrapper">
      <div className="inputBox">
        <h2 className="inputTitle">Добавь свою цитату</h2>
        <input
          style={{ background: randomColor }}
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="Имя"
          className="inputName"
        ></input>
        <input
          style={{ background: randomColor }}
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          type="text"
          placeholder="Цитата"
          className="inputQuote"
        ></input>
        <button
          style={{ background: randomColor }}
          onClick={handlClick}
          className="inputBtn"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddQuote;

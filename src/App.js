import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randQuote, addQuote } from "./toolkitRedux/toolkitSlice";
import "./style/app.css";
import "./style/quote.css";
import "./style/input_style/inputQuote.css";
import { Transition } from "react-transition-group";
import { ReactComponent as Twitter } from "./img/twitter.svg";

function App() {
  const [inProp, setInProp] = useState(true);

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const randomQuote = useSelector((state) => state.toolkit.randomQuote);
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

  const addNewQuote = () => {
    setTimeout(() => {
      dispatch(randQuote());
    }, 500);

    setInProp(false);

    setTimeout(() => {
      setInProp(true);
    }, 500);
  };

  return (
    <div
      style={{ background: randomColor, color: randomColor }}
      className="App"
    >
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
      <div className="wrapper">
        <div className="quote-box">
          <quote className="quote">
            <Transition in={inProp} timeout={100}>
              {(state) => (
                <>
                  <div className={`text ${state}`}>{randomQuote.quote}</div>
                  <div className={`author ${state}`}>{randomQuote.author}</div>
                </>
              )}
            </Transition>
          </quote>
          <div className="buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${randomQuote.quote}`}
              className="tweet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                className="twitter"
                width="40"
                height="40"
                fill={randomColor}
              />
            </a>

            <button
              style={{ background: randomColor }}
              className="btnRandomQuote"
              onClick={() => addNewQuote()}
            >
              Продолжить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

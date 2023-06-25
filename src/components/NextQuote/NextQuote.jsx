import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { randQuote } from "../../toolkitRedux/toolkitSlice";
import { useState } from "react";
import "../../style/input_style/inputQuote.css";
import { Transition } from "react-transition-group";
import { ReactComponent as Twitter } from "../../img/twitter.svg";

const NextQuote = () => {
  const [inProp, setInProp] = useState(true);
  const randomQuote = useSelector((state) => state.toolkit.randomQuote);
  const randomColor = useSelector((state) => state.toolkit.randomColor);
  const dispatch = useDispatch();

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
  );
};

export default NextQuote;

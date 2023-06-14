import { createSlice } from "@reduxjs/toolkit";

const quoteMachine = createSlice({
  name: "quotePull",
  initialState: {
    count: 0,
    randomQuote: {
      author: " - Флоренс Найтингейл",
      quote:
        "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
    },
    randomColor: ["#16a085"],
    quoteAuthor: [
      {
        author: " - Флоренс Найтингейл",
        quote:
          "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
      },
      {
        author: " - Амелия Эрхарт",
        quote:
          "Сложнее всего начать действовать, все остальное зависит только от упорства.",
      },
      {
        author: " - Джон Леннон",
        quote: "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
      },
      {
        author: " - Борис Стругацкий",
        quote: "Начинать всегда стоит с того, что сеет сомнения.",
      },
      {
        author: " - Сократ",
        quote: "Неосмысленная жизнь не стоит того, чтобы жить.",
      },
    ],
    Pullcolor: [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ],
  },
  reducers: {
    randQuote(state) {
      const randomIndexQ = Math.floor(Math.random() * state.quoteAuthor.length);
      const prevQuote = state.randomQuote;
      const nextQuote = state.quoteAuthor[randomIndexQ];
      if (prevQuote.quote === nextQuote.quote) {
        const index = (randomIndexQ + 1) % state.quoteAuthor.length;
        state.randomQuote = state.quoteAuthor[index];
      } else {
        state.randomQuote = state.quoteAuthor[randomIndexQ];
      }

      const randomIndexC = Math.floor(Math.random() * state.Pullcolor.length);
      const prevColor = state.randomColor;
      const nextColor = state.Pullcolor[randomIndexC];
      if (prevColor === nextColor) {
        const index = (randomIndexC + 1) % state.Pullcolor.length;
        state.randomColor = state.Pullcolor[index];
      } else {
        state.randomColor = state.Pullcolor[randomIndexC];
      }
    },
    addQuote(state, action) {
      state.quoteAuthor = [...state.quoteAuthor, action.payload];
    },
  },
});
export default quoteMachine.reducer;
export const { randQuote, addQuote } = quoteMachine.actions;

// import {  useReducer } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Testform from "./pages/Testform";
import Test from "./pages/Test";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="container mb-7">
        <ul className="text-xl flex gap-5 justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/create-test">Create Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/create-test" element={<Testform />} />
      </Routes>
    </BrowserRouter>
  );
}

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Loader from "./components/Loader";
// import Error from "./components/Error";
// import StartScreen from "./components/StartScreen";
// import Question from "./components/Question";
// import NextButton from "./components/NextButton";
// import Progress from "./components/Progress";
// import FinishedScreen from "./components/FinishedScreen";
// import Footer from "./components/Footer";
// import Timer from "./components/Timer";
// import { createClient } from "@supabase/supabase-js";
// import Testform from "./pages/Testform";

// const supabase = createClient(
//   "https://kjvzroyrhdugxnoprpdx.supabase.co/",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqdnpyb3lyaGR1Z3hub3BycGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTkwOTMsImV4cCI6MjA0MTQ5NTA5M30.hrZf90MB81D8MkkmFqKQtCv07UptVd3tkGLgIDMJsQg"
// );

// // const insertQuizData = async () => {
// //   const { data, error } = await supabase.from("questions").insert([
// //     {
// //       question: "Which is the most popular JavaScript framework?",
// //       options: JSON.stringify(["Angular", "React", "Svelte", "Vue"]),
// //       correctOption: 1,
// //       points: 10,
// //     },
// //     {
// //       question: "Which company invented React?",
// //       options: JSON.stringify(["Google", "Apple", "Netflix", "Facebook"]),
// //       correctOption: 3,
// //       points: 10,
// //     },
// //     {
// //       question: "What's the fundamental building block of React apps?",
// //       options: JSON.stringify(["Components", "Blocks", "Elements", "Effects"]),
// //       correctOption: 0,
// //       points: 10,
// //     },
// //     {
// //       question:
// //         "What's the name of the syntax we use to describe the UI in React components?",
// //       options: JSON.stringify(["FBJ", "Babel", "JSX", "ES2015"]),
// //       correctOption: 2,
// //       points: 10,
// //     },
// //     {
// //       question: "How does data flow naturally in React apps?",
// //       options: JSON.stringify([
// //         "From parents to children",
// //         "From children to parents",
// //         "Both ways",
// //         "The developers decides",
// //       ]),
// //       correctOption: 0,
// //       points: 10,
// //     },
// //     {
// //       question: "How to pass data into a child component?",
// //       options: JSON.stringify(["State", "Props", "PropTypes", "Parameters"]),
// //       correctOption: 1,
// //       points: 10,
// //     },
// //     {
// //       question: "When to use derived state?",
// //       options: JSON.stringify([
// //         "Whenever the state should not trigger a re-render",
// //         "Whenever the state can be synchronized with an effect",
// //         "Whenever the state should be accessible to all components",
// //         "Whenever the state can be computed from another state variable",
// //       ]),
// //       correctOption: 3,
// //       points: 30,
// //     },
// //     {
// //       question: "What triggers a UI re-render in React?",
// //       options: JSON.stringify([
// //         "Running an effect",
// //         "Passing props",
// //         "Updating state",
// //         "Adding event listeners to DOM elements",
// //       ]),
// //       correctOption: 2,
// //       points: 20,
// //     },
// //     {
// //       question: 'When do we directly "touch" the DOM in React?',
// //       options: JSON.stringify([
// //         "When we need to listen to an event",
// //         "When we need to change the UI",
// //         "When we need to add styles",
// //         "Almost never",
// //       ]),
// //       correctOption: 3,
// //       points: 20,
// //     },
// //     {
// //       question: "In what situation do we use a callback to update state?",
// //       options: JSON.stringify([
// //         "When updating the state will be slow",
// //         "When the updated state is very data-intensive",
// //         "When the state update should happen faster",
// //         "When the new state depends on the previous state",
// //       ]),
// //       correctOption: 3,
// //       points: 30,
// //     },
// //     {
// //       question:
// //         "If we pass a function to useState, when will that function be called?",
// //       options: JSON.stringify([
// //         "On each re-render",
// //         "Each time we update the state",
// //         "Only on the initial render",
// //         "The first time we update the state",
// //       ]),
// //       correctOption: 2,
// //       points: 30,
// //     },
// //     {
// //       question:
// //         "Which hook to use for an API request on the component's initial render?",
// //       options: JSON.stringify([
// //         "useState",
// //         "useEffect",
// //         "useRef",
// //         "useReducer",
// //       ]),
// //       correctOption: 1,
// //       points: 10,
// //     },
// //     {
// //       question:
// //         "Which variables should go into the useEffect dependency array?",
// //       options: JSON.stringify([
// //         "Usually none",
// //         "All our state variables",
// //         "All state and props referenced in the effect",
// //         "All variables needed for clean up",
// //       ]),
// //       correctOption: 2,
// //       points: 30,
// //     },
// //     {
// //       question: "An effect will always run on the initial render.",
// //       options: JSON.stringify([
// //         "True",
// //         "It depends on the dependency array",
// //         "False",
// //         "In depends on the code in the effect",
// //       ]),
// //       correctOption: 0,
// //       points: 30,
// //     },
// //     {
// //       question:
// //         "When will an effect run if it doesn't have a dependency array?",
// //       options: JSON.stringify([
// //         "Only when the component mounts",
// //         "Only when the component unmounts",
// //         "The first time the component re-renders",
// //         "Each time the component is re-rendered",
// //       ]),
// //       correctOption: 3,
// //       points: 20,
// //     },
// //   ]);

// //   if (error) {
// //     console.error("Error inserting data:", error);
// //   } else {
// //     console.log("Data inserted:", data);
// //   }
// // };

// // insertQuizData();

// const SECS_PER_QUESTION = 30;

// const initialState = {
//   questions: [],

//   // 'loading', 'ready', 'error', 'active', 'finished'
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataRecieved":
//       return { ...state, questions: action.payload, status: "ready" };

//     case "dataFailed":
//       return { ...state, state: "error" };

//     case "newAnswer":
//       const question = state.questions.at(state.index);

//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };

//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };

//     case "nextQuestion":
//       return { ...state, answer: null, index: state.index + 1 };

//     case "finish":
//       return {
//         ...state,
//         status: "finished",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };

//     case "restart":
//       return {
//         ...initialState,
//         questions: state.questions,
//         status: "ready",
//         highscore: state.highscore,
//       };

//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? "finished" : state.status,
//       };

//     default:
//       throw new Error("Action Unknown");
//   }
// }

// export default function App() {
//   const [
//     { questions, status, index, answer, points, highscore, secondsRemaining },
//     dispatch,
//   ] = useReducer(reducer, initialState);

//   const numQuestions = questions.length;
//   const maxPossiblePoints = questions.reduce(
//     (prev, cur) => prev + cur.points,
//     0
//   );

//   useEffect(function () {
//     async function getQuestions() {
//       try {
//         const { datas, error } = await supabase.from("questions").select("*");
//         console.log(datas);
//         console.log(error.message);
//         // const req = await fetch("http://localhost:8000/questions");
//         // const data = await req.json();
//         dispatch({ type: "dataRecieved", payload: datas });
//       } catch (error) {
//         dispatch({ type: "dataFailed" });
//       }
//     }

//     getQuestions();
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <Main>
//         {status === "loading" && <Loader />}
//         {status === "error" && <Error />}
//         {status === "ready" && (
//           <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
//         )}
//         {status === "active" && (
//           <>
//             <Progress
//               index={index}
//               numQuestions={numQuestions}
//               points={points}
//               maxPossiblePoints={maxPossiblePoints}
//               answer={answer}
//             />
//             <Question
//               question={questions[index]}
//               dispatch={dispatch}
//               answer={answer}
//             />

//             <Footer>
//               <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
//               <NextButton
//                 dispatch={dispatch}
//                 answer={answer}
//                 index={index}
//                 numQuestions={numQuestions}
//               />
//             </Footer>
//           </>
//         )}
//         {status === "finished" && (
//           <FinishedScreen
//             points={points}
//             maxPossiblePoints={maxPossiblePoints}
//             highscore={highscore}
//             dispatch={dispatch}
//           />
//         )}
//       </Main>
//     </div>
//   );
// }

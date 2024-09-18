function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="mx-auto text-center">
      <h2>Welcome to The Frontend Development Quiz!!!</h2>
      <h3>{numQuestions.length} questions to test your Frontend mastery</h3>
      <button
        className="bg-blue-500 text-xl hover:bg-blue-700 text-white font-bold rounded-full p-5"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;

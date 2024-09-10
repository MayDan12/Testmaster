import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [questions, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase.from("questions").select();
      if (error) {
        setFetchError(error);
      } else {
        setQuestion(data);
        console.log(data);
      }
    };
    fetchQuestions();
  }, [setQuestion, setFetchError]);

  console.log(supabase);
  console.log(questions);
  console.log(fetchError);
  return (
    <div className="container text-center">
      <div className="py-auto pb-auto pt-40">
        <h1 className="text-7xl mb-3 font-bold">Welcome to Quiz App</h1>
        <p className="text-3xl mb-2">
          This is a simple quiz app that allows you to create your own quiz
          questions and answers.
        </p>
        <p className="text-3xl mb-3">
          You can also take the quiz and see your score at the end.
        </p>
        <p className="text-3xl mb-3">
          Click on the Create Test button to create your own test or click on
          the Take Test button to take the test.
        </p>
        <button className="bg-blue-500 text-3xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Create Test
        </button>
        <button
          onClick="/test"
          className="bg-blue-500 text-3xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        >
          Take Test
        </button>
      </div>
    </div>
  );
}

export default Home;

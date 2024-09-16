import { useState } from "react";
import supabase from "../config/supabaseClient";
import Featheader from "../components/Featheader";

function Testform() {
  const [formError, setFormError] = useState(null);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState(0);
  const [points, setPoints] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question || !option1 || !option2 || !option3 || !option4) {
      setFormError("Please fill in all fields correctly");
      return;
    }

    const questionData = {
      question,
      options: JSON.stringify([option1, option2, option3, option4]),
      correctOption,
      points,
    };
    console.log(questionData);

    const { data, error } = await supabase
      .from("questions")
      .insert([questionData]);
    if (error) {
      setFormError(error.message);
    }
    if (data) {
      setFormError(null);
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrectOption(0);
      setPoints(0);
    }
  };

  return (
    <div>
      <Featheader />
      <form
        onSubmit={handleSubmit}
        className="grid mt-4 grid-cols-2 mx-auto w-1/2 "
      >
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            type="text"
            placeholder="Question"
            className="rounded-md border-2 text-[#222] mt-3 p-3 w-full max-w-xs"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="option1">Option 1</label>
          <input
            id="option1"
            type="text"
            placeholder="Option 1"
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="opt2">Option 2</label>
          <input
            id="opt2"
            type="text"
            placeholder="Option 2"
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="opt3">Option 3</label>
          <input
            id="opt3"
            type="text"
            placeholder="Option 3"
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="opt4">Option 4</label>
          <input
            id="opt4"
            type="text"
            placeholder="Option 4"
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="correctOption">Correct Answer </label>
          <input
            id="correctOption"
            type="number"
            placeholder="Correct Option Number"
            max={4}
            min={1}
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-xl my-2">
          <label htmlFor="points">Points</label>
          <input
            id="points"
            type="number"
            placeholder="Points"
            className=" w-full border-2 rounded-md text-[#222] mt-3 p-3 max-w-xs"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>

        <button className="bg-blue-500 text-xl hover:bg-blue-700 w-52 text-white font-bold py-2 px-2 rounded mt-12">
          Create Question
        </button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}

export default Testform;

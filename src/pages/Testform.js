import { useState } from "react";
import supabase from "../config/supabaseClient";
import Featheader from "../components/Featheader";

function Testform() {
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false); // New state for success message
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState(0);
  const [points, setPoints] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the formSuccess and formError states on each submission
    setFormError(null);
    setFormSuccess(false);

    if (!question || !option1 || !option2 || !option3 || !option4) {
      setFormError("Please fill in all fields correctly");
      return;
    }

    const correctOptionNum = parseInt(correctOption, 10);
    const pointsNum = parseInt(points, 10);

    if (isNaN(correctOptionNum) || isNaN(pointsNum)) {
      setFormError("Correct option and points must be numbers");
      return;
    }

    const questionData = {
      question,
      options: JSON.stringify([option1, option2, option3, option4]),
      correctOption: correctOptionNum,
      points: pointsNum,
    };

    const { data, error } = await supabase
      .from("questions")
      .insert([questionData]);

    if (error) {
      setFormError(error.message);
    } else {
      setFormSuccess(true); // Show success alert
      setFormError(null);
      // Reset the form fields
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
    <div className="min-h-screen bg-gray-100 pb-10">
      <Featheader />
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Create a New Question
        </h2>

        {/* Display Success Alert */}
        {formSuccess && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
            role="alert"
          >
            <p className="font-bold">Success!</p>
            <p>Your question has been submitted successfully.</p>
          </div>
        )}

        {/* Display Error Message */}
        {formError && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>{formError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="question"
              className="text-lg font-semibold text-gray-700"
            >
              Question
            </label>
            <textarea
              id="question"
              type="text"
              placeholder="Enter your question here..."
              className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="option1"
                className="text-lg font-semibold text-gray-700"
              >
                Option 1
              </label>
              <input
                id="option1"
                type="text"
                placeholder="Option 1"
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="option2"
                className="text-lg font-semibold text-gray-700"
              >
                Option 2
              </label>
              <input
                id="option2"
                type="text"
                placeholder="Option 2"
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="option3"
                className="text-lg font-semibold text-gray-700"
              >
                Option 3
              </label>
              <input
                id="option3"
                type="text"
                placeholder="Option 3"
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="option4"
                className="text-lg font-semibold text-gray-700"
              >
                Option 4
              </label>
              <input
                id="option4"
                type="text"
                placeholder="Option 4"
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
              />
            </div>
          </div>

          {/* Correct Option and Points */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="correctOption"
                className="text-lg font-semibold text-gray-700"
              >
                Correct Answer
              </label>
              <input
                id="correctOption"
                type="number"
                placeholder="Correct Option Number"
                max={4}
                min={1}
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="points"
                className="text-lg font-semibold text-gray-700"
              >
                Points
              </label>
              <input
                id="points"
                type="number"
                placeholder="Points"
                className="rounded-md border border-gray-300 text-gray-800 mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </div>
          </div>

          <button className="bg-blue-500 text-lg font-bold text-white py-3 px-6 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
            Create Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testform;

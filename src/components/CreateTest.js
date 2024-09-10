import React from "react";

function CreateTest() {
  return (
    <div>
      <label for="question">Question</label>
      <input type="text" placeholder="Type here" className=" w-full max-w-xs" />
      <label for="answer">Option 1</label>
      <input type="text" placeholder="Type here" className=" w-full max-w-xs" />
      <label for="answer">Option 2</label>
      <input type="text" placeholder="Type here" className=" w-full max-w-xs" />
      <label for="answer">Option 3</label>
      <input type="text" placeholder="Type here" className=" w-full max-w-xs" />
      <label for="answer">Option 4</label>
      <input type="text" placeholder="Type here" className=" w-full max-w-xs" />
      <label for="correctOption">Correct Answer </label>
      <input
        type="number"
        placeholder="Type here"
        className=" w-full max-w-xs"
      />
      <label for="points">Points</label>
      <input
        type="number"
        placeholder="Type here"
        className=" w-full max-w-xs"
      />
    </div>
  );
}

export default CreateTest;

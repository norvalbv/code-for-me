import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/get-questions`);
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getQuestions();
    console.log("Test");
  }, []);

  return (
    <div>
      {questions.length > 0 &&
        questions.map(
          ({ id, title, file, min_budget, max_budget, category, language }) => (
            <div className="border-slate-900 border-b-2 py-4">
              <p>
                Prompt:{" "}
                <span className="underline font-bold capitalize">{title}</span>
              </p>
              <div className="flex gap-4">
                <p className="border-slate-300 border-2 px-4 py-2 rounded-lg">
                  {category}
                </p>
                <p className="border-slate-300 border-2 px-4 py-2 rounded-lg">
                  {language}
                </p>
              </div>
              <img
                className="max-h-52 max-w-52"
                src={file}
                alt="Problem Display Image"
              />
              <div>
                <p>
                  Budget: ${min_budget} - ${max_budget}
                </p>
              </div>
              <Link to={`/question/${id}`}>
                <button>View Issue</button>
              </Link>
            </div>
          )
        )}
      <Link to="/create-question">
        <button className="rounded bg-slate-300 px-4 py-2">
          Create Your Own Problem
        </button>
      </Link>
    </div>
  );
};

export default QuestionList;

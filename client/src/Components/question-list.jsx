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

  const [index, setIndex] = useState(null);
  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {questions.length > 0 &&
          questions.map(
            (
              {
                id,
                title,
                file,
                min_budget,
                max_budget,
                category,
                language,
                description,
              },
              i
            ) => (
              <div className="border-slate-900 border-b-2 py-4 max-w-xs">
                {title ? (
                  <p>
                    Issue:{" "}
                    <span className="underline font-bold capitalize">
                      {title}
                    </span>
                  </p>
                ) : (
                  <p> Issue: N/A </p>
                )}
                <div className="flex gap-4">
                  <p className="border-slate-300 border-2 px-4 py-2 rounded-lg">
                    {category}
                  </p>
                  <p className="border-slate-300 border-2 px-4 py-2 rounded-lg">
                    {language}
                  </p>
                </div>
                <img
                  className="max-h-52 max-w-52 rounded"
                  src={file}
                  alt="Problem Display Image"
                />
                <p className="my-2 font-semibold">
                  Budget: ${min_budget} - ${max_budget}
                </p>
                {index === i ? (
                  <>
                    <p className="p-0 inline mr-2">
                      {description.substring(0, 1000)}
                    </p>
                    <button
                      className="underline"
                      onClick={() => {
                        setIndex(null);
                      }}
                    >
                      Read Less
                    </button>
                  </>
                ) : (
                  <>
                    <p className="p-0 inline mr-2">
                      {description.substring(0, 30)}...
                    </p>
                    <button
                      className="underline"
                      onClick={() => {
                        setIndex(i);
                      }}
                    >
                      Read More
                    </button>
                  </>
                )}
                <Link to={`/question/${id}`}>
                  <button className="block">View Issue</button>
                </Link>
              </div>
            )
          )}
      </div>
      <Link to="/create-question">
        <button className="rounded bg-slate-300 px-4 py-2 mx-auto block my-10 text-white underline">
          Create Your Own Problem
        </button>
      </Link>
    </div>
  );
};

export default QuestionList;

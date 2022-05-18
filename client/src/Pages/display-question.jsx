import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/navbar";

const DisplayQuestion = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[2];

  const [question, setQuestion] = useState([]);

  const fetchData = async () => {
    try {
      console.log(currentLocation);
      const response = await fetch(
        `http://localhost:5000/get-question/${currentLocation}`
      );
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      {question.length > 0 &&
        question.map(
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
              link,
            },
            i
          ) => (
            <div
              className="border-slate-900"
              onClick={() => navigate(`/question/${id}`)}
              key={i}
            >
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
              <p>
                Budget: ${min_budget} - ${max_budget}
              </p>
              <p>{description}</p>
              <p>
                Link to source code: <a href={link}>Here</a>
              </p>
            </div>
          )
        )}
      <div>
        <button>Submit Bid</button>
        <button>Message </button>
      </div>
    </div>
  );
};

export default DisplayQuestion;

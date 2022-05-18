import { Link } from "react-router-dom";

const QuestionList = () => {
  return (
    <div>
      QuestionList
      <Link to="/create-question">
        <button className="rounded bg-slate-300 px-4 py-2">
          Create Your Own Problem
        </button>
      </Link>
    </div>
  );
};

export default QuestionList;

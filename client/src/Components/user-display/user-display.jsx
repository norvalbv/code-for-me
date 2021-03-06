import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Loading from "../loading";

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // const navigate = useNavigate();
  // const handleClick = (user) => {
  //   navigate(`/profile/${user}`);
  // };

  const [showComponent, setShowComponent] = useState({
    show: false,
    user: null,
  });
  console.log(showComponent);
  if (users.length === 0) return <Loading />;

  return (
    <>
      <h2>Connect with top talent</h2>
      {users.map(({ username, display_picture, title }, i) => (
        <div key={i} className="border-b-2 pt-4 border-slate-500 py-4">
          <div className="flex items-center gap-4">
            <img
              src={display_picture}
              alt={[username, "display picture"].join(" ")}
              className="rounded-full h-14 w-14 border-emerald-700 border-3"
            />
            <div>
              <p
                className="m-0 font-bold underline cursor-pointer"
                onClick={() => {
                  if (showComponent.user === null) {
                    setShowComponent({ show: true, user: username });
                  } else {
                    setShowComponent({ show: false, user: null });
                  }
                }}
              >
                {username}
              </p>
              {title && <p className="m-0">{title}</p>}
            </div>
          </div>
          {showComponent.user === username && (
            <Profile username={username} setShowComponent={setShowComponent} />
          )}
        </div>
      ))}
    </>
  );
};

export default UserDisplay;

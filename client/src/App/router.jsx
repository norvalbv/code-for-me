import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQuestion from "../Pages/create-question";
import DisplayQuestion from "../Pages/display-question";
import Landing from "../Pages/landing";
import SignIn from "../Pages/user/login";
import MyProfile from "../Pages/user/my-profile";
import Profile from "../Pages/user/profile";
import SignUp from "../Pages/user/signup";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/create-question" element={<CreateQuestion />}></Route>
        <Route path="/question/:id" element={<DisplayQuestion />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

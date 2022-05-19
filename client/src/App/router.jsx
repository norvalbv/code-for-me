import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQuestion from "../Pages/create-question";
import DisplayQuestion from "../Pages/display-question";
import FindTalent from "../Pages/find-talent";
import Landing from "../Pages/landing";
import MessageUser from "../Pages/message-user";
import SignIn from "../Pages/user/login";
import MyProfile from "../Pages/user/my-profile";
import Profile from "../Components/user-display/profile";
import SignUp from "../Pages/user/signup";
import FullProfile from "../Pages/user/full-profile";

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
        <Route path="/user/:id" element={<FullProfile />}></Route>
        <Route path="/message-user/:id" element={<MessageUser />}></Route>
        <Route path="/find-talent" element={<FindTalent />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

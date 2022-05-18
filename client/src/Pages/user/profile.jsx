import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../Components/navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[2];

  const [user, setUser] = useState([]);
  const getUser = async () => {
    try {
      console.log("TEST");
      const response = await fetch(
        `http://localhost:5000/user/${currentLocation}`
      );
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  return (
    <>
      <NavBar />
      <Container>
        {user.length > 0 && (
          <>
            <Row>
              <Col className="flex justify-center items-center">
                <img
                  className="rounded max-h-80"
                  src={user[0].display_picture}
                  alt={[user[0].first_name, "display photo"].join(" ")}
                />
              </Col>
              <Col>
                <p>
                  {user[0].first_name} {user[0].last_name}
                </p>
                <p>{user[0].title}</p>
              </Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Profile;

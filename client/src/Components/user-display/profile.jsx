import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Profile = ({ username }) => {
  const location = useLocation();
  // const currentLocation = location.pathname.split("/")[2];

  const [user, setUser] = useState([]);
  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(user);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="w-screen"
      >
        <Offcanvas.Header closeButton className="">
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-red-200">
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
                      {user[0].first_name} {user[0].last_name}{" "}
                      {!user[0].is_online && (
                        <span className="text-green-600 font-bold ml-4">
                          Online
                        </span>
                      )}
                    </p>
                    <p>{user[0].title}</p>
                    <p>{user[0].bio}</p>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Profile;

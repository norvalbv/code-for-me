import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Profile = ({ username, setShowComponent }) => {
  const location = useLocation();

  const [user, setUser] = useState([]);
  const getUser = async () => {
    console.log(username);
    try {
      const response = await fetch(`http://localhost:5000/user/${username}`);
      const data = await response.json();
      console.log(response, data);
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [read, setRead] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => {
          handleClose();
          setShowComponent({ show: false, user: null });
        }}
        placement="end"
        className="w-screen"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="font-bold underline capitalize">
            {username}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
                    <p>4.5 / 5 stars</p>
                  </Col>
                </Row>
                {user[0].bio && (
                  <Row>
                    <Col>
                      {read ? (
                        <>
                          <p className="my-4 mr-2 p-0 inline">
                            {user[0].bio.substring(0, 1000)}...
                          </p>
                          <button
                            className="underline mb-4"
                            onClick={() => setRead(!read)}
                          >
                            Read Less
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="my-4 mr-2 p-0 inline">
                            {user[0].bio.substring(0, 25)}
                          </p>
                          <button
                            className="underline mb-4"
                            onClick={() => setRead(!read)}
                          >
                            Read More
                          </button>
                        </>
                      )}
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col>
                    <button
                      onClick={() => {
                        navigate(`/user/${username}`);
                        handleClose();
                      }}
                    >
                      View Full Profile
                    </button>
                  </Col>
                  <Col>
                    <button
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Message {username}
                    </button>
                  </Col>
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

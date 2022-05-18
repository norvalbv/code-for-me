import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../Components/navbar";
import UserDisplay from "../Components/user-display";
import FilterQuestions from "../Components/filter-questions";
import QuestionList from "../Components/question-list";
import Footer from "../Components/footer";

const landing = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col sm={3}>
            <UserDisplay />
          </Col>
          <Col sm={8}>
            <FilterQuestions />
            <QuestionList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default landing;

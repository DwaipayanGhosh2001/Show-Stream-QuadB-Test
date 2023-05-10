import { Link } from "react-router-dom";
import { useShowRecord } from "../context/context";
import {
  Col,
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from "reactstrap";

const HomePage = () => {
  const { showDetails, fetchSelectedShow } = useShowRecord();


  return (
    <>
      <div className="bg-image">
        <Container fluid className="text-white bg-modify">
          <h1
            className="text-center text-uppercase fw-bold py-4"
            style={{ fontFamily: "monospace", letterSpacing: "5px" }}
          >
            Show Stream
          </h1>
          <div className="w-100 mx-auto">
            <Row className="ms-md-5">
              {showDetails &&
                showDetails.map((item, index) => (
                  <Col key={index} lg={3} md={4} sm={7} xs={9} className="m-5">
                    <Card
                      className="shadow p-3 rounded"
                      style={{ backgroundColor: "#FFF5EE" }}
                    >
                      <Link to={item.show.url}>
                        <img
                          src={
                            item.show.image
                              ? item.show.image?.medium
                              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930`
                          }
                          alt=""
                          className="rounded border border-4 border-dark zoom"
                          style={{ width: "100%", height: "400px" }}
                        />
                      </Link>

                      <CardTitle
                        className="text-uppercase text-center fw-bold text-dark my-3 fs-4 text-decoration-underline"
                        style={{ fontFamily: "serif", letterSpacing: "2px" }}
                      >
                        {item.show.name}
                      </CardTitle>
                      <CardBody className="text-dark flex-grow-1">
                        <p className="fw-bold">
                          Genre:
                          <i className="fw-normal ms-3">
                            {item.show.genres.map((genre, index) => (
                              <span key={index}>
                                {genre}
                                {index + 1 === item.show.genres.length
                                  ? ""
                                  : ", "}
                              </span>
                            ))}
                          </i>
                        </p>
                        <p className="fw-bold">
                          {" "}
                          Language :
                          <i className="fw-normal ms-3">
                            {/* {item.show.rating.average ? item.show.rating.average : `N/A`}  */}
                            {item.show.language}
                          </i>
                        </p>
                        <p className="fw-bold">
                          {" "}
                          Rating :
                          <i className="fw-normal ms-3">
                            {item.show.rating.average
                              ? item.show.rating.average
                              : `N/A`}
                          </i>
                        </p>
                      </CardBody>

                      <CardFooter className="border-0 mx-auto bg-transparent">
                        <Button
                          className="text-uppercase text-white bg-button px-4 rounded fs-6 btn"
                          tag={Link}
                          to="/show-details"
                          onClick={() => fetchSelectedShow(item.show.name)}
                        >
                          Know more
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;

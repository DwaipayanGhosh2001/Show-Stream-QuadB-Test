import { useEffect, useState } from "react";
import { useShowRecord } from "../context/context";
import { Container, Button, Table } from "reactstrap";
import Booking from "./BookingModal";
import { hover } from "@testing-library/user-event/dist/hover";

const ShowSummary = () => {
  const { selectedShowName, showDetails } = useShowRecord();
  const [showSelectedDetails, setShowSelectedDetails] = useState([]);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!showDetails) {
        // Wait for showDetails data to be available
        return;
      }

      const filteredData = showDetails.filter(
        (item) =>
          item.show.name.toLowerCase() === selectedShowName.toLowerCase()
      );
      const { show } = filteredData[0];
      console.log(show);
      setShowSelectedDetails(show);
      //   setLoading(false);
    };

    fetchData();
  }, [showDetails, selectedShowName]);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      <div className="bg-show text-white">
        <div
          className="text-center text-uppercase fs-1 py-5 ms-md-5"
          style={{ fontFamily: "revert", letterSpacing: "10px" }}
        >
          {showSelectedDetails.name}
        </div>
        <Container fluid>
          <div className="d-md-flex justify-content-between text-center">
            <img
              src={showSelectedDetails.image ? showSelectedDetails.image?.medium : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930` }
              className="rounded border-4 border-dark w-25 mx-auto h-25 mb-5"
              alt=""
            />
            <div className="w-50 mx-auto my-auto me-auto d-flex flex-column ">
              <Table borderless className="text-white">
                <thead>
                  <tr>
                    <th>Premired On:</th>
                    <th>Genre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">{showSelectedDetails.premiered}</td>
                    <td className="text-danger text-uppercase fst-italic">
                       {showSelectedDetails.genres && showSelectedDetails.genres.map((genre, index) => (
                        <span key={index}>
                          {genre}
                          {index + 1 === showSelectedDetails.genres.length
                            ? ""
                            : " | "}
                        </span>
                      ))} 
                    </td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <i className="fs-4">{showSelectedDetails.summary}</i>
            </div>

            <div className=" my-md-auto mx-auto " >
              <Booking movie ={showSelectedDetails.name}/>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShowSummary;

import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
 
  Form,
 
  Label,
  Input,
} from "reactstrap";
import { hover } from "@testing-library/user-event/dist/hover";
import { toast } from "react-toastify";

const Booking = ({ movie }) => {
  const [modal, setModal] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dateRef = useRef(null);
  const peopleRef = useRef(null);
  const numberRef = useRef(null);

  const toggle = () => setModal(!modal);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name= nameRef.current.value;
    const email= emailRef.current.value;
    const phone= numberRef.current.value;
    const count = peopleRef.current.value;
    const date = dateRef.current.value;
 
    console.log(
        `Movie: ${movie} , Name: ${name} , Email: ${email}, Phone: ${phone} Count: ${count}, Date: ${date}`
    );
    toast("Booking Successful | Check Console ", {type:"success"})
  };
  return (
    <div>
      <Button className="bg-button px-3 my-4 btn" onClick={toggle}>
        Book Ticket
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader className="" toggle={toggle}>
          Movie : {movie}
        </ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
            <Label className="">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              innerRef={nameRef}
            />
            <Label className="mt-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              innerRef={emailRef}
            />
            <Label className="mt-2">Mobile Number</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your mobile number"
              innerRef={numberRef}
            />

             <Label className="mt-2">Number of People</Label>
            <Input
              type="number"
              name="count"
              placeholder="Enter the count of people"
              innerRef={peopleRef}
            /> 

            <Label className="mt-2">Date</Label>
            <Input
              type="date"
              name="date"
              placeholder="Enter the date"
              innerRef={dateRef}
            /> 
            <div className="w-100 d-flex justify-content-center">
              <Button
                type="submit"
                className=" rounded-pill mt-4 w-50 text-dark modalbtn"
                outline
                color="success"
                style={{ backgroundColor: (hover = "transparent") }}
                onClick={toggle}
              >
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Booking;

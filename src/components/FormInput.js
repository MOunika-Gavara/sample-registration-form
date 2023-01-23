import React, { useState } from "react"
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
//import { useNavigate } from "react-router-dom"
import FormOutput from "./FormOutput";
import "./FormInput.css";



const FormInput = () => {

    // let navigate = useNavigate();

    const [formInput, setFormInput] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enteredfNameValid, setEnteredfNameValid] = useState(true);
    const [enteredlNameValid, setEnteredlNameValid] = useState(true);
    const [enteredEmailValid, setEnteredEmailValid] = useState(true);
    const [enteredPasswordValid, setEnteredPasswordValid] = useState(true);



    const addFname = (event) => {
        setFname(event.target.value);
    }
    const addLname = (event) => {
        setLname(event.target.value);
    }
    const addEmail = (event) => {
        setEmail(event.target.value);
    }
    const addPassword = (event) => {
        setPassword(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        setFormInput({ firstName: fname, lastName: lname, email: email, password: password })
        //console.log(formInput, "after values")
        if (fname === "") {
            setEnteredfNameValid(false);
            return;
        }
        setEnteredfNameValid(true);

        if (lname.trim() === "") {
            setEnteredlNameValid(false);
            return;
        }
        setEnteredlNameValid(true);

        if (email.trim() === "") {
            setEnteredEmailValid(false);
            return;
        }
        setEnteredEmailValid(true);

        if (password.trim() === "") {
            setEnteredPasswordValid(false);

            return;
        }
        setEnteredPasswordValid(true);

        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
    }

    //console.log(formInput, "daattaa")

    const nameInputIsInvalid = !enteredfNameValid;
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control ";

    return (
        <Container className={nameInputClasses}>
            <Form className="container" style={{ width: "18rem" }} >
                <Form.Group className='mb-3' variant="outline">
                    <Form.Label>firstName</Form.Label>

                    <Form.Control
                        className="col-xs-2"
                        type="text"
                        placeholder="first name"
                        value={fname}
                        onChange={addFname}>
                    </Form.Control>
                    {!enteredfNameValid && <Form.Text style={{ color: "red" }}>
                        *Name should not be empty
                    </Form.Text>}
                </Form.Group>
                <Form.Group className='form-outline mb-3'>
                    <Form.Label>lastName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="last name"
                        value={lname}
                        onChange={addLname}>
                    </Form.Control>
                    {!enteredlNameValid && <Form.Text style={{ color: "red" }}>
                        *Name should not be empty
                    </Form.Text>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder=" email"
                        value={email}
                        onChange={addEmail}>
                    </Form.Control>
                    {!enteredEmailValid && <Form.Text style={{ color: "red" }}>
                        *Email should not be empty
                    </Form.Text>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={addPassword}>
                    </Form.Control>
                    {!enteredPasswordValid && <Form.Text style={{ color: "red" }}>
                        *Password should not be empty
                    </Form.Text>}
                </Form.Group>
                <Button type="submit" onClick={submitHandler}>Submit</Button>

                <FormOutput values={formInput}></FormOutput>
                {/* <Link to={{
                    pathname: "/output",
                    state: {
                        formInput
                    },
                }}></Link> */}

            </Form>
        </Container>
    );
}

export default FormInput;
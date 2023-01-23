import React from "react"
import { Card } from "react-bootstrap";
//import { useLocation } from "react-router-dom"


const FormOutput = (props) => {

    // const {state} = useLocation();

    // const { email, firstName, lastName, password } = values;
    // console.log(values, "vals")


    return (

        <div>
            {props.values !== "" && <Card style={{ marginTop: 100, textAlign: "left" }}>
                <Card.Body >
                    {props.values.firstName !== "" && <Card.Text>
                        <strong>First Name :</strong> {props.values.firstName}{" "}
                    </Card.Text>}
                    {props.values.lastName !== "" && <Card.Text>
                        <strong>Last Name :</strong> {props.values.lastName}{" "}
                    </Card.Text>}
                    {props.values.email !== "" && <Card.Text>
                        <strong>Email :</strong> {props.values.email}{" "}
                    </Card.Text>}
                    {props.values.password !== "" && <Card.Text>
                        <strong>Password :</strong> {props.values.password}{" "}
                    </Card.Text>}
                </Card.Body>

            </Card>}

        </div>

    )
}





export default FormOutput;
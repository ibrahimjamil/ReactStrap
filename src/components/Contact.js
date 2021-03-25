import React from 'react'
import { Container, Form, FormGroup } from 'reactstrap'
import './Contact.css'
function Contact() {
    return (
        <div id="contacts">
            <Container  fluid className="my-5">
                <h1 className="my-5 portf">CONTACT ME</h1>
                <Container >
                    <Form>
                        <FormGroup>
                            <input type="text" class="form-control form-control-lg p-3 my-4"  placeholder="Name"/>
                            <input type="email" class="form-control form-control-lg p-3 my-4"  placeholder="Email Address"/>
                            <input type="text" class="form-control form-control-lg p-3 my-4"  placeholder="Phone Number"/>
                            <textarea type="text" class="form-control form-control-lg"  placeholder="Message"/>
                        </FormGroup>
                    </Form>
                </Container>
                <Container className=" d-flex flex-start">
                    <button type="submit" class="btn2">Submit</button>
                </Container>
            </Container>
        </div>
    )
}

export default Contact

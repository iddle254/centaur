import React from 'react'
// import DemoFooter from './DemoFooter'
import {Container, Row, Col, Form, InputGroupText, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap';
import WorkSection from './WorkSection';
function NewFooter() {
    return (
        <div>
           <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                {/* <h2 className="text-center">Keep in touch?</h2> */}
                <WorkSection/>
                {/* <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form> */}
              </Col>
            </Row>
          </Container>
        </div>      
      {/* <DemoFooter/> */}
        </div>
    )
}

export default NewFooter

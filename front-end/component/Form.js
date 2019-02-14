
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class FormTest extends Component {
  state = {
    fullName: '',
    picture: "",
    desc: "",
    daysLeft: "",
    numTickets: "",
    minTickets: "",
  };
  validState = {
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = async (event) => {
    event.preventDefault(),
      alert('Raffle has been posted!');
    let userData = {
      "name": this.state.fullName,
      "picture": this.state.picture,
      "desc": this.state.desc,
      "daysLeft": this.state.daysLeft,
      "numTickets": this.state.numTickets,
      "minTickets": this.state.minTickets
    };
    // const fetchURL = await fetch('http://localhost:8080/api/raffle/create', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })

    this.name.value = "";
    this.picture.value = "";
    this.desc.value = "";
    this.daysLeft.value = "";
    this.numTickets.value = "";
    this.minTickets.value = "";
    console.log(userData)
  }
  render() {
    return (
      <Container>
        <Card bg="light" style={{ padding: "40px" }}>
          <Card body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <FormGroup id="fullName">
                    <FormLabel style={{ fontSize: "20px" }}>Name:</FormLabel>
                  <FormControl type="text" ref={(input) => this.name = input} name="fullName" style={{ borderColor: "Gray", borderWidth: "2px" }} placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
                <br />
                <Col>
                  <FormGroup id="picture">
                    <FormLabel style={{ fontSize: "20px" }}>Picture: </FormLabel>
                    <FormControl type="text" ref={(input) => this.picture = input} name="picture" style={{ borderColor: "Gray", borderWidth: "2px" }} placeholder="Picture URL" value={this.state.picture} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <FormGroup id="desc">
                    <FormLabel style={{ fontSize: "20px" }}>Description:</FormLabel>
                    <FormControl as="textarea"  ref={(input) => this.desc = input} rows="8" name="desc" style={{ borderColor: "Gray", borderWidth: "2px" }} placeholder="Tell us about your product" value={this.state.desc} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <FormGroup id="daysLeft">
                    <FormLabel style={{ fontSize: "20px" }}> Raffle Days:</FormLabel>
                    <FormControl type="text"  ref={(input) => this.daysLeft = input} name="daysLeft" style={{ borderColor: "Gray", borderWidth: "2px" }} placeholder="How many days will the Raffle run?" value={this.state.daysLeft} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
                <br />
                <Col>
                  <FormGroup id="numTickets">
                    <FormLabel style={{ fontSize: "20px" }}>Tickets Offered: </FormLabel>
                    <FormControl type="text" ref={(input) => this.numTickets = input} name="numTickets" style={{ borderColor: "Gray", borderWidth: "2px" }} placeholder="How many tickets will be offered?" value={this.state.numTickets} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
                <br />
                <Col>
                  <FormGroup id="minTickets">
                    <FormLabel style={{ fontSize: "20px" }}>Minimum Tickets Sold: </FormLabel>
                    <FormControl type="text" ref={(input) => this.minTickets = input} name="minTickets" style={{ borderColor: "gray", borderWidth: "2px" }} placeholder="Min tickets sold for Raffle to run?" value={this.state.minTickets} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Button variant="primary" size="lg" style={{ width: "250px", float: "right", fontSize: "24px", textAlign: "center" }} type="submit" value="Submit">POST RAFFLE</Button>
            </Form>
          </Card>
        </Card>
      </Container>
    )
  }
}

export default FormTest; 
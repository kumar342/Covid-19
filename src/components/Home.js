import React, { Component } from "react";
import { Form, Card, CardGroup } from "react-bootstrap";
import Axios from "axios";

export default class Home extends Component {
  state = {
    data: [],
    global: {
      confirmed: {
        total: 0,
        new: 0,
      },
      recovered: {
        total: 0,
        new: 0,
      },
      deaths: {
        total: 0,
        new: 0,
      },
    },
    Country: {
      country: "",
      confirmed: {
        total: 0,
        new: 0,
      },
      recovered: {
        total: 0,
        new: 0,
      },
      deaths: {
        total: 0,
        new: 0,
      },
      Date: null,
    },
    Countries: [],
    Date: null,
    singleCountryDetails: false,
  };
  componentDidMount = () => {
    Axios.get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res);

        this.setState({
          global: {
            confirmed: {
              total: res.data.Global.TotalConfirmed,
              new: res.data.Global.NewConfirmed,
            },
            recovered: {
              total: res.data.Global.TotalRecovered,
              new: res.data.Global.NewConfirmed,
            },
            deaths: {
              total: res.data.Global.TotalDeaths,
              new: res.data.Global.NewDeaths,
            },
          },
          Countries: res.data.Countries,
          Date: res.data.Date.substring(0, 10),
        });
        console.log(this.state.Countries);
      })
      .catch((err) => console.log(err));
  };

  countryChanger = (e) => {
    let country = e.target.value;
    console.log(country);
    this.setState({
      Country: {
        country: 0,
        confirmed: {
          total: 0,
          new: 0,
        },
        recovered: {
          total: 0,
          new: 0,
        },
        deaths: {
          total: 0,
          new: 0,
        },
        Date: null,
      },
    });

    let singleCountryDetails;
    if (country === "Global") {
      this.setState({
        singleCountryDetails: false,
      });
    } else {
      this.state.Countries.map((res) => {
        if (country === res.Country) {
          singleCountryDetails = res;
          console.log(singleCountryDetails);
        }
      });
      this.setState({
        Country: {
          country: singleCountryDetails.Country,
          confirmed: {
            total: singleCountryDetails.TotalConfirmed,
            new: singleCountryDetails.NewConfirmed,
          },
          recovered: {
            total: singleCountryDetails.TotalRecovered,
            new: singleCountryDetails.NewRecovered,
          },
          deaths: {
            total: singleCountryDetails.TotalDeaths,
            new: singleCountryDetails.NewDeaths,
          },
          Date: singleCountryDetails.Date,
        },
      });
      console.log(this.state.Country);
    }
  };
  render() {
    return (
      <div className="select">
        <h1> Covid-19</h1>
        <Form.Group
          controlId="exampleForm.ControlSelect2"
          onChange={this.countryChanger}
        >
          <Form.Control as="select" multiple>
            <option>Global</option>
            {this.state.Countries.map((item, i) => {
              return (
                <option key={i} value={item.Country}>
                  {item.Country}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <br />
        <br />
        <div className="card-style">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>card 1</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>card 2</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>card 3</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

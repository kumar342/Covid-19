import React, { Component } from "react";
import { Form } from "react-bootstrap";
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

  countryChanger = async (e) => {
    let country = e.target.value;
    console.log(country);
    await this.setState({
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
      this.setState({ Country: singleCountryDetails });
    }
    console.log(this.state.Country);
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
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> confirmed</h5>
                <p className="card-text">
                  Total : {this.state.Country.TotalConfirmed} <br />
                  New : {this.state.Country.NewConfirmed}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recovered</h5>
                <p className="card-text">
                  Total : {this.state.Country.TotalRecovered} <br />
                  New : {this.state.Country.NewRecovered}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Deaths</h5>
                <p className="card-text">
                  Total : {this.state.Country.TotalDeaths} <br />
                  New : {this.state.Country.NewDeaths}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

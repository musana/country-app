import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Country extends Component {
    state = {
        country: [],
    }

    componentDidMount() {
        const countryName = this.props.match.params.name;
        axios.get('https://restcountries.eu/rest/v2/name/' + countryName + '?fullText=true')
            .then(resp => {
                this.setState({ country: resp.data[0] })
            })
    };

    render() {
        const { country } = this.state;
        return (
            <div className="card text-center mt-5">
                <div className="card-body">
                    <div className="card-footer text-muted">
                        <h3 className="card-title" style={{ textDecoration: "underline" }}>{this.state.country.name}</h3>
                        <img src={country.flag} style={{ "width": "300px" }} className="card-img-top" alt="..."></img>
                        <p className="card-text"></p>
                        <table className="table table-bordered border-info">
                            <tbody>
                                <tr className="table-info table-primary">
                                    <td><b>Name:</b> </td>
                                    <td>{country.name}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Native Name: </b></td>
                                    <td>{country.nativeName}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Population: </b></td>
                                    <td>{country.population}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>TimeZone: </b></td>
                                    <td>{country.timezones}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Capital: </b></td>
                                    <td>{country.capital}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Calling Code: </b></td>
                                    <td>{country.callingCodes}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Region: </b></td>
                                    <td>{country.region}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Demonym: </b></td>
                                    <td>{country.demonym}</td>
                                </tr>
                                <tr className="table-info table-primary">
                                    <td><b>Top Level Domain: </b></td>
                                    <td>{country.topLevelDomain}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="/" className="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

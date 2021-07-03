import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import SearchCountry from './searchCountry';

// Render method must be have return statement.

export default class CountryList extends Component {
    state = {
        countries: []
    }
    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(resp => {
                this.setState({ countries: resp.data.slice(0, 20) });
            })
    }

    searchHandler = (e) => {
        console.log(e.target.value);
        axios.get("https://restcountries.eu/rest/v2/name/"+e.target.value)
             .then(respx => {
                 this.setState({countries: respx.data})
                })
    }

    render() {
        const countrys = this.state.countries.map((country, idx) => {
            return (
                <div className="col" key={country.numericCode}>
                    <div class="card border-gray h-100 p-1">
                        <Link to={country.name}><div className="card-header"><b>{country.name}</b></div></Link>
                        <img src={country.flag} className="card-img-top" alt={country.flag} />
                        <div className="card-body">
                            <h6 className="card-title">{country.nativeName}</h6>
                            <p class="card-text">Some Stuff.</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div style={{ "margin": "70px 20px 20px 20px" }}>
                <SearchCountry changed={this.searchHandler} />
                <div className="row row-cols-1 row-cols-md-5 g-4 m-05" >
                    {countrys}
                </div></div>
        )
    }
}

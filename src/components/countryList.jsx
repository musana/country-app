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
        axios.get("http://api.countrylayer.com/v2/all?access_key=f932e936c19e4cc20e12b739a2fcb03e")
            .then(resp => {
                this.setState({ countries: resp.data });
            })
    }

    searchHandler = (e) => {
        console.log(e.target.value);
        axios.get("http://restcountries.eu/v2/name/"+e.target.value+"?access_key=f932e936c19e4cc20e12b739a2fcb03e")
             .then(respx => {
                 this.setState({countries: respx.data})
                })
    }

    render() {
        const countrys = this.state.countries.map((country, idx) => {
            return (
                <div className="col" key={country.numericCode}>
                    <div className="card border-gray h-100 p-1">
                        <Link to={country.name}><div className="card-header"><b>{country.name}</b></div></Link>
                        <img src={country.flag} className="card-img-top" alt={country.flag} />
                        <div className="card-body">
                            <h6 className="card-title">{country.nativeName}</h6>
                            <p className="card-text">a country in {country.subregion}</p>
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

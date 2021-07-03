import React, { Component } from 'react'

export default class SearchCountry extends Component {
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input onChange={this.props.changed} type="text" className="form-control" placeholder="search country by name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-info" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        )
    }
}

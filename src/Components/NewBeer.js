import React, { Component } from 'react';
import axios from 'axios';


class NewBeer extends Component {
    
    state = {
        showForm: false
        name: ''
    };

    

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = async (event) => {
        event.preventDefault()
        let res = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
        }

    
    render() {
        return (
            <div>
                <button onClick = {this.toggleForm}>New Beer</button>
                <form method="post" onSubmit={this.submitHandler}>         
                    <label for="beerName">Beer Name:</label>
                    <input onChange={this.handleInputChange} type="text" id="beerName" name="beerName" />
                    <br/>
                    <label for="tagLine">Tag Line:</label>
                    <input onChange={this.handleInputChange} type="text" id="tagLine" name="tagLine" />
                    <br/>
                    <label for="description">Description:</label>
                    <input onChange={this.handleInputChange} type="text" id="description" name="description" />
                    <br/>
                    <label for="first_brewed">Brewers Tips:</label>
                    <input onChange={this.handleInputChange} type="text" id="first_brewed" name="first_brewed" />
                    <br/>
                    <label for="attenuation_level">Attenuation Level:</label>
                    <input onChange={this.handleInputChange} type="number" id="attenuation_level" name="attenuation_level" />
                    <br/>
                    <label for="contributed_by">Contributed By:</label>
                    <input onChange={this.handleInputChange} type="text" id="contributed_by" name="contributed_by" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default NewBeer;
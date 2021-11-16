import React, { Component } from 'react';


export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }

    componentDidMount = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                url: data.message
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return(
            <div>
                <img src={this.state.url} alt="dog pics" />
                <button onClick={this.componentDidMount}>Random Dog</button>
            </div>
        )
    }

}
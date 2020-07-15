import React, {Component} from 'react'
import axios from 'axios';

export default class RequestAPI extends Component {

    state = {
        data: []
    }

    constructor (props){
        super(props)
        baseUrl = props.baseUrl;
    }

    componentDidMount(){
        axios.get("http://game-explorer-unisul.herokuapp.com/api/v1/"+baseUrl)
            .then(response => {
                this.setState({
                    data: response.data
                });
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
    }
}
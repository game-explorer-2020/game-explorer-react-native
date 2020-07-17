import React from 'react'
import axios from 'axios';

export default RequestAPI => {

    function getDataFromAPI(baseUrl){
        axios.get("http://game-explorer-unisul.herokuapp.com/api/v1/"+baseUrl)
        .then(response => {
            this.setState({
                data: this.response.data
            });
            return this.response.data
        })
        .catch(error => {
            console.log(error);
        });
    }
}
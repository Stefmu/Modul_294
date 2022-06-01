import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function Crud() {

    function getPost() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function createPost(body) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({body}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function updatePost(index, body) {
        fetch('https://jsonplaceholder.typicode.com/post/'+index, {
            method: 'PUT',
            body: JSON.stringify({body}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function deletePost(index) {
        fetch('https://jsonplaceholder.typicode.com/post/'+index, {
            method: 'DELETE'
        });
    }

    return (
        <div className="App">
        </div>
    );
}

export default Crud;

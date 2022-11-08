import React, {useState} from "react";
import Button from "react-bootstrap/Button";

function ArticleSearch() {

    const [userInput, setUserInput] = useState('');

    const handleChange = event => {
        setUserInput(event.target.value);

        console.log('searching for: ', event.target.value);
    }

    // const userInput = document.getElementById("userInput").value;
    const apiUrl = 'https://newsapi.org/v2/everything?q='+ userInput + '&apiKey=2b7c3079f57b4775b9829a555f91c54d';

    function UserSearch(userInput){
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log('articles searched for: ', data);
            });
    }

    return (
        <div>
            <h1>Search for Articles</h1>
            <input type="text" placeholder="Yummy Tacos" value={userInput} onChange={handleChange}></input>
            <Button variant="primary" onClick={UserSearch}>Search</Button>
        </div>
    )
}

export default ArticleSearch;
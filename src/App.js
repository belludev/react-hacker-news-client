import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            storyIds: [],
            currentArticles: [],
            page: 1
        }
    }
    
    componentDidMount(){
        
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => {
                this.setState({ storyIds: res.data });
                let stories = [];

                
                return stories;
            })
            .then(stories => {
                this.setState({ articles: stories });
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="container">
                <h1>Hacker News</h1>
                <ul>
                    {}
                    <li></li>
                </ul>
            </div>
        );
    }
}
export default App;
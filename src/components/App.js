import React,{Component} from 'react';
import SearchBar from './searchBar'
import MovieList from './movieList'

class App extends Component {

    state = {

         movies: [
            {
                "id":1,
                "name": "The Flash",
                "rating": 8.3,
                "overview" : "This is a wider with supporting text below as a natural lead-in to additional content",
                "imageURL": "https://wikiimg.tojsiabtv.com/wikipedia/en/2/2e/The_Flash_season_6.jpg"
            },
            {
                "id":2,
                "name": "Interstellar",
                "rating": 6.3,
                "overview" : "This is a wider with supporting text below as a natural lead-in to additional content",
                "imageURL": "https://tr.web.img2.acsta.net/pictures/14/10/09/15/52/150664.jpg"
            },
            {
                "id":3,
                "name": "Arrow",
                "rating": 7.9,
                "overview" : "This is a wider with supporting text below as a natural lead-in to additional content",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_.jpg"
            }
        ]
    }
     

    deletMovie = (movie) => {

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
            this.setState({
                movies: newMovieList
            })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp = {this.deletMovie}
                />
            </div>
        )
    }
    
};

export default App;


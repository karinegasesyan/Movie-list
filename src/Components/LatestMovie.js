import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

library.add(faStar)

class LatestMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latestMovies: []
        }
    }

    componentDidMount() {


        let BaseMovieUrl = 'https://api.themoviedb.org/3/movie/latest?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US';
        fetch(BaseMovieUrl).then(response => {
            if (!response.ok) {
                throw Error("Failed connection to the API")
            }
            return response
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({latestMovies: [responseJSON]});
            })
            .catch((error) => {
                alert('error');
            });
    }

    render() {

        let {latestMovies} = this.state;
        return (
            <div className="container">
                <div className="wrapper">
                    <Scrollbars>
                        {
                            latestMovies.map(function (movie, index) {
                                return <div key={movie.id} className="movie-list"
                                            style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                    <div className="movie__list--info">
                                        <p>{movie.title}</p>
                                        <span>{movie.release_date}</span>
                                    </div>
                                    <div className="fav-icon flex justify-center align-center">
                                        <FontAwesomeIcon icon="star"/>
                                    </div>
                                </div>;
                            })
                        }
                    </Scrollbars>
                </div>
            </div>

        )
    }
}

export default LatestMovie;
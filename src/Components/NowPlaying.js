import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class NowPlaying extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nowPlayingMovies: []
        }
    }

    componentDidMount() {
        let BaseMovieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US&page=1';
        fetch(BaseMovieUrl).then(response => {
            if (!response.ok) {
                throw Error("Failed connection to the API")
            }
            return response
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({  nowPlayingMovies: (responseJSON.results) });
            })
            .catch((error) => {
                alert('error');
            });
    }

    render() {

        let {  nowPlayingMovies } = this.state;
        return(
            <div className="container">
                <div  className="wrapper">
                    <Scrollbars>
                        {  nowPlayingMovies.map(function( movie, index ){
                            return  <div key={ movie.id } className="movie-list" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                <div className="movie__list--info">
                                    <p>{ movie.title }</p>
                                    <span>{ movie.release_date }</span>
                                </div>
                                <div className="fav-icon flex justify-center align-center">
                                    <FontAwesomeIcon icon="star" />
                                </div>
                                <div className="rating flex justify-center align-center">{ movie.vote_average }</div>
                            </div>;
                        })}
                    </Scrollbars>
                </div>
            </div>

        )
    }
}
export default NowPlaying;
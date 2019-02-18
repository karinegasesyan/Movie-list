import React from 'react';

class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          movies: []
        }
      }

componentWillMount() {
    let BaseMovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US&page=1';
        fetch(BaseMovieUrl).then(response => {
            if (!response.ok) {
                throw Error("Failed connection to the API")
            }
            return response
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({ movies: (responseJSON.results) });
                //listMovieDiv;
               // return responseJSON.movies;
               
            })
        .catch((error) => {
            //console.log(error);
            alert('error');
        }); 
}

render() {
    //console.log(this.state.movies);
    let { movies } = this.state;
    return(
        <div className="container">
            <div  className="wrapper">
                {movies.map(function(name, index){
                    return  <div key={ name.id } className="movie-list" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + name.poster_path + ")"}}>
                                <div className="movie__list--info">
                                    <p>{name.title}</p>
                                    <span>{name.release_date}</span>
                                    <div>
                                    fav
                                    </div>
                                </div>
                            </div>;
                })}
            </div>
        </div>

    )
  }
}

export default MovieList;


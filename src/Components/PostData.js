/*export function PostData(type, userData){
    let BaseUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=1d1620c73f08ab33b4763a7a15fcda29';

    return new Promise((resolve, reject)  => {
        fetch(BaseUrl+type,{
            method:'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                return responseJSON.movies;
            })
        .catch((error) => {
            reject(error);
        });
    });
}*/
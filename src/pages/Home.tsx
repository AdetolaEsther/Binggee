import React, { useEffect, useState } from 'react'
import CoverDisplay from '../components/Cover'
import Display from '../components/Display'
import { top_rated_movies, trending, upcoming } from '../modules/ApilLinks'
// import coverPicture from "./assets/img.jpg"


    const Home = () => {
        const [headerImage, setHeaderImage] = useState('');
    
        useEffect(() => {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=23162b2820408a378fe3020a264ae29e')
                .then((response) => response.json())
                .then((data) => {
                    const movies = data.results;
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    const randomMovie = movies[randomIndex];
                    if (randomMovie && randomMovie.backdrop_path) {
                        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
                        setHeaderImage(imageUrl);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }, []);
  return (
    <div>
        
        <CoverDisplay title={'Bingee'} 
      description={'Millons of movies/Tv shows at one place'} 
      catchyPhase={'Dont miss out on the entertainment ...'} 
      headerImage={headerImage} 
      showHearderImage={true} 
      showSearch={true}/>

      <Display 
       apiEndPoints={`${top_rated_movies}`} 
       itemHeading ={"Top rated Movies"}     
       showButtons= {true} 
       tvShowOn= {false}
       movieOn= {true}
       numberOfMovies={14}

/>
      <Display 
      apiEndPoints={`${trending}`}
      itemHeading ={"Trending Moive"}
      showButtons= {true} 
      tvShowOn= {false}
      movieOn= {true}
      numberOfMovies={14}

/>
      <Display 
      apiEndPoints={`${upcoming}`}
      itemHeading ={"Upcoming Moive"}
      showButtons= {true} 
      tvShowOn= {false}
      movieOn= {true}
      numberOfMovies={14}

/>
    </div>
  )
}

export default Home
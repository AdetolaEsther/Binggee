import React, { useState ,useEffect} from 'react';
import { MoviesShowWrapper } from '../styles/Style.module';
import axios from 'axios';
import { CircularProgress } from '@mui/material';


interface Movie{
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
 vote_average: number;

  first_air_date: string;
  name: string;
}

interface DataProps{
  apiEndPoints: string;
  numberOfMovies: number;
  showButtons: boolean;
  tvShowOn: boolean;
  movieOn:boolean;
  itemHeading: string;
}

const Display: React.FC<DataProps>= ({
  apiEndPoints,
  numberOfMovies, 
  showButtons, 
  tvShowOn, 
  movieOn,
  itemHeading
}) => {

    const [showItems,setShowItems] = useState<Movie[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [loading, setLoading] = useState(false)

    // pagination
    useEffect (() =>{
      const fetchMovies = async ()=>{
        try{
          const response = await axios.get(`${apiEndPoints}`,{
            params:{
              page: currentPage,
            },
          });


          const {results, total_page} = response.data;

          setShowItems(results.slice(0,numberOfMovies));
          setTotalPage(total_page);
          setTimeout(() => {
            setLoading(true);
          },1000);
        }catch(error){
          console.error("Error fetching movies",error)
        }
      };
      fetchMovies();


    
    
    },[currentPage, apiEndPoints, numberOfMovies]);


    //change date format
     function getFormattedDate(dateString:string|number|Date){
      const options ={
        year:"numeric",
        month:"short",
        day:"numeric",
      }as Intl.DateTimeFormatOptions;
      const date =new Date(dateString);
      return date.toLocaleTimeString("en-Us", options);
     }
    // previous page Button
     const nextItemPage = () => {
      if (currentPage < totalPage){
        setCurrentPage ((nextPage) => nextPage +1)
      }
     }
     // next page Button
     const prevItemPage = () => {
      if (currentPage > 1){
        setCurrentPage ((prevPage) => prevPage - 1)
      }
     }
    return <MoviesShowWrapper>

    {!loading? (
      <div className='loadingOverlay'>
      <CircularProgress size={90} color='warning'/>
      <p>Loading</p>
      </div>
    ):(
      <>
      <div className='movieHeading'>
        <h1>{itemHeading}</h1>
      </div>

      <div className='movieCard'>
        {showItems.map((items) => {
          const percentage = (items.vote_average /10) * 100;

          return(
            
          <div key ={items.id}>
            <div className='movie' >
              <div className='movieImg'>
                <img 
                 src = {`https://image.tmdb.org/t/p/w200/${items.poster_path}`}/>
                <span>{percentage.toFixed(0)}%</span>
              </div>
              <div className='movieInfo'>
                {movieOn && (
                  <>
                  <h4>{items.title}</h4>
                  <p>{getFormattedDate(items.release_date)}</p>
                  </>
                )}

                {tvShowOn && ( 
                  <>
                  <h4>{items.name}</h4>
                  <p>{getFormattedDate(items.first_air_date)}</p>
                 </>
              )}
              </div>
            </div>
            </div>

            
          )
        })}
         {showButtons && ( 
          <div className='buttons'>
            {currentPage > 1 && (
              <button className='btnprev' onClick={prevItemPage}> 
                 Back
              </button>
            )}
            <p>
              Page <b>{currentPage}</b>
            </p>
            {currentPage < totalPage && (
              <button className='btnNext' onClick={nextItemPage}> 
              Next
              </button>
            )}
          </div>
         )}
      </div>

      </>
    )}


  </MoviesShowWrapper>
};

export default Display;

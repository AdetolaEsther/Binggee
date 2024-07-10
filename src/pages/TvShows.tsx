import React from 'react'
import coverPicture from "../assets/img.jpg"
import CoverDisplay from '../components/Cover'
import Display from '../components/Display'
import { top_rated_shows, trendingShows,airing_today, popularShows } from '../modules/ApilLinks'


const TvShows = () => {
  return (
    <>
        <CoverDisplay title={'TV-shows'} 
  description={'Cinema on your screen'} 
  catchyPhase={'Home of Blockbusters...'} 
  headerImage={coverPicture} 
  showHearderImage={true} 
  showSearch={true}/>

  <Display 
   apiEndPoints={`${top_rated_shows}`} 
   itemHeading ={"Top Rated Shows"}     
   showButtons= {true} 
   tvShowOn= {true}
   movieOn= {false}
   numberOfMovies={14}/>

  <Display 
   apiEndPoints={`${popularShows}`} 
   itemHeading ={"Popular Shows"}     
   showButtons= {true} 
   tvShowOn= {true}
   movieOn= {false}
   numberOfMovies={14}/> 

  <Display 
   apiEndPoints={`${trendingShows}`} 
   itemHeading ={"Trending Shows"}     
   showButtons= {true} 
   tvShowOn= {true}
   movieOn= {false}
   numberOfMovies={14}/> 

  <Display 
   apiEndPoints={`${airing_today}`} 
   itemHeading ={"Airing Today"}     
   showButtons= {true} 
   tvShowOn= {true}
   movieOn= {false}
   numberOfMovies={14}/> 
    </>
  )
}

export default TvShows
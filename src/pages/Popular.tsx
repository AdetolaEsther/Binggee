import React from 'react'
import CoverDisplay from '../components/Cover'
import Display from '../components/Display'
import { popular, popularShows } from '../modules/ApilLinks'
import coverPicture from "../assets/img.jpg"

const Popular = () => {
  return (
    <> 
    <CoverDisplay title={'Popular Movies and TV-shows'} 
  description={'Cinema on your screen'} 
  catchyPhase={'Home of Blockbusters...'} 
  headerImage={coverPicture} 
  showHearderImage={true} 
  showSearch={true}/>

  <Display 
   apiEndPoints={`${popular}`} 
   itemHeading ={"Popular Moive"}     
   showButtons= {true} 
   tvShowOn= {false}
   movieOn= {true}
   numberOfMovies={14}/>

  <Display 
   apiEndPoints={`${popularShows}`} 
   itemHeading ={"Popular Shows"}     
   showButtons= {true} 
   tvShowOn= {true}
   movieOn= {false}
   numberOfMovies={14}/>
   
   </>
  )
}

export default Popular
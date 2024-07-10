import React from 'react'
import CoverDisplay from '../components/Cover'
import Display from '../components/Display'
import { trending, airing_today,now_playing  } from '../modules/ApilLinks'
import coverPicture from "../assets/img.jpg"


const NowPlaying = () => {
  return (
    <>
        
        <CoverDisplay title={'Now playing/ Streaming now'} 
      description={'Cinema on your screen'} 
      catchyPhase={'Home of Blockbusters...'} 
      headerImage={coverPicture} 
      showHearderImage={true} 
      showSearch={true}/>

      <Display 
       apiEndPoints={`${trending}`} 
       itemHeading ={"Trending Moive"}     
       showButtons= {true} 
       tvShowOn= {false}
       movieOn= {true}
       numberOfMovies={14}/>

      <Display 
       apiEndPoints={`${now_playing}`} 
       itemHeading ={"Now Playing"}     
       showButtons= {true} 
       tvShowOn= {false}
       movieOn= {true}
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

export default NowPlaying
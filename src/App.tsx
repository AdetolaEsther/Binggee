import Display from "./components/Display";
import Header from "./components/Header";
import { popular, trending, upcoming } from "./modules/ApilLinks";
import CoverDisplay from "./components/Cover";
import coverPicture from "./assets/img.jpg"


 const itemsProps ={
  numberOfMovies: 15,
 }
function App() {

  return (
    < >
      <Header/>  
      <br /><br /><br />
      <CoverDisplay title={'Bingee'} 
      description={'Home of Blockbusters...'} 
      catchyPhase={'Binge all your favourite movies and Tv-shows here'} 
      headerImage={coverPicture} 
      showHearderImage={true} 
      showSearch={true}/>

      <Display {... itemsProps}
       apiEndPoints={`${popular}`} 
       itemHeading ={"Popular Moive"}     
       showButtons= {true} 
       tvShowOn= {false}
       movieOn= {true}

/>
      <Display {... itemsProps} 
      apiEndPoints={`${trending}`}
      itemHeading ={"Trending Moive"}
      showButtons= {true} 
      tvShowOn= {false}
      movieOn= {true}
/>
      <Display {... itemsProps} 
      apiEndPoints={`${upcoming}`}
      itemHeading ={"Upcoming Moive"}
      showButtons= {true} 
      tvShowOn= {false}
      movieOn= {true}
/>
    </>
  );
}

export default App;

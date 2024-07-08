 import React from 'react'
import { CoverPage, SearchBar } from '../styles/Style.module'

interface CoverProps{
    title: string;
    description: string;
    catchyPhase: string;
    headerImage: string;
    showHearderImage: boolean;
    showSearch: boolean;
}
const CoverDisplay:React.FC<CoverProps> = ({
    title, 
    description, 
    catchyPhase, 
    headerImage,
    showHearderImage,
    showSearch,
}) => {
   return (
     <CoverPage>
        <div className='coverText'>
            <h1>{title}</h1>
            <p>{description}</p>
            <em>{catchyPhase}</em>
        </div>

        {showHearderImage && <img src ={headerImage}/> }
        {showSearch && (
            <SearchBar>
            <input type='search' placeholder='Search 100000 of Movie....'/>
            <button>Search</button>
        </SearchBar>
        )} 
        
   </CoverPage>
 )
}

export default CoverDisplay
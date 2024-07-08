import styled from "styled-components";

export const NavbarWrapper = styled.div`

.logo{
color: red;
font-size: 48px;
letter-spacing: 2px;
  font-family: "Shadows Into Light", cursive;
}
.navLinks, .loginBtn{
    margin-left:auto;
}

.links{
 font family: 'Acme', sans-serif;
 font-size: 15px;
 &:hover{
 background-color:red;
 }
}

@media (max-width:1060px){
.logo{
font-size: 1.6rem
}
.links, .loginBtn{
font-size: 12px;
    }
 
}

    `;

    // DISPLAY


export const MoviesShowWrapper = styled.div`
display: flex;
flex-direction:column;
align-items:center;
border-radius:10px;
margin-top:5rem;
padding:10px;
box-shadow: 0 5px 5px -5px rgba(0,0,0,0.5);

.loadingOverlay {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color: rgba(3,37,65,0.4);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:#fff;
    z-index:9999;
    
    >p{
        font-size:2rem;
        margin-top:1rem;
        font-family: 'Acme', sans-serif;
        letter-spacing: 2px;
    }
}
 
.movieHeading {
    width:100%;
     
    >h1{
     margin-bottom:1.5rem;
     font-family:'Vast Shadow', sans-serif;
     margin-left: 2rem;}
       }

 .movieCard {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  .movie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    margin-bottom: 2rem;

    .movieImg { 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;

      > img {
        border-radius: 10px;
        border-bottom-right-radius: 25px;
        box-shadow: 1px 1px 10px 1px #000;
        padding: 5px;
      }
      
      > span {
        border: none;
        height: 35px;
        width: 35px;
        border-radius: 360px;
        background-color: #f76429;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        color: #fff;
        padding: 5px;
        font-family: 'Vast Shadow', cursive;
        font-size: 12px;
        position: relative;
        bottom: 20px;
      }
    } 
    
    &:hover {
      transform: scale(1.04);
    }
  }               .movieInfo{
                   display: flex;
                   flex-direction: column;
                   justify-content: center;
                   align-items: center;
                   position: relative;
                   bottom: 10px;
                   
                   >h4{
                    margin-bottom: 0;
                    width: 230px;
                    text-align: center;
                    whitespace: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                   }
                    >p{
                    margin: 8px 0;
                    color: grey ;
                    border-bottom: 1px solid grey;
                    
                    }
                }
     }
 .buttons{
   text-align:center;
   border: none;
   display:flex;
   justify-content: space-evenly;
   align-items:center;
   width: 90%;
   margin: 10px;

   > p{
      font-family:'Vast Shadow', cursive;

    }
      
    .btnPrev, 
    .btnNext {
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        background-color: red;
        font-family:'Vast Shadow', cursive;
        border-radius: 5px;

      &:hover{
        background-color: #000;
        cursor: pointer;

      }
    }
 }
`;


// cover.tsx
export const CoverPage = styled.div`

 text-align: center;
 width: 80%;
 margin: 18px auto 0;
 position: relative;
 text-transform: capitalize;

 .coverText{
    position: absolute;
    color: whitesmoke;
   top:45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:100%
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    text-shadow: 1px 1px 3px black;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    line-height: 1;

    >h1{
         font-size:3rem;
         font-family: "Roboto" , sans-serif;
        }
    >p{
        font-size:20px;
    }

    em{
        font-size: 15px;
        width: 100%
     }

 }

 &:: before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:77%;
    background-color: rgba(3,37,65,0.8);
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
 }
  >img{
  height: 300px;
  width: 100%;
  border-bottom-left-radius: 240px;
  border-bottom-right-radius: 240px;
  }
  @media (max-width:1020px) {
    .coverText{
    letter-spacing: 1px;
    line-height: 0.2;
     >h1{
      font-size: 15px;
     }
      > p , em{
        font-size: 15px;
      }
    }
      &::before, img{
       height: 240px;
      }
  }
      @media(max-width:800){
       width: 100%;
       margin: 5.2rem auto 0;
       .coverText{
            line-height: 1;
            >h1{
                 font-size: 2rem;
                }
            > p , em{
                font-size: 5px;
                        }
        }
      &::before, img{
       height: 240px;
       border-bottom-left-radius: 0;
       border-bottom-right-radius: 0;
                    }
      }

`;


export const SearchBar = styled.div`
   >input, 
   >button{
    margin: auto;
    outline: none;
    border: none;
    border-radius:20px;
    postion: absolute;
    top: 100%;
    transform: translate(-50%, -50%)
    text-align: center;
   }
    >input{
    height:45px;
    width:70%;
     box-shadow: 1px 1px 6px 2px grey;
     padding: 10px;
     font-size: 18px;
     margin: 20px;

     &:: placeholder{
        font-size: 14px;
     }
    }
>button{
padding: 0 25px;
left: 81%;
font-size:15px;
background: black;
color: #fff;
font-weight: bolder;
padding: 15px;
cursor: pointer;
}
`;

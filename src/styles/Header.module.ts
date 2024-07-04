import styled from "styled-components";

export const NavbarWrapper = styled.div`

.logo{
color: red;
font-size: 48px;
letter-spacing; 2px;
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
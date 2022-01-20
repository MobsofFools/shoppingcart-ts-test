import styled from 'styled-components';
import Margherita from '../img/margherita.jpg'

export const Wrapper = styled.div`
    box-sizing: border-box;
    width:inherit;
    margin-left: calc(-50vw + 50%);
    margin-right:-8px;
    height: max-content;
    margin-top:5vh;

    

.hero-container {    
    background-image: url(${Margherita});
    background-repeat:no-repeat;
    background-size:cover;
    height: 95vh;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
}
.hero-container h1 {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
  }
  
  .hero-container p {
    margin-top: 8px;
    color: #fff;
    font-size: 4rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
  
  .hero-btns {
    margin-top: 32px;
    margin: 6px;
    display:flex;
  }
  
  
  @media screen and (max-width: 960px) {
    .hero-container h1 {
      font-size: 70px;
      margin-top: -150px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .hero-container h1 {
      font-size: 50px;
      margin-top: -100px;
    }
  
    .hero-container > p {
      font-size: 30px;
    }
    .hero-textbg{
        background-color: white;
    }
  
    
  }
`;
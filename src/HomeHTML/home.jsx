import Card from "../Components/Card/Card.jsx"
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Components/Login/Login.jsx";

function Home() {
  return(
    <>
      <Header header="Welcome Home"/>
      <Login/>
      <Footer/>
    </>
    );
}

export default Home

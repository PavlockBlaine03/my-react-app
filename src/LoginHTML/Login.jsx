import Card from "../Components/Card/Card.jsx"
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import LoginComp from "../Components/Login/LoginComp.jsx";

function Login() {
  return(
    <>
      <Header header="Login"/>
      <LoginComp/>
      <Footer/>
    </>
    );
}

export default Login
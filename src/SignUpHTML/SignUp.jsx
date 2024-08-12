import Card from "../Components/Card/Card.jsx"
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import SignUpComp from "../Components/SignUp/SignUpComp.jsx";

function SignUp() {
  return(
    <>
      <Header header="Sign Up"/>
      <SignUpComp/>
      <Footer/>
    </>
    );
}

export default SignUp
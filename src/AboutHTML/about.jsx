import Card from "../Components/Card/Card.jsx"
import Button from "../Components/Button/Button.jsx";
import Student from "../Components/Students/Student.jsx";
import UserGreeting from "../Components/UserGreeting/UserGreeting.jsx";
import List from "../Components/List/List.jsx"
import Header from "../Components/Header/Header.jsx";

function About() {
  return(
    <>
      <Header header="About"/>
      <Card name="Blaine Pavlock" text="Software Engineer"/>
    </>
    );
}

export default About
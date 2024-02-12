import "./App.css";
import Screen1 from "./Screens/Screen1";
import ClientScreen from "./Screens/ClientScreen";
import Footer from "./Components/Footer";
import Techstacks from "./Screens/Techstacks";
import Contact from "./Screens/Contact";
import Team from "./Screens/Team";



function App() {

    return (
        <>
            <Screen1 />
            <Team />
            <ClientScreen />
            <Techstacks />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

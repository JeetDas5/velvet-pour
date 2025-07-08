import {gsap} from "gsap";
import Art from "./components/Art.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import {ScrollTrigger, SplitText} from "gsap/all"
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
        </main>
    );
};

export default App;

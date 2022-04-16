import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ImageMenu from "./components/ImageMenu/ImageMenu";
import Intro from "./components/intro/Intro";

function App() {
    return (
        <div>
			<Intro/>
            <ImageMenu/>
            <About/>
            <Footer/>
		</div>
    );
}

export default App;

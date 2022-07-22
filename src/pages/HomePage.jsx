import Hero from "components/Hero";
import HomeSlider from "components/HomeSlider";



const HomePage = () => {
    return <main>
        <Hero />
        <h2 className="visually-hidden">My Projects</h2>
        <HomeSlider />
    </main>
}

export default HomePage;
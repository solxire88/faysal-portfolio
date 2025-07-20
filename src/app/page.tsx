import Hero from "@/pages/Hero";
import Navbar from "@/pages/Navbar";
import Work from "@/pages/Work"
import Hero2 from "@/pages/Hero2"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Footer from "@/pages/Footer"


export default function Home() {
    return (
        <div className="md:px-20 px-5">
            <Hero />
            <Hero2 />
            <Navbar />
            <Work />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

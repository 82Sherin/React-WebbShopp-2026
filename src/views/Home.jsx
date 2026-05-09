import Header from "../Header";
import Footer from "../Footer";
import "./Home.css";

function Home(){
    return(
        <>
            <Header/>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.123!2d-0.1326!3d38.5388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62058d649c1205%3A0x19485de9490ae031!2sTaste%20of%20Greek!5e0!3m2!1sen!2sse!4v1"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Taste Of Greek location"
                />
            </div>
            <Footer/>
        </>
    );
}

export default Home
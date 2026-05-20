import Header from "../Header";
import Footer from "../Footer";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import { useState } from "react";




function Project(){
    const [products, setProducts] = useState([])
 

    return(
        <>
            <Header/>
            <SearchBar setProducts={setProducts}/>
            <ProjectCard products={products} setProducts={setProducts}/>
            <Footer/>
        </>

    );

}

export default Project
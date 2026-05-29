import Header from "../views/Header";
import Footer from "../views/Footer";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

function Project() {
  return (
    <>
      <Header />
      <SearchBar />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default Project;
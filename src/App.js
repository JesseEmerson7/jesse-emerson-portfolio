import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Footer from "./components/footer"
import About from "./components/body/aboutMe"
import Contact from "./components/body/Contact"
import Portfolio from "./components/body/Portfolio"
import Resume from "./components/body/Resume"
import {useState} from "react"

function App() {


  const [currentPage, setCurrentPage] = useState('about')


  const renderPage = ()=>{
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <Resume />;
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="vw-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;

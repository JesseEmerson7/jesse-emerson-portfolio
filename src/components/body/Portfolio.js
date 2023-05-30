import "../../assets/css/portfolio.css";
import picture from "../../assets/images/afternoon-peak-41409.herokuapp.com_ (1).png";

export default function Portfolio() {
  return (
    <>
      <div className=" col vh-100 ">
        <div className="row justify-content-center m-4 gap-4">
            <div className="card card-size w-25 h-25 col-4  project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>

            <div className="card card-size w-25 h-25 col-4 project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>

            <div className="card card-size w-25 h-25 col-4 project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>

  
            
        </div>

        <div className="row justify-content-center m-4 gap-4">
            
        <div className="card card-size w-25 h-25 col-4  project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>

            <div className="card card-size w-25 h-25 col-4 project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>

            <div className="card card-size w-25 h-25 col-4 project-bg">
                <img src={picture}/>
                <div className="project-detail">
                <h2>Burger Builder</h2>
                <button className=" btn project-bg"><a>View Live Site</a></button>
                </div>
            </div>



        </div>

        
        

      </div>
    </>
  );
}

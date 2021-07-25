import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Img1 from "../../img/images (1).jpg";
import Img2 from "../../img/images (2).jpg";
import Img3 from "../../img/images (3).jpg";
import Img4 from "../../img/images (4).jpg";
import NavBar from "../NavBar/NavBar";
const Features = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container features">
        <div className="titel-header">
          <h3> Our Features </h3>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 mb-3">
            <div className="card">
              <img src={Img1} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link onClick={handleClick} class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <img src={Img2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <img src={Img3} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <img src={Img4} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <img
                src="/src/img/images (5).jpg"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <img
                src="/src/img/images (6).jpg"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

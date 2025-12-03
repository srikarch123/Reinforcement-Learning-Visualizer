import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="vh-100 d-flex flex-column bg-light">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">RL Visualizer</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link" href="#">Environment</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Q-Learning</a></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Algorithms
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Q-Learning</a></li>
                  <li><a className="dropdown-item" href="#">SARSA</a></li>
                  <li><a className="dropdown-item" href="#">Value Iteration</a></li>
                  <li><a className="dropdown-item" href="#">Policy Iteration</a></li>
                </ul>
              </li>
            </ul>

            <button className="btn btn-success">Start</button>
          </div>
        </div>
      </nav>

      {/* TITLE */}
      <h3 className="text-center mt-3">Reinforcement Learning Visualizer</h3>

      {/* MAIN CONTENT — TAKES ALL REMAINING SPACE */}
      <div className="container-fluid flex-fill d-flex">
        <div className="row flex-fill">

          {/* PANEL 1 */}
          <div className="col-12 col-md-6 d-flex p-3">
            <div className="card flex-fill d-flex justify-content-center align-items-center">
              <h5>Panel 1</h5>
            </div>
          </div>

          {/* PANEL 2 */}
          <div className="col-12 col-md-6 d-flex p-3">
            <div className="card flex-fill d-flex justify-content-center align-items-center">
              <h5>Panel 2</h5>
            </div>
          </div>

          {/* PANEL 3 */}
          <div className="col-12 col-md-6 d-flex p-3">
            <div className="card flex-fill d-flex justify-content-center align-items-center">
              <h5>Panel 3</h5>
            </div>
          </div>

          {/* PANEL 4 */}
          <div className="col-12 col-md-6 d-flex p-3">
            <div className="card flex-fill d-flex justify-content-center align-items-center">
              <h5>Panel 4</h5>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

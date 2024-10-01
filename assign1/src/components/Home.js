import { Outlet, NavLink, Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div>
              <main>
              <h1><b>Welcome to My portfolio</b></h1>
                <h2>My Mission</h2>
                <p>My mission is to leverage technology to solve problems.</p>
                <p>
                  <NavLink className="home-link" to="/about">About Me</NavLink>
                </p>
              </main>
              

            </div>
        </>
    )
};

export default Home;
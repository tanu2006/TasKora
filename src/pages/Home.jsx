import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <nav className="home-navbar">
        <div className="logo">
          Taskora
        </div>

        <div className="nav-actions">
          <Link to="/login" className="nav-login">
            Sign in
          </Link>

          <Link to="/signup" className="nav-button">
            Get started
          </Link>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            YOUR PRODUCTIVE SPACE
          </span>

          <h1>
            Organize your tasks.
            <br />
            Clear your mind.
          </h1>

          <p>
            A simple and beautiful workspace designed to
            help you plan your days, manage your tasks,
            and focus on what actually matters.
          </p>

          <div className="hero-actions">

            <Link to="/signup" className="primary-button">
              Get started
            </Link>

            <Link to="/login" className="secondary-button">
              Sign in
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
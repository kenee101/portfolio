import logo from "./assets/logo-1.png";
import { Link } from "react-scroll";
import bg from "./assets/background-2.jpg";
import html from "./assets/html-css-hd.png";
import js from "./assets/javascript-logo.png";
import react from "./assets/react-logo-1.png";
import forkify from "./assets/forkify.png";
import blog from "./assets/blog.png";
import travel from "./assets/travel.png";
import usePopcorn from "./assets/usePopcorn.png";

export default function App() {
  return (
    <div className="body">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo"></img>
      <nav>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navItem"
        >
          Portfolio
        </Link>
      </nav>

      <Link
        activeClass="active"
        to="form"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="navLink"
      >
        <button className="btn navButton">
          <i className="fa fa-comment"></i> Contact Me
        </button>
      </Link>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section id="home">
        <div className="home-content">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Elijah,</span> <br></br> Web
            Developer
          </span>
          <p className="introParagraph">
            I'm a frontend developer with a passion for crafting exceptional
            user experiences. Skilled in modern web development technologies,
            including HTML5, CSS3, JavaScript(ES6+ syntax), React and the use of
            version control (Git). I'm dedicated to staying updated with the
            latest trends and best practices in frontend development.
          </p>
          <a href="https://mail.google.com/">
            <button className="btn hire-me">
              <i className="fa fa-briefcase" aria-hidden="true"></i> Hire Me
            </button>
          </a>
        </div>
        <div className="profilePhoto">
          <img src={bg} alt="Profile"></img>
        </div>
      </section>

      <section id="skills">
        <div className="skillBody">
          <span className="skillTitle">About Me</span>
          <span className="skillDesc">
            I'm a skilled and passionate web developer possessing a
            comprehensive skill set that enables me to create engaging and
            user-friendly websites and web applications. With a keen eye for
            design and a deep understanding of frontend technologies, I excel in
            transforming static designs into dynamic, interactive experiences
            that delight users and drive business goals.
          </span>
        </div>

        <div className="skillBars">
          <div className="skillBar">
            <img src={html} alt="HTML" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>HTML & CSS</h2>
              <p>
                Proficient in writing clean, semantic HTML markup and styling
                with CSS to control the apperance, layout and behaviour.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={js} alt="JS" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>JavaScript</h2>
              <p>
                Implementing client-side form validation, creating interactive
                UI components like sliders or accordions, fetching and
                displaying data from a server without page reload.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={react} alt="React" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>React</h2>
              <p>
                Building modern web applications with dynamic, interactive user
                interfaces, handling complex state management, routing, and data
                fetching logic efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="portfolioBody">
          <h2 className="portfolioTitle">My Portfolio</h2>
          <p>
            I possess a keen sense of strong problem-solving skills and a
            proactive approach to troubleshooting technical issues, combined
            with a critical mindset to analyze requirements and implement
            effective solutions. Committed to staying up-to-date with the latest
            trends, technologies, and best practices in frontend development,
            actively seeking opportunities for professional growth and skill
            enhancement to deliver innovative and high-quality solutions.
          </p>
        </div>

        <div className="projects">
          <div className="project">
            <a href="https://forkify-usih.netlify.app/">
              <img src={forkify} alt="forkify" className="projectImg"></img>
            </a>
            <div className="projectDesc">
              <a href="https://forkify-usih.netlify.app/">
                <h3 className="projectTile">Forkify</h3>
              </a>
              <p>
                Simulation of a recipe application where users can search for
                recipes, view details about each recipe, bookmark their favorite
                recipe, and interactively create new recipes.
              </p>
            </div>
          </div>

          <div className="project">
            <a href="https://far-away-from-home.netlify.app/">
              <img src={travel} alt="travel" className="projectImg"></img>
            </a>
            <div className="projectDesc">
              <a href="https://far-away-from-home.netlify.app/">
                <h3 className="projectTile">Travel List</h3>
              </a>
              <p>
                A web application that includes tools for creating packing lists
                and checklists for essential travel items. It allows users to
                customize checklists based on the packing order, description,
                and personal preferences.
              </p>
            </div>
          </div>

          <div className="project">
            <a href="https://post-on-blog.netlify.app/">
              <img src={blog} alt="blog" className="projectImg"></img>
            </a>
            <div className="projectDesc">
              <a href="https://post-on-blog.netlify.app/">
                <h3 className="projectTile">Blog Post</h3>
              </a>
              <p>
                A demo blog application platform where users can create,
                publish, and view all blog posts. It offers a user-friendly
                editor for creating and editing blog posts, supporting rich text
                formatting.
              </p>
            </div>
          </div>

          <div className="project">
            <a href="https://usePopcorn.netlify.app/">
              <img
                src={usePopcorn}
                alt="usePopcorn"
                className="projectImg"
              ></img>
            </a>
            <div className="projectDesc">
              <a href="https://usePopcorn.netlify.app/">
                <h3 className="projectTile">Movie Site</h3>{" "}
              </a>
              <p>
                A digital platform designed to provide users with access to
                information about movies, including details such as titles,
                descriptions, ratings, reviews, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="form">
        <h2>Contact</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Usih Elijah. All rights reserved</p>
    </footer>
  );
}

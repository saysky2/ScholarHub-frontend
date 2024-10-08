import React, { useState } from "react";
import { useEffect } from "react";
import styleAbout from "./About.module.css";
const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add(styleAbout.active);
        } else {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove(styleAbout.active);
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up the observer on component unmount
      observer.disconnect();
    };
  }, []);

  const [selectedTab, setSelectedTab] = useState(true);
  const aboutStyles = {
    display: selectedTab ? "block" : "none",
    textDecorationLine: selectedTab ? "underline" : "none",
    color: selectedTab ? "#1AB79D" : "black",
  };

  const joinStyles = {
    display: selectedTab ? "none" : "block",
    textDecorationLine: selectedTab ? "none" : "underline",
    color: selectedTab ?  "black":"#1AB79D",
  };

  const changeSelectedTab = () => {
    setSelectedTab((prevTab) => !prevTab);
  };

  return (
    <div className="container">
      <div className={styleAbout.about}>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            style={{
              justifyContent: "center",
              display: "flex",
              gap: "5rem",
              marginBottom: "1rem",
              marginTop: "1rem",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4  rounded-t-lg  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="about-Us"
                data-tabs-target="#about"
                type="button"
                style={{ textDecorationLine: aboutStyles.textDecorationLine,
                color: aboutStyles.color
                 }}
                onClick={changeSelectedTab}
              >
                About Us
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="join"
                data-tabs-target="#join"
                type="button"
                style={{ textDecorationLine: joinStyles.textDecorationLine,
                color: joinStyles.color
                 }}
                onClick={changeSelectedTab}
              >
                How To Join ?
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div style={{ display: aboutStyles.display }} id="aboutUsBody">
            <div className={styleAbout.stickybtn}>
              <a href="#">
                <button className={styleAbout.button}>
                  <svg className={styleAbout.svgIcon} viewBox="0 0 384 512">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                  </svg>
                </button>
              </a>
            </div>
            <main>
              <div className="darkmode">
                <section id="aboutScholarHub">
                  <h1
                    className="text-4xl"
                    style={{
                      textAlign: "center",
                      marginBottom: "1rem",
                      textDecorationLine: "underline",
                      fontWeight: "400",
                    }}
                  >
                    About ScholarHub
                  </h1>
                  <p>
                  Welcome to the University Library, your gateway to an extensive world of knowledge, research, and academic support. We are dedicated to fostering a rich learning environment that helps students, faculty, and researchers access the information they need quickly and easily. Our library is designed to serve as an academic hub that combines both traditional resources and innovative digital solutions, ensuring that users can leverage the best tools for their educational journey.
                  </p>
                </section>
                <section id="ourMission">
                  <h2><b>Key Features of Our Library Website:</b></h2>
                  <section id="ourMission1">
                    <h3><b>Book Issuing & Returning</b></h3>
                    <p>
                    Our website offers seamless book issuing and returning services for all registered users. Whether you prefer to browse our physical collection or search our online catalog, you can easily:<br/>
                    - Search for available books in various subjects. <br/>
                    - Reserve books online for pick-up at your convenience.<br/>
                    - Check the status of your borrowed books, due dates, and overdue alerts.<br/>
                    - Return books with a simple online return process, making it easier to manage your loans.<br/>
                    </p>
                  </section>
                  <section id="ourMission2">
                    <h3><b>Access to Previous Year Question Papers (PYQs)</b></h3>
                    <p>
                    We understand the importance of exam preparation, which is why we provide access to a comprehensive database of <b>previous year question papers</b>. Students can search and download past exam papers from various courses and departments to aid in their studies. This archive is regularly updated, helping students review patterns and better understand the types of questions asked in past exams.
                    <br/>
                    By reviewing PYQs, students can identify recurring question patterns, better understand examination formats, and gain insight into what areas of the syllabus are frequently tested.
                    </p>
                  </section>
                </section>
                <section id="whatWeOffer">
                  <h2><b>AI features</b></h2>
                  <section id="whatWeOffer1">
                    <h3>
                    <b>AI-Powered Solutions for PYQs</b>
                    </h3>
                    <p>
                    To make studying even more efficient, our website integrates advanced <b>AI features</b> for logged-in users. By utilizing these tools, you can: <br/>
                    - Get instant solutions and explanations for previous year question papers.<br/>
                    - Receive personalized recommendations for study materials based on the PYQs.<br/>
                    - Explore possible questions that may appear in future exams, based on AI analysis of past trends.<br/>
                    This cutting-edge technology enables students to prepare strategically and gain deeper insights into their coursework.<br/>
                    </p>
                  </section>
                  <section id="whatWeOffer2">
                    <h3><b>Online Assistance and Support</b></h3>
                    <p>
                    We know that navigating academic resources can sometimes be challenging. That's why we offer <b>real-time support</b> through: <br/>
                    - <b>Live Chat with Librarians:</b> Get quick answers to your questions or guidance on finding resources via our live chat feature.<br/>
                    - <b>Research Consultations:</b> Schedule one-on-one consultations with our librarians to receive in-depth assistance on research projects, paper citations, or utilizing our digital resources effectively.
                    - <b>FAQs and Tutorials:</b> Browse through a curated list of frequently asked questions or access video tutorials that guide you on how to make the most out of the library’s online tools.

                    </p>
                  </section>
                </section>
                <section id="whyus">
                  <h2><b>Why Choose Our Library?</b></h2>
                  <section id="powerhouse1">
                    <h2><b>University Library</b></h2>
                    <p>
                     
                    Our mission is to support the academic success of our university community by providing easy access to valuable resources. We continuously update our services to meet the evolving needs of students and faculty, blending traditional library services with innovative digital tools for an unparalleled learning experience.
                    </p>
                  </section>
        

                </section>  
              </div>
              <nav className={styleAbout.sectionNav}>
                <ol>
                  <li>
                    <a href="#aboutScholarHub">About ScholarHub</a>
                  </li>
                <li>
                    <a href="#ourMission">Feature's offered</a>
                    <ul>
                      <li>
                        <a href="#ourMission1">Issue & Return</a>
                      </li>
                      <li>
                        <a href="#ourMission2">Previous year Question's</a>
                      </li>
                    </ul>
                  </li>
                <li>
                    <a href="#whatWeOffer">AI-Features</a>
                    <ul>
                      <li>
                        <a href="#whatWeOffer1">AI powered Answers</a>
                      </li>
                      <li>
                        <a href="#whatWeOffer2">Assistance & Support</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#whyus">Conclusion</a>
                    <ul>
                      <li>
                        <a href="#powerhouse1"></a>
                      </li>
                    </ul>
                  </li> 
                </ol>
                <div className={styleAbout.backToTopBtn}>
                  <a href="#about-Us">
                    <button className={styleAbout.button}>
                      <svg className={styleAbout.svgIcon} viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </nav>
            </main>
          </div>
          <div id="joinbody" style={{ display: joinStyles.display }}>
            <div className={styleAbout.stickybtn}>
              <a href="#">
                <button className={styleAbout.button}>
                  <svg className={styleAbout.svgIcon} viewBox="0 0 384 512">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                  </svg>
                </button>
              </a>
            </div>
            <main>
              <div className="darkmode">
                <section id="intro">
                  <h1
                    className="text-4xl"
                    style={{
                      textAlign: "center",
                      marginBottom: "1rem",
                      textDecorationLine: "underline",
                      fontWeight: "400",
                    }}
                  >
                    How to join ScholarHub
                  </h1>
                  <p>
                    ScholarHub provides an exciting platform for gamers to
                    showcase their skills and compete in various online gaming
                    tournaments. If you're eager to join the action, follow this
                    step-by-step guide to participate in ScholarHub games and
                    elevate your gaming experience.
                  </p>
                </section>
                <section id="getStarted">
                  <h2>How to get started:</h2>
                  <section id="getStarted1">
                    <h3>Visit the ScholarHub Website:</h3>
                    <p>
                      Start by visiting the official ScholarHub website.
                      Navigate to the registration or sign-up section to create
                      a user account. Fill in the required information
                      accurately and confirm your account through the
                      verification process.
                    </p>
                  </section>
                  <section id="getStarted2">
                    <h3>Explore Available Tournaments:</h3>
                    <p>
                      Once your account is set up, browse through the website to
                      discover the ongoing and upcoming tournaments. ScholarHub
                      hosts a variety of games, so choose the one that aligns
                      with your interests and expertise.
                    </p>
                  </section>
                </section>
                <section id="Regt-tour">
                  <h2>Register to Tournaments:</h2>
                  <section id="Regt-tour1">
                    <h3>Review Tournament Details:</h3>
                    <p>
                      Click on the tournament you wish to participate in and
                      carefully read the details provided. Take note of the
                      tournament format, rules, registration deadlines, and any
                      other relevant information. Ensure that you meet the
                      eligibility criteria for the chosen tournament
                    </p>
                  </section>
                  <section id="Regt-tour2">
                    <h3>Register for the Tournament:</h3>
                    <p>
                      After selecting a tournament, proceed to register for it.
                      This typically involves clicking a "Register" or "Join"
                      button and confirming your participation. Some tournaments
                      may have entry fees, so be prepared to make the necessary
                      payments, if required.
                    </p>
                  </section>
                </section>
                <section id="prep4tour">
                  <h2>Prepare your Self for Tournament:</h2>
                  <section id="prep4tour1">
                    <h2>Set Up Your Gaming Gear:</h2>
                    <p>
                      Prepare your gaming setup, ensuring that your hardware,
                      software, and internet connection meet the tournament
                      requirements. Check for any specific rules related to
                      equipment, as some tournaments may have restrictions on
                      certain peripherals or settings.
                    </p>
                  </section>
                  <section id="prep4tour2">
                    <h2>Practice and Warm-up:</h2>
                    <p>
                      Before the tournament begins, dedicate time to practice
                      and warm-up sessions. Familiarize yourself with the game
                      mechanics, maps, and strategies to improve your
                      performance during the competition.
                    </p>
                  </section>
                  <section id="prep4tour3">
                    <h2>Join the Tournament Lobby:</h2>
                    <p>
                      On the day of the tournament, log in to your ScholarHub
                      account and navigate to the tournament lobby. Follow the
                      provided instructions to join the lobby or wait for an
                      invitation from the tournament organizers.
                    </p>
                  </section>
                </section>
                <section id="fun-enjoy">
                  <h2 className="text-2xl " style={{ marginBottom: "1rem" }}>
                    Compete and Enjoy:
                  </h2>
                  <p>
                    Once in the tournament lobby, compete against other
                    participants in your assigned matches. Follow the tournament
                    schedule, adhere to the rules, and maintain good
                    sportsmanship throughout. Enjoy the experience and use it as
                    an opportunity to learn and grow as a gamer.
                  </p>
                </section>
                <section id="connected">
                  <h2 className="text-2xl" style={{ marginBottom: "1rem" }}>
                    Stay Informed and Connect:
                  </h2>
                  <p style={{ marginBottom: "2rem" }}>
                    Keep an eye on the tournament updates and results. Stay
                    informed about future tournaments, events, and community
                    activities. Connect with fellow gamers, share experiences,
                    and embrace the sense of camaraderie within the ScholarHub
                    community.
                  </p>
                  <p>
                    Participating in ScholarHub games is a thrilling adventure
                    for gaming enthusiasts. By following these steps, you'll be
                    well-prepared to dive into the world of competitive gaming
                    and enjoy the challenges and camaraderie that come with it.
                    Good luck, and may you achieve victory in your esports
                    endeavors!
                  </p>
                </section>
              </div>
              <nav className={styleAbout.sectionNav}>
                <ol>
                  <li>
                    <a href="#intro">Introduction</a>
                  </li>
                  <li>
                    <a href="#getStarted">How to get started</a>
                    <ul>
                      <li>
                        <a href="#getStarted1">Visit ScholarHub</a>
                      </li>
                      <li>
                        <a href="#getStarted2">Browse Tournaments</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Regt-tour">Register to Tournament</a>
                    <ul>
                      <li>
                        <a href="#Regt-tour1" style={{ textWrap: "nowrap" }}>
                          Review Tournament Details
                        </a>
                      </li>
                      <li>
                        <a href="#Regt-tour2">Participate in Tournament</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#prep4tour">Prep for Tournament</a>
                    <ul>
                      <li>
                        <a href="#prep4tour1">Set Up Your Gaming Gear</a>
                      </li>
                      <li>
                        <a href="#prep4tour2">Practice and Warm-up</a>
                      </li>
                      <li>
                        <a href="#prep4tour3">Enter Tournament Lobby</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#fun-enjoy">Compete and Enjoy</a>
                  </li>
                  <li>
                    <a href="#connected">Stay Informed and Connect</a>
                  </li>
                </ol>
                <div className={styleAbout.backToTopBtn}>
                  <a href="#join">
                    <button className={styleAbout.button}>
                      <svg className={styleAbout.svgIcon} viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </nav>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

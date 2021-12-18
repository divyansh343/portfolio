import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import Icon from "../components/Icon";
// Icons
import Html from "../components/icons/Html";
import Css from "../components/icons/Css";
import Sass from "../components/icons/Sass";
import Figma from "../components/icons/Figma";
import Javascript from "../components/icons/Javascript";
import Tailwind from "../components/icons/Tailwind";
import Bootstrap from "../components/icons/Bootstrap";
import ReactJs from "../components/icons/ReactJs";
import NextJs from "../components/icons/NextJs";
import NodeJs from "../components/icons/NodeJs";
import Photoshop from "../components/icons/Photoshop";
import AdobeXd from "../components/icons/AdobeXd";

// Project Card
import ProjectCard from "../components/ProjectCard";
import GitHubProfile from "../components/icons/GitHubProfile";
import TwitterProfile from "../components/icons/TwitterProfile";
import LinkedInProfile from "../components/icons/LinkedInProfile";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

const projects = [
  {
    title: "Fulltodev",
    overview:
      "Developer articles news Reports from all around the world. news is fetches from diffrent sources using APIs.",
    stack: ["express js", "Next", "Rest api", "tailwind"],
    link: null,
    repo: null,
    isSiteLive: false,
  },
  {
    title: "MovieMarks",
    overview:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    stack: ["express", "React", "node"],
    link: null,
    repo: null,
    isSiteLive: false,
  },
  {
    title: "Wallet tracker",
    overview:
      "The website is to track your wallet expenses. This features is purely built in vanila js.",
    stack: ["Html", "css", "js",],
    link: "",
    repo: "https://github.com/divyansh343/",
    isSiteLive: true,
  },
  {
    title: "Kindspot",
    overview:
      "A simple blog application built in top of django framework which uses python.",
    stack: ["Django", "Python"],
    link: "",
    repo: "https://github.com/divyansh343/",
    isSiteLive: true,
  },
];

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Home() {
  const [visibleSection, setVisibleSection] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
    } else {
      setNavbarOpen(false);
    }
  };

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const myWorkRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { section: "home", ref: homeRef, id: 1 },
      { section: "about", ref: aboutRef, id: 2 },
      { section: "skills", ref: skillsRef, id: 3 },
      { section: "my-work", ref: myWorkRef, id: 4 },
      { section: "blog", ref: blogRef, id: 5 },
      { section: "contact", ref: contactRef, id: 6 },
    ];

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
        // console.log(visibleSection);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolling(window.pageYOffset > 110)
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      className={`relative w-full bg-right-bottom bg-cover bg-dark overflow-auto min-h-screen ${navbarOpen ? "overflow-hidden" : "overflow-auto"
        }`}
    >
      <Head>
        <title>Divyansh Pal | React Developer & </title>
        <meta
          name="description"
          content="The portfolio of frontend developer and designer, Divyansh Pal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Video background
      <div className="absolute top-0 z-20 w-auto h-screen max-w-full overflow-hidden bg-dark">
        <video
          autoPlay
          loop
          muted
          src="/videos/landing-page-video.mp4"
          className="relative z-50 w-auto max-w-full min-h-full opacity-10"
        >
          {" Sorry, your browser doesn't support embedded videos. "}
        </video>
      </div>

      {/* Full-screen Menu */}
      <div
        className={`fixed w-full z-50 h-screen pt-24 bg-darker bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
          }`}
      >
        <div className="container relative mx-auto">
          <nav className="block ml-auto">
            <ul className="z-50 flex flex-col items-start">
              <li className="z-50 block py-2 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${visibleSection === "home"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(homeRef.current);
                  }}
                >
                  Home
                </button>
              </li>
              <li className="z-50 block py-2 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${visibleSection === "about"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(aboutRef.current);
                  }}
                >
                  About
                </button>
              </li>
              <li className="z-50 block py-2 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${visibleSection === "skills"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(skillsRef.current);
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="z-50 block py-2 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${visibleSection === "my-work"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(myWorkRef.current);
                  }}
                >
                  My Work
                </button>
              </li>
              <li className="z-50 block py-2 list-none lg:inline-block">
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out text-white ${visibleSection === "blog"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                >
                  CV
                </a>
              </li>
              <li className="z-50 block py-2 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link text-xl font-semibold transition-all duration-300 ease-in-out ${visibleSection === "contact"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    setNavbarOpen(false);
                    scrollTo(contactRef.current);
                  }}
                >
                  Contact
                </button>
              </li>
              <li className="z-50 block py-2 mt-6 list-none lg:inline-block">
                <a
                  href={`mailto:divyanshpal300@outlook.com`}
                  className="text-lg btn-brand btn-lg"
                >
                  contact me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header and Nav */}
      <header
        className={`header top-0 mx-auto flex items-center py-6 z-50 fixed w-full transition-all duration-500 h-24 ${scrolling && !navbarOpen ? "bg-dark" : "bg-transparent"
          }`}
        ref={headerRef}
      >
        {/* Logo and Nav container */}
        <div className="container relative flex items-center mx-auto">
          {/* Logo */}
          <div className="z-50 w-12 h-12">
            <svg
              id="b613d120-e911-4f71-b7bc-d9b9e1bbdc6f"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.13 75.2"
              href="/"
            >
              <rect
                className="fill-current text-brand"
                x="-3.43"
                y="39.29"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(-27.18 21.75) rotate(-45)"
              />
              <rect
                className="fill-current text-brand"
                x="-3.43"
                y="22.74"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(22.89 -1.01) rotate(45)"
              />
              <rect
                className="fill-current text-brand"
                x="64.37"
                y="22.74"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(156.55 -10.59) rotate(135)"
              />
              <rect
                className="fill-current text-brand"
                x="64.37"
                y="39.29"
                width="32.19"
                height="8.78"
                rx="4.39"
                transform="translate(106.48 131.47) rotate(-135)"
              />
              <rect
                className="fill-current text-brand"
                x="41.93"
                y="-1.17"
                width="8.78"
                height="77.54"
                rx="4.39"
                transform="translate(11.31 -10.71) rotate(15)"
              />
            </svg>
          </div>
          {/* Nav */}
          <nav className="block ml-auto">
            <ul className="z-50 flex items-center">
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${visibleSection === "home"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    scrollTo(homeRef.current);
                  }}
                >
                  Home
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${visibleSection === "about"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    scrollTo(aboutRef.current);
                  }}
                >
                  About
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${visibleSection === "skills"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    scrollTo(skillsRef.current);
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${visibleSection === "my-work"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    scrollTo(myWorkRef.current);
                  }}
                >
                  My Work
                </button>
              </li>
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out text-white ${visibleSection === "blog"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                >
                  CV
                </a>
              </li>
              <li className="z-50 hidden mx-5 list-none lg:inline-block">
                <button
                  href="#"
                  className={`header_link font-semibold transition-all duration-300 ease-in-out ${visibleSection === "contact"
                      ? "selected delay-300"
                      : "opacity-50 hover:opacity-100 border-b-2 border-transparent"
                    }`}
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                >
                  Contact
                </button>
              </li>
              <li className="z-50 hidden ml-5 list-none lg:inline-block">
                <a
                  href={`mailto:divyanshpal300@outlook.com`}
                  className="btn-brand btn-md"
                >
                  Contact me
                </a>
              </li>
              <li className="z-50 inline-block ml-5 list-none lg:hidden">
                <button
                  className="relative w-10 h-10 text-white focus:outline-none"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navbarOpen ? "rotate-45" : "-translate-y-1.5"
                        }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${navbarOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${navbarOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                    ></span>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content Container */}
      <div className="container relative z-30 mx-auto">
        {/* Hero Content */}
        <main className={`flex-col flex h-screen`} id="home" ref={homeRef}>
          {/* Main */}
          <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
            <div className="w-full">
              <span className="text-2xl font-semibold text-brand">
                Hello! My name is
              </span>

              <h1 className="mb-4 text-5xl md:text-7xl">Divyansh Pal</h1>
              <h2 className="mb-4 text-3xl md:text-4xl text-light">
                <ReactTypingEffect
                  typingDelay={200}
                  speed={30}
                  eraseSpeed={30}
                  eraseDelay={1500}
                  text={[
                    `React Developer`,
                    `Next js Developer`,
                    `Mern stack`,
                  ]}
                />
              </h2>
              <p className="w-4/5 text-xl md:w-full">
                I build appealing websites that look good, and work well.
              </p>
              <p className="w-4/5 text-xl md:w-full">love going through the entire process</p>
              <button
                className="mt-4 btn-brand btn-lg"
                onClick={() => {
                  scrollTo(myWorkRef.current);
                }}
              >
                See my Work
              </button>
            </div>
          </div>
        </main>

        {/* About */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="about"
          ref={aboutRef}
        >
          <div className="flex flex-col">
            <h2 className="text-5xl">About</h2>
            <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

            <div className="flex flex-col-reverse items-start w-full md:flex-row">
              <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                <p className="text-lg">
                  Hello! I&apos;m Divyansh and I&apos;m a React developer,
                  designer, from India.
                </p>
                <p className="text-lg">
                  After getting intrested in tech related stuff, I knew I wanted
                  to work with computers and technology, then I started learning web development online.
                </p>

                <p className="text-lg">
                  In recent years, I&apos;ve been focused on programming,
                  building a solid frontend stack and creating exciting real-world projects.

                </p>
                <p className="text-lg">
                  Alongside my design and development work, I love to create content
                  on twitter related to technologies. that i prefer to release dopamine.

                  <a
                    href="https://twitter.com/divyansPal"
                    target="_blank"
                    className="underline-link"
                    rel="noreferrer"
                  >
                    twitter
                  </a>
                  , so I like to keep busy!
                </p>
                <p className="text-lg">
                  Take a look at my work below to see what I&apos;m working on,
                  and get in touch if you&apos;d like to work together!                </p>
                {/* <button className="self-start inline-block mt-8 btn-outline btn-lg">
                  See my CV
                </button> */}
              </div>
              <div className="flex w-full h-full mb-4 md:pl-8 md:w-2/5 md:mb-0">
                <Image
                  src="/divyansh-main.jpg"
                  className="overflow-hidden rounded-md"
                  width={880}
                  height={880}
                  alt={"Divyansh pal headshot"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="skills"
          ref={skillsRef}
        >
          <h2 className="text-5xl">Skills</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Skills icons */}
          <div className="flex flex-wrap w-full pr-4 mt-8">
            {/* HTML */}
            <Icon
              IconType={Html}
              title="HTML"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* CSS */}
            <Icon
              IconType={Css}
              title="CSS"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />


            <Icon
              IconType={Sass}
              title="Sass"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Bootstrap */}
            <Icon
              IconType={Bootstrap}
              title="Bootstrap"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />


            <Icon
              IconType={Tailwind}
              title="Tailwind"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Javascript */}
            <Icon
              IconType={Javascript}
              title="Javascript"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* React */}
            <Icon
              IconType={ReactJs}
              title="React"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Next */}
            <Icon
              IconType={NextJs}
              title="Next"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Node */}
            <Icon
              IconType={NodeJs}
              title="Node"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Firebase
            <Icon
              IconType={Firebase}
              title="Firebase"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            /> */}

            {/* Photoshop */}
            <Icon
              IconType={Photoshop}
              title="Photoshop"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            {/* Illustrator
            <Icon
              IconType={Illustrator}
              title="Illustrator"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            /> */}

            {/* After Effects
            <Icon
              IconType={AfterEffects}
              title="After Effects"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            /> */}

            {/* Adobe XD */}
            <Icon
              IconType={AdobeXd}
              title="Adobe XD"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />

            <Icon
              IconType={Figma}
              title="Figma"
              columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
              width={"w-16 sm:w-24"}
              height={"h-16 sm:h-24"}
              padding={"p-0"}
              flexDirection={"flex-col"}
              titleMargins={"mt-4"}
              titleSize={"text-sm sm:text-base"}
              marginBottom={"mb-4"}
              marginRight={"mr-0"}
              textTransform={"normal-case"}
              fixedHeight={"h-28"}
            />
          </div>
        </section>

        {/* My Work */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="my-work"
          ref={myWorkRef}
        >
          {/* My Work header */}
          <h2 className="text-5xl">My Work</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          {/* Featured Projects Container */}
          <div className="flex flex-col w-full mb-12">
            {/* Project one */}
            <FeaturedProjectCard
              title={"Portfolio site"}
              status={"Currently surfing on"}
              description={`dynamic Portfolio website designed using Next js. 
               it utilises react components and Tailwind code.`}
              float={`right-0`}
              flexDirection={`flex-col lg:flex-row-reverse`}
              imgWidth={"1366"}
              imgHeight={"666"}
              imgSrc={"/projects/colorhub.png"}
              liveLink={""}
              repoLink={null}
              stack={
                <>
                  <Icon
                    IconType={Html}
                    title="HTML"
                    columnSizing={"w-auto"}
                    width={"w-6"}
                    height={"h-6"}
                    flexDirection={"flex-row"}
                    padding={"p-0"}
                    titleMargins={"my-0 ml-1"}
                    titleSize={"text-sm"}
                    marginBottom={"mb-4"}
                    marginRight={"mr-3"}
                    textTransform={"uppercase"}
                    fixedHeight={"h-auto"}
                  />

                  <Icon
                    IconType={Tailwind}
                    title="Tailwind"
                    columnSizing={"w-auto"}
                    width={"w-6"}
                    height={"h-6"}
                    flexDirection={"flex-row"}
                    padding={"p-0"}
                    titleMargins={"my-0 ml-1"}
                    titleSize={"text-sm"}
                    marginBottom={"mb-4"}
                    marginRight={"mr-3"}
                    textTransform={"uppercase"}
                    fixedHeight={"h-auto"}
                  />

                  <Icon
                    IconType={ReactJs}
                    title="React"
                    columnSizing={"w-auto"}
                    width={"w-6"}
                    height={"h-6"}
                    flexDirection={"flex-row"}
                    padding={"p-0"}
                    titleMargins={"my-0 ml-1"}
                    titleSize={"text-sm"}
                    marginBottom={"mb-4"}
                    marginRight={"mr-3"}
                    textTransform={"uppercase"}
                    fixedHeight={"h-auto"}
                  />

                  <Icon
                    IconType={NextJs}
                    title="Next"
                    columnSizing={"w-auto"}
                    width={"w-6"}
                    height={"h-6"}
                    flexDirection={"flex-row"}
                    padding={"p-0"}
                    titleMargins={"my-0 ml-1"}
                    titleSize={"text-sm"}
                    marginBottom={"mb-4"}
                    marginRight={"mr-3"}
                    textTransform={"uppercase"}
                    fixedHeight={"h-auto"}
                  />
                </>
              }
            />
          </div>

          {/* Other Projects header */}
          <h2 className="text-4xl text-center">Other Projects</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 mx-auto border-0"></hr>
          <p className="mb-16 text-lg text-center">
            Check out some of the projects I&apos;ve been a part of...
          </p>

          {/* Other Projects Container */}
          <div className="grid grid-flow-row grid-rows-2 gap-4 grid-col-1 lg:grid-cols-3">
            {projects.map(function (project, i) {
              return <ProjectCard project={project} key={i} />;
            })}
          </div>
        </section>

        {/* Connect with me */}

        {/* Contact */}
        <section
          className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
          id="contact"
          ref={contactRef}
        >
          <h2 className="text-5xl">Contact</h2>
          <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          <div className="flex flex-col-reverse w-full md:flex-row">
            <div className="w-full mb-4 md:pl-0 md:mb-0">
              <p className="text-lg">
                I&apos;m currently available to get involved in new projects, so
                get in touch if you&apos;d like to work together.
              </p>
              <p className="text-lg">
                Simply email me at{" "}
                <Link href="mailto:divyanshpal300@outlook.com">
                  <a className="underline-link">divyanshpal300@outlook.com</a>
                </Link>{" "}
                and let&apos;s talk about your project!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col w-full px-0 py-16 md:px-20 lg:px-24 section">
          <hr className="w-full h-1 mb-16 bg-white border-0 opacity-10"></hr>
          <div className="w-8 mb-4">
            <svg
              id="abbe8588-8b21-44fd-a605-eb7de7f82941"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.13 75.2"
            >
              <path
                className="opacity-50 fill-current text-light"
                d="M24.05,38.51,7.5,55.06a4.39,4.39,0,1,1-6.21-6.21L14.74,35.41,1.29,22A4.39,4.39,0,0,1,7.5,15.75L24.05,32.3A4.4,4.4,0,0,1,24.05,38.51Z"
              />
              <path
                className="opacity-50 fill-current text-light"
                d="M91.85,55.06a4.38,4.38,0,0,1-6.21,0L69.09,38.51a4.4,4.4,0,0,1,0-6.21L85.64,15.75A4.39,4.39,0,0,1,91.85,22L78.41,35.41,91.85,48.85A4.4,4.4,0,0,1,91.85,55.06Z"
              />
              <rect
                className="opacity-50 fill-current text-light"
                x="41.93"
                y="-1.17"
                width="8.78"
                height="77.54"
                rx="4.39"
                transform="translate(11.31 -10.71) rotate(15)"
              />
            </svg>
          </div>

          <div className="flex flex-col items-start md:flex-row">
            <p className="w-auto mb-4 md:mb-0">
              Designed and built by Divyansh Pal 2021
            </p>

            <div className="flex md:hidden">
              <span className="mr-2">
                <GitHubProfile marginBottom={"mb-0"} />
              </span>
              <span className="mr-2">
                <TwitterProfile marginBottom={"mb-0"} />
              </span>
              <span className="mr-2">
                <LinkedInProfile marginBottom={"mb-0"} />
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* Fixed Container */}
      <div className="fixed bottom-0 z-30 w-full">
        <div className="container relative flex h-full mx-auto">
          {/* Profile Icons */}
          <div className="absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col">
            <GitHubProfile marginBottom={"mb-4"} />
            <TwitterProfile marginBottom={"mb-4"} />
            <LinkedInProfile marginBottom={"mb-4"} />
            <div className="w-0.5 bg-white h-24 opacity-20 mt-2"></div>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-0 items-center hidden mt-auto ml-auto text-white right-8 md:flex md:flex-col">
            {/* Hero - Diamond 1 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(homeRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${visibleSection === "home"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                  }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${visibleSection === "home"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                    }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${visibleSection === "home"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                    }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* About - Diamond 2 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(aboutRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${visibleSection === "about"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                  }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${visibleSection === "about"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                    }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${visibleSection === "about"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                    }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* Skills - Diamond 3 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(skillsRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${visibleSection === "skills"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                  }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${visibleSection === "skills"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                    }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${visibleSection === "skills"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                    }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* My Work - Diamond 4 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(myWorkRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${visibleSection === "my-work"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                  }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${visibleSection === "my-work"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                    }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${visibleSection === "my-work"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                    }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>
            {/* Contact - Diamond 5 */}
            <button
              className="w-5 h-5 mb-4"
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              <svg
                id="e5c888e5-3206-4553-8f53-60ee93248ad9"
                className={`group rounded-sm transform  transition duration-500 ease-in-out hover:rotate-45 hover:scale-110 ${visibleSection === "contact"
                    ? "rotate-45 scale-110"
                    : "rotate-0 scale-100"
                  }`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0
              0 24 24"
              >
                {/* Fill */}
                <path
                  className={`fill-current origin-center transform transition duration-200 ease-in-out group-hover:text-dark group-hover:rotate-90 ${visibleSection === "contact"
                      ? "text-white rotate-90"
                      : "text-dark rotate-0"
                    }`}
                  d="M5.64 5.64h12.73v12.73H5.64z"
                />
                {/* Border */}
                <path
                  className={`fill-current origin-center transform transition duration-500 ease-in-out group-hover:text-white group-hover:rotate-45 group-hover:opacity-100 ${visibleSection === "contact"
                      ? "text-white rotate-45 opacity-100"
                      : "text-white rotate-45 opacity-40"
                    }`}
                  d="M12 22.41L1.59 12 12 1.59 22.41 12zM4.41 12L12 19.59 19.59 12 12 4.41z"
                />
              </svg>
            </button>

            {/* Line */}
            <div className="w-0.5 bg-white h-24 opacity-20 mt-2 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

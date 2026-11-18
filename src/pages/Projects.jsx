import React from 'react'

import ascomdemo1 from '../assets/images/buttons.gif'
import ascomdemo2 from '../assets/images/keyboard.gif'
import stdemo1 from '../assets/images/SearchDemo.gif'
import stdemo2 from '../assets/images/FilterDemo.gif'
import noteflowdemo from '../assets/images/noteflow_demo.webp'
import hhdemo1 from '../assets/images/GameplayShowcase.gif'
import hhdemo2 from '../assets/images/MenuShowcase.gif'
import iedemo from '../assets/images/Explorer.png'
import geolens1 from '../assets/images/GeoLensLogin.gif'
import geolens2 from '../assets/images/GeoLensDetermination.png'
import windex from '../assets/images/windex_diagram.png'
import raytracer1 from '../assets/images/raytracer_cornell.jpg'
import raytracer2 from '../assets/images/raytracer_spheres.jpg'
import Footer from '../components/Footer'

import Collapsible from '../components/Collapsible'
import ScrollFade from '../components/ScrollFade'
import useIsMobile from '../components/IsMobile'
import {useProjectsState, ProjectsProvider} from '../components/ProjectsContext'

export default function Projects() {
  return (
    <>
      <ProjectsProvider>
        <ProjectLake projectId='12' />
        <ProjectRayTracer projectId='11' />
        <ProjectWindex projectId='10' />
        <ProjectGeoLens projectId='9' />
        <ProjectAccCom projectId='1' />
        <ProjectGAC projectId='2'/>
        <ProjectNoteFlow projectId='3' />
        <ProjectPortfolio projectId='4' />
        <ProjectIslandExplorer projectId='5' />
        <ProjectSpotify projectId='6' />
        <ProjectHellHunter projectId='7' />
        <ProjectMazeSolver projectId='8' />
      </ProjectsProvider>
      <Footer />
    </>
  );
}

function ProjectLake({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/CinqGarcons/Lake" target="_blank">Lake</a>
          <p className="projectSkills">Built With: Rust, Python, ggml</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          A distributed LLM inference engine that pools a user's devices on a local network to <b>privately</b> run large language models too large for any single machine.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              Lake lets you run large language models across a <b>pool of everyday devices</b> on your local network, splitting a model across machines
              so you can privately serve models too big to fit on any single one &mdash; no data ever leaves your hardware.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              Designed with a five-person team to partition transformer models across a heterogeneous device pool, Lake pairs a <b>Rust inference engine</b> built directly on <b>ggml</b> (the tensor library underlying llama.cpp) with a Python coordinator.
              The system dynamically <b>reallocates layers</b> as devices join or leave the network, and serves multiple requests concurrently across the whole cluster.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              I led the project's <b>high-level system design</b> and built its Rust runtime components (the inference engine and Tensor I/O),
              in addition to its multi-language developer tooling (just, uv, Cargo) and CI pipeline.
            </p>
          </ScrollFade>
        </div>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectRayTracer({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();
  const isMobile = useIsMobile();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/raytracer" target="_blank">Ray Tracer</a>
          <p className="projectSkills">Built With: Rust</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          A <b>Monte Carlo path tracing</b> renderer written from scratch in Rust.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              A physically-based renderer written in Rust from the ground up, following the three-book <i>Ray Tracing in One Weekend</i> series,
              with several additions of my own: <b>GGX micro-facet scattering</b>, a <b>bounding volume hierarchy</b> for fast ray intersection,
              and <b>multi-threaded rendering</b>.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              The renderer supports a range of materials (Lambertian, metal, dielectric, emissive, and GGX rough metal), geometric primitives
              (spheres, quads, boxes, and moving objects), and <b>Perlin noise</b>, solid, and image-based textures. A bounding volume hierarchy
              keeps ray&ndash;scene intersection near logarithmic, while a work-stealing thread pool renders tiles in parallel for fast, physically-based images.
            </p>
          </ScrollFade>
        </div>
        <ScrollFade>
          <div className="imgPanel" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <img className="displayImage" src={raytracer1} alt="Fancy Cornell box rendered with the path tracer" style={{maxHeight: '31vh', maxWidth: isMobile ? '90vw' : '40vw'}}/>
            <img className="displayImage" src={raytracer2} alt="Field of textured spheres rendered with the path tracer" style={{maxHeight: '31vh', maxWidth: isMobile ? '90vw' : '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectWindex({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/WikiSearch" target="_blank">WikiSearch</a>
          <p className="projectSkills">Built With: golang, redis, mongodb</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          2.9 <b>Billion</b> Words.<br/>
          My own home-grown search engine, that indexes all of Wikipedia.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p>
              2.9 Billion. That's the number of words WikiSearch indexes. (2 966 203 491 to be exact)<br/>
              WikiSearch is a high-performance search and indexing engine written in golang.<br/>
              WikiSearch is broken up into three stages, data collection, data processing, and data presentation.<br/>
              Data collection is performed via wxcrawler if you wish to crawl the Wikipedia site for page data, but alternatively,
              you can use wxunpacker to read data from Wikipedia's own xml dumps instead, for a much faster and more ethical approach.<br/>
              Data processing is handled by wxindexer, which calcuates per-page term frequency, corpus term-frequency, both used to
              calcuate Term Frequency-Inverse Document Frequency (TF-IDF) scores, which are ultimately used by the search engine.<br/>
              wxindexer also calculates PageRank scores, which are combined with TF-IDF scores in wxdb to provide search
              results to the user in the data presentation phase.
            </p>
          </ScrollFade>
        </div>
        <div className="projectPoints">
          <ScrollFade>
            Some extra technical details:
            <ul>
              <li>All three stages are separate processes, using UNIX sockets for IPC.</li>
              <li>Corpus TF encodings are stored in Redis, and per-page TF encodings are stored in a long .jsonl file.</li>
              <li>
                PageRank score is calculated by building a directed graph of all of Wikipedia, with edges as page references and nodes as pages.
                Each node is initialized with a starting score, then an algorithm iteratively traverses the graph, transferring score between nodes.
                This traversal is repeated until the total change in score across the graph is below a threshold.
              </li>
              <li>Mongodb stores the highest scoring pages for each term in the corpus, in order of PageRank score. User queries are broken into these terms to find search results.</li>
            </ul>
          </ScrollFade>
        </div>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={windex} alt="Data Flow Diagram for WikiIndex" style={{maxHeight: '52vh', maxWidth: '90vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectGeoLens({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/GeoLensExpo" target="_blank">GeoLens</a>
          <p className="projectSkills">Built With: React-Native, Expo, TypeScript, Firebase</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Find a place, anywhere in the world, only based on image data.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              GeoLens aims to allow users to find the origin location of an image without any additional context. Behind a clean, react-native front end,
              it uses a Blackboard architecture style to consolidate the results of various methods, ranging from <a href="https://github.com/shokiami/GeoKnowr" target="_blank">GeoKnowr</a>
              , an AI trained on <a href="https://en.wikipedia.org/wiki/GeoGuessr" target="_blank">GeoGuessr</a> data, to specific landmark recognition.
            </p>
          </ScrollFade>
        </div>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={geolens1} alt="Buttons in Accessibility Communicator" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
            <img className="displayImage" src={geolens2} alt="Keyboard in Accessibility Communicator" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectGAC({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/git-auto-commiter" target="_blank">GAC (git-auto-committer)</a>
          <p className="projectSkills">Built With: Python, gevent, rpm, dpkg</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Powerful, automated, repository management. Hidden behind a simple <b>CLI</b>.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              Available for <b>Fedora</b> systems as an <b>RPM package</b>, and for <b>Debian</b> (and derivatives) as a <b>DEB package</b>.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              Students around the world use Git to manage academic projects, where frequent commits are often required
              to maintain academic integrity. git-auto-commiter (GAC) is a CLI tool created by students, for students,
              to promote transparency throughout the academic process. GAC automates the creation of consistent, traceable,
              and reliable commits at scheduled intervals, allowing students to focus on their work without manual interruptions.
              By automatically committing on behalf of the user, GAC provides a clear record of project progress over time.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              GAC gives students peace of mind, knowing they don’t need to worry about frequent manual commits, while
              instructors benefit from a detailed history of the students' work, readily available for review. With the
              ability to track multiple repositories simultaneously each with their own commit schedule, GAC can handle all
              your projects at once, while only making new commits on the repositories that actually have changes.
            </p>
          </ScrollFade>
        </div>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectAccCom({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/accessibility-communicator" target="_blank">ClearSignal</a>
          <p className="projectSkills">Built With: Python, kivy</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Making communication more accessible for those in their <b>greatest time of need</b>.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <div className="projectDesc">
          <ScrollFade>
            <p className="projectDescFirstLine">
              During a routine surgery, my aunt suffered a severe stroke, leaving her unable to speak or communicate effectively
              during the initial stages of her recovery. During a visit, I recognized an opportunity to leverage my skills to create a
              solution that could help her express both basic needs and complex ideas. Within a week, while managing my academic
              responsibilities, I developed ClearSignal— a redistributable application packaged as an executable file (EXE) and deployed on her laptop.
            </p>
          </ScrollFade>
          <ScrollFade>
            <p>
              ClearSignal leverages a compact keypad with three distinctively textured keys to interface with its system. These keys
              correspond to three customizable actions (defaulted to "Yes," "No," and "Custom") and provide access to a virtual keyboard
              for typing. The application offers full customization of colors and text through an easily editable INI file, ensuring adaptability
              to individual user preferences and needs.
            </p>
          </ScrollFade>
        </div>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={ascomdemo1} alt="Buttons in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
            <img className="displayImage" src={ascomdemo2} alt="Keyboard in Accessibility Communicator" style={{maxHeight: '25vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectNoteFlow({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/McMasterAI/NoteFlow" target="_blank">NoteFlow</a>
          <p className="projectSkills">Built With: Python, spaCy, TextRank Algorithm, open source transformer models</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Intelligent, offline, text summarization. Created as a part of McMaster AI Society; presented at CUCAI 2024.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="projectDesc">
            <p className="projectDescFirstLine">
              NoteFlow was my brain-child during my time as Team Lead at McMaster AI Society. It is an <b>entirely offline</b> text
              summarizer targeted at students in order to help create personal notes, cheat sheets, and parse through textbooks.
              The primary differentiating factor for NoteFlow was its ability to run entirely offline, which gives it <b>unparalleled
              reliability</b> when a connection is uncertain, and total data privacy as <b>no data ever leaves your device.</b>
            </p>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={noteflowdemo} alt="Summary demo using NoteFlow" style={{maxHeight: '33vh', maxWidth: '90vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectPortfolio({ projectId }) {
  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href="https://github.com/MFactor1/portfolio" target="_blank">Portfolio (This one!)</a>
          <p className="projectSkills">Built With: JavaScript, React.JS, framer-motion, HTML/CSS</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            Showcasing my experience, projects, and skills.
          </p>
        </div>
      </ScrollFade>
    </>
  );
}

function ProjectSpotify({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;
  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <p className="projectTitleNoLink">Spotify Tools</p>
          <p className="projectSkills">Built With: Python, kivy, Spotify API</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <p className="projectSummary">
          Automated playlist creation with search and filters.
        </p>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="projectDesc">
            <p className="projectDescFirstLine">
              Spotify Playlist Tools is an integration with the Spotify API written in Python using the Kivy GUI library.
              It allows users to automate playlist creation for their favorite artists, while having the option to filter out
              potentially unwanted types of songs.
            </p>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={stdemo1} alt="Demo of search function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
            <img className="displayImage" src={stdemo2} alt="Demo of filter function in Spotify Tools" style={{maxHeight: '52vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectHellHunter({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <p className="projectTitleNoLink">Hell's Hunters</p>
          <p className="projectSkills">Built With: Python, pyglet</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            A simplistic, highscore-based, 2D arcade-style game. Highschool CS Project.
          </p>
        </div>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={hhdemo2} alt="Demo of menu in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
            <img className="displayImage" src={hhdemo1} alt="Demo of gameplay in Hell's Hunters" style={{maxHeight: '31vh', maxWidth: '40vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectIslandExplorer({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href='https://github.com/2AA4-W24/a2-rescue-mission-team-103' target='_blank'>Island Explorer</a>
          <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            An automated rescue drone built in Java that searches an island for survivors, developed in a simulation with randomly generated islands.
          </p>
        </div>
      </ScrollFade>
      <Collapsible isExpanded={isExpanded}>
        <ScrollFade>
          <div className="imgPanel">
            <img className="displayImage" src={iedemo} alt="Map exporation performed by Island Explorer" style={{maxHeight: '40vh', maxWidth: '90vw'}}/>
          </div>
        </ScrollFade>
      </Collapsible>
      <ScrollFade>
        <span className="showMore" onClick={() => toggleProject(projectId)}>
          {isExpanded ? 'Show Less' : '-> Show More'}
        </span>
      </ScrollFade>
    </>
  );
}

function ProjectMazeSolver({ projectId }) {
  const { expandedProject, toggleProject } = useProjectsState();

  const isExpanded = expandedProject === projectId;

  return (
    <>
      <ScrollFade>
        <header className="projectHeader">
          <a className="projectTitle" href='https://github.com/2AA4-W24/a3-maze-runner-take-two-MFactor1' target='_blank'>Maze Solver</a>
          <p className="projectSkills">Built With: Java, JUnit, Maven, Sonarqube</p>
        </header>
      </ScrollFade>
      <ScrollFade>
        <div className="projectDesc">
          <p>
            An automated maze solver built in Java with the choice between a graph-based DFS algorithm, and a primitive right-hand algorithm.
          </p>
        </div>
      </ScrollFade>
    </>
  );
}

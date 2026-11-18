import React from 'react'

import Footer from '../components/Footer'

import ScrollFade from '../components/ScrollFade'

export default function Skills() {
  return (
    <>
      <div>
        <ScrollFade>
          <p className='skillsTitle'>
            What we're working with:
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Languages:</i></b> Rust, Go, Python, Java, TypeScript/JavaScript, C/C++, Bash, SQL, HTML/CSS, LaTeX, MATLAB.
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Frameworks/Libraries:</i></b> PyTorch, TensorRT, ONNX, CUDA, NumPy, ggml, llama.cpp, React.JS, Expo, framer-motion, kivy, OpenCV, spaCy, Node.JS, JUnit, pytest.
          </p>
        </ScrollFade>
        <ScrollFade>
          <p className='skillItem'>
            <b><i>Tools:</i></b> git, vim, Linux, Docker, Jenkins, CI/CD, Jira, Azure, GCS, Amazon S3, HTTP, REST, Make, rpm, dpkg, UML, Sonarqube.
          </p>
        </ScrollFade>
      </div>
      <Footer />
    </>
  );
}

import React from 'react'

import pfp from '../assets/images/WebsitePfp.png'

import Footer from '../components/Footer'

import useIsMobile from '../components/IsMobile'
import ScrollFade from '../components/ScrollFade'

export default function Home() {
  const isMobile = useIsMobile();

	return (
		<>
      <ScrollFade>
        <div className="homeimage" style={{marginTop: isMobile ? "0px" : "40px"}}>
          <img src={pfp} alt="Portrait" style={{maxHeight: '25vh', maxWidth: '60vw', display: "block", marginLeft: isMobile ? "auto" : "0px", marginRight: "auto"}}/>
        </div>
      </ScrollFade>
      <div className="bio" style={{ maxWidth: isMobile ? '100vw' : '50vw' }}>
        <ScrollFade><p>Hi! I’m Matthew, a fourth-year Software Engineering student at McMaster University with a drive to <b>build</b>.</p></ScrollFade>
        <ScrollFade><p>I <i>thrive</i> in environments where potocols are <i>optional</i>, oversight is <i>minimal</i>, and prototyping fast is a <i>top priority</i>.</p></ScrollFade>
        <ScrollFade><p>Right now I'm focused on:</p></ScrollFade>
        <ul>
          <ScrollFade><li>Building and shipping the first major AI features to our customers at Evertz.</li></ScrollFade>
          <ScrollFade><li>Rapidly iterating to create a real-time computer vision inference engine that beats alternatives like Ultralytics.</li></ScrollFade>
          <ScrollFade><li>Building and deploying robust internal tools to train AI models in a large-scale scientific, reproducible manner.</li></ScrollFade>
        </ul>
			</div>
      <Footer />
		</>
	);
}

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
        <ScrollFade><p>Hi! I’m Matthew, a final-year Software Engineering student at McMaster University with a drive to <b>build</b>.</p></ScrollFade>
        <ScrollFade><p>I <i>thrive</i> in environments where protocols are <i>optional</i>, oversight is <i>minimal</i>, and prototyping fast is a <i>top priority</i>.</p></ScrollFade>
        <ScrollFade><p>Right now I'm focused on:</p></ScrollFade>
        <ul>
          <ScrollFade><li>Building <b>Lake</b>, a distributed LLM inference engine that pools your devices on a local network to <b>privately</b> run large language models too large for any single machine.</li></ScrollFade>
          <ScrollFade><li>Leading Lake's system design, and building its Rust inference engine and runtime directly on ggml.</li></ScrollFade>
          <ScrollFade><li>Finishing my Software Engineering degree at McMaster, graduating in 2027.</li></ScrollFade>
        </ul>
        <ScrollFade><p>Open-source contributions:</p></ScrollFade>
        <ul>
          <ScrollFade><li><a href="https://github.com/jellydator/ttlcache" target="_blank">jellydator/ttlcache</a></li></ScrollFade>
        </ul>
			</div>
      <Footer />
		</>
	);
}

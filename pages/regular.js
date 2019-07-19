import { useState, useRef } from "react";
import Layout from "../components/Layout";
import ContactForm from '../components/ContactForm';

function Regular () {

  const [videoShowing, setVideoShowing] = useState(false);
  const [showForm, setShowForm] = useState(true);
  
  const showVideo = () => {
    setVideoShowing(true);
  }

  const useScroll = () => {
    const ref = useRef(null);
    const executeScroll = () => {
        window.scrollTo(0, ref.current.offsetTop);
    }
    const htmlElementAttributes = {ref};
    return [executeScroll, htmlElementAttributes]
  }

  const [executeScroll, scrollHtmlAttributes] = useScroll();

  return (
    <Layout headerTrigger={260} >
      <section className="regular">
        <section className="product-jumbo">
          <h1>Regular Site</h1>
          <a href="#form" onClick={executeScroll} className="basic-button link-button">
            Get Your Website Now!
          </a>
        </section>
        <section className="product-overview-container eighty">
          <section className="product-text">
            <p>
              Harmistice brings together two of the community’s leading lights:
              Tehran’s Siavash Amini and the Paris-based duo 9T Antiope. Amini’s
              work often flits between chamber instrumentation, sumptuous dark
              ambient, and head-splitting noise.
            </p>
          </section>
          <section className="product-text">
            <p>
              Harmistice brings together two of the community’s leading lights:
              Tehran’s Siavash Amini and the Paris-based duo 9T Antiope. Amini’s
              work often flits between chamber instrumentation, sumptuous dark
              ambient, and Hopefully this sentence looks legit as filler.
            </p>
          </section>
        </section>
        <section className="product-overview-container eighty">
          <section className="product-overview-image">
            <img
              className="display-overlap-A"
              src="static/webdevscreen1.jpg"
              alt="filler image"
            />
          </section>
          <section className="product-overview-image">
            <img
              className="display-overlap-B"
              src="static/ecommerce-image.jpg"
              alt="filler image"
            />
          </section>
        </section>
        <section className="video-background">
          <video loop autoPlay muted playsInline onCanPlayThrough={()=>{showVideo()}} className={videoShowing ? 'show' : 'hide'}>
            <source src="static/vscodeVideo(compressed).mp4" type="video/mp4" />
          </video>
          <h3 className="upgrade">Upgrade Upon The Base Options</h3>
        </section>
        <section className="form-container">
          <h2>Contact us</h2>
          {showForm && 
            <section {...scrollHtmlAttributes}>
              <ContactForm selection={"simple"} setShowForm={setShowForm} />
            </section>
          }
          {!showForm && <h2>Thanks for getting in touch {name.value}, we'll be in contact shortly!</h2>}
        </section>
      </section>
      <style jsx>{`
        .regular {
          font-family: var(--main-font);
          color: var(--main-text-colour);
        }
        .regular .product-jumbo {
          background-color: #0c0b0c;
        }
        .video-background {
          background: url("static/vscodevideo.jpg");
          background-repeat: no-repeat;
          background-position: center; 
          background-size: 100vw 500px;
          position: relative;
          overflow: hidden;
          height: 350px;
          text-align: center;
        }
        .video-background .downward-arrow {
          border-radius: 50%;
          transition: box-shadow 0.5s;
          box-shadow: 0px 0px 0px 0px #484782;
          background: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .video-background .downward-arrow:hover {
          box-shadow: 0px 0px 15px 5px #484782;
        }
        .video-background video {
          display: block;
          width: 100%;
          transform: scale(1.8);
        }
        .temporary-video-image {
          width: 100%;
        }
        .downward-arrow {
          z-index: 2;
        }
        video.show {
          display: block;
        }
        video.hide {
          display: none;
        }
        .form-container {
          padding: var(--section-padding);
          text-align: center;
          color: var(--main-text-colour);
        }
        .upgrade {
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          font-size: 2rem;
        }
      `}</style>
    </Layout>
  );
}

export default Regular;

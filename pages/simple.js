import { useState, useRef } from "react";
import Layout from "../components/Layout";
import useInputValue from "../components/hooks/useInputValue.js";

function Simple() {
  const name = useInputValue("");
  const phone = useInputValue("");
  const email = useInputValue("");
  const notes = useInputValue("");
  const [videoShowing, setVideoShowing] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      notes: notes.value
    };

    setShowForm(false);
  };
  
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
    <Layout>
      <section className="simple">
        <section className="product-jumbo">
          <h1>Simple Site</h1>
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
          <img className="downward-arrow" src="static/downward.png" alt="downward arrow" onClick={executeScroll} />
        </section>
        <section className="form-container">
          <h2>Contact us</h2>
          {showForm &&  
            <form {...scrollHtmlAttributes} onSubmit={handleFormSubmit}>
              <label htmlFor="name" >Name</label>
              <input className="text-input" type="text" name="name" {...name} />
              <label htmlFor="phone">Phone</label>
              <input className="text-input" type="text" name="phone" {...phone} />
              <label htmlFor="email">Email</label>
              <input className="text-input" type="text" title="email" {...email}/>
              <label htmlFor="notes">Notes</label>
              <input className="text-input" type="textarea" title="notes" {...notes} />
              <input className="basic-button submit-button" type="submit" value="Submit" />
            </form>
          }
          {!showForm && <h2>Thanks for getting in touch {name.value}, we'll be in contact shortly!</h2>}
        </section>
      </section>
      <style jsx>{`
        .simple {
          font-family: var(--main-font);
          color: var(--main-text-colour);
        }
        .simple .product-jumbo {
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
        form {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }
        form input {
          width: 80%;
          border: white solid 3px;
          min-height: 1.75rem;
          border-radius: var(--soft-radius);
          font-size: 22px;
          font-color: white;
        }
        .text-input {
          background-color: #ecb4e500;
          margin: 10px;
        }
        label {
          display: block;
        }
        .submit-button {
          display: block;
          margin: 20px auto;
          background-color: var(--positive-green);
        }
      `}</style>
    </Layout>
  );
}

export default Simple;

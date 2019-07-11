const HowItWorks = () => (
  <section className="how-it-works">
    <section className="how-it-works-top">
      <section className="how-text">
        <h1>How it works</h1>
        <h3>We will guide you through a process that allows decisions to be made quickly and easily, with clear understanding of how we can best create your site.</h3>
      </section>
      <section className="how-image">
        <img src="static/ecommerce-image.jpg" alt="filler image"/>
      </section>
      </section>
      <section className="eighty">
        <p>Composer and producer Anna Meredith has announced her new album FIBS. The album arrives October 25 via Black Prince Fury. The album features the song “Paramour,” which arrives today. Check out the video for the single below.
          In a statement, Meredith describes fibs as “lies—but nice friendly lies, little stories and constructions and daydreams and narratives that you make for yourself or you tell yourself.</p>
      </section>
    <style jsx>{`
      .how-it-works {
        padding: var(--section-padding);
        font-family: var(--main-font);
      }
      .how-it-works-top {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .how-it-works-top h1 {
        font-size: 2rem;
        text-align:center;
      }
      .how-text {
        margin-left: 150px;
        padding: 25px;
        text-align: right;
      }
      .how-image {
        text-align: left;
      }
      .how-image img {
        width: 400px;
      }
    `}</style>
  </section>
);

export default HowItWorks;
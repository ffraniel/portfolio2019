const HeadingImageBlock = () => {
  return (
    <section className="heading-image-block">
      <section className="heading-image-block--image">
        <h2>Snicket Eggs</h2>
        <img
          src="static/small-snickets-front.jpg"
          alt="Snicket Eggs Website, full design of front page"
        />
      </section>
      <section className="heading-image-block--text">
        <p>
          A clean beautiful design as well as a heavy focus on performance means that
          a site with large images, and regularly updated content on the News page can 
          run smoothly on laptops and mobile devices.   
{/* 
          Al this info, , Hermione Farthingale, and John Hutchinson, a guitarist
          from his former band. Bowie auditioned for plays, crafted a cabaret
          act, joined a UFO spotting group, performed mime, got bit parts in
          films and commercials—a typical late-1960s creative experience. But
          his primary goal was another record deal, and he was running out of
          options. Philips/Mercury was one of his last shots—most other major UK
          labels. */}
        </p>
      </section>

      <style jsx>{`
        .heading-image-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 80%;
          margin: 0 auto;
          padding: var(--section-padding);
          font-family: var(--main-font);
          border: solid 2px black;
        }
        .heading-image-block--text {
        }
        .heading-image-block--text p {
          padding: 10px 80px;
        }
        .heading-image-block--image h2 {
          position: absolute;
          transform: translate(150px, 180px);
          background: #756affc7;
          color: #fcac91;
          border-radius: var(--very-soft-radius);
          padding: 5px 10px;
          font-size: 2.5rem;

        }
        .heading-image-block--image {
          margin: 0 auto;
        }
        .heading-image-block--image img {
          height: 400px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default HeadingImageBlock;

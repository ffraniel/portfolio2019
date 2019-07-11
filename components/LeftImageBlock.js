const LeftImageBlock = () => {
  return (
    <section className="image-block left-image-block">
      <section>
        <img
          src="static/webdevscreen1.jpg"
          alt="website being written in HTML and Javascript"
        />
      </section>
      <section>
        <p>this is the other text, and it says more about me than it does you</p>
      </section>

      <style jsx>{`
        .image-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: var(--section-padding);

        }
        .image-block section {
          text-align: center;
          display: grid;
          justify-self: center;
          align-content: center;
        }
        .image-block section img {
          height: 350px;
        }
      `}</style>
    </section>
  );
}

export default LeftImageBlock;

const RightImageBlock = () => {
  return (
    <section className="image-block Right-image-block">
      <section>
        <p>
          this is the other text, and it says more about me than it does you
        </p>
      </section>
      <section>
        <img
          src="static/webdevscreen1.jpg"
          alt="website being written in HTML and Javascript"
        />
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
};

export default RightImageBlock;

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
          font-family: var(--main-font);

        }
        .image-block section {
          text-align: center;
          display: grid;
          justify-self: center;
          align-content: center;
        }
        .image-block section img {
          height: 350px;
          transform: translate(120px, 0);
          border-radius: var(--very-soft-radius);
          border: none;
        }
        .image-block section p {
          transform: translate(-120px, 0);
          background-color: white;
          box-shadow: var(--shadow-large);
          padding: 40px 50px;
          border-radius: var(--very-soft-radius);
        }
      `}</style>
    </section>
  );
}

export default LeftImageBlock;

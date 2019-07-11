const KeyDetails = () => (
  <section className="details">
    <section className="details-box">
      <h3>section heading</h3>
      <img src="https://img.icons8.com/windows/96/000000/web-design.png" alt="icon"></img>
      <p>More supporting text and the details herein</p>
    </section>
    <section className="details-box">
      <h3>section heading</h3>
      <img src="https://img.icons8.com/windows/96/000000/web-design.png" alt="icon"></img>
      <p>More supporting text yet different seperate points of note and interest</p>
    </section>
    <section className="details-box">
      <h3>section heading</h3>
      <img src="https://img.icons8.com/windows/96/000000/web-design.png" alt="icon"></img>
      <p>More supporting text, i qwish i had used loren impsen here, or however it is spelt</p>
    </section>
    <section className="details-box">
      <h3>section heading</h3>
      <img src="https://img.icons8.com/windows/96/000000/web-design.png" alt="icon"></img>
      <p>More supporting text, i am totally out of bespoke filler text</p>
    </section>
    <style jsx>{`
      .details {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        width: 85%;
        margin: 0 auto;
        padding: var(--section-padding);
      }
      .details-box {
        text-align: center;
        box-shadow: var(--shadow-medium);
        border-radius: var(--soft-radius);
        padding: 5px 25px;
      }
    `}</style>
  </section>
);


export default KeyDetails;
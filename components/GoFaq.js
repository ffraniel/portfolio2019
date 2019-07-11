import Link from 'next/link';

const GoFaq = () => {
  return (
    <section className="go-faq">
      <h2>Any more questions?</h2>
      <h3>Visit our Faq for more infomation</h3>
      <Link href={"/faq"} as={"/faq"}>
        <button className="basic-button">FAQ</button>
      </Link>
      <style jsx>{`
        .go-faq {
          padding: var(--section-padding);
          text-align: center;
          background-color: var(--alt-background-colour);
          color: var(--alt-text-colour);
          font-family: var(--main-font);
        }

      `}</style>
    </section>
  );
};

export default GoFaq;

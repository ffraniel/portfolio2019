import Link from 'next/link';

const CTA = () => {
  return (
    <section className="CTA">
      <h1>Choose your base website now</h1>
      <Link href={"/products"} as={"/products"}>
        <button className="basic-button">See Options</button>
      </Link>
      <style jsx>{`
        .CTA {
          padding: var(--section-padding);
          text-align: center;
        }

      `}</style>
    </section>
  );
};

export default CTA;

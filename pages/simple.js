import Layout from '../components/Layout';
import Link from 'next/link';

function Simple () {
  return (
    <Layout>
      <section className="simple">
        <section className="product-jumbo">
          <h1>Simple</h1>
          
        </section>
      </section>
      <style jsx>{`
        .simple {
          font-family: var(--main-font);
          color: var(--main-text-colour);
        }
       `}</style>
    </Layout>
  );
};

export default Simple;
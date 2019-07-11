import Layout from '../components/Layout';
import Link from 'next/link';

function Mighty () {
  return (
    <Layout>
      <section className="mighty">
        <h1>Mighty</h1>
      </section>
      <style jsx>{`
        .mighty {
          font-family: var(--main-font);
          color: var(--main-text-colour);
        }
       `}</style>
    </Layout>
  );
};

export default Mighty;
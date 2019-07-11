import Layout from '../components/Layout';
import Link from 'next/link';

function Regular () {
  return (
    <Layout>
      <section className="regular">
        <h1>Regular</h1>
      </section>
      <style jsx>{`
        .regular {
          font-family: var(--main-font);
          color: var(--main-text-colour);
        }
       `}</style>
    </Layout>
  );
};

export default Regular;
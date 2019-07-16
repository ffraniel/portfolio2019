import Layout from '../components/Layout';
import CTA from '../components/CTA';

function Faq () {
  return (
    <Layout>
      <section className="faq">
        {/* <h1>Faq</h1> */}
        <h3>Work in Progress</h3>
      </section>
      <CTA />
      <style jsx>{`
      .faq {
        padding: var(--section-padding);
        font-family: var(--main-font);
        color: var(--main-text-colour);
      }
       .faq h1 {
        text-align: center;
       }
       `}</style>
    </Layout>
  );
};

export default Faq
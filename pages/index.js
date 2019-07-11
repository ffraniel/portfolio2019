import Layout from '../components/Layout.js';
import Jumbo from '../components/Jumbo';
import Table from '../components/Table';
import KeyDetails from '../components/KeyDetails';

function Index () {
  return (
    <Layout>
      <main className="home">
        <Jumbo />
        <KeyDetails />
        <section className="image-block">
          <section>
            <img src="static/webdevscreen1.jpg" alt="website being written in HTML and Javascript"></img>
          </section>
          <section>
            <p>this is the other text, and it says more about me than it does you</p>
          </section>
        </section>
        <Table />
      </main>
      <style jsx>{`
        .home {
          color: var(--main-text-colour);
        }
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
    </Layout>
  );
};

export default Index;
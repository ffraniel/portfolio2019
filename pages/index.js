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
        <Table />
      </main>
      <style jsx>{`
        .home {
          color: var(--main-text-colour);
        }
      `}</style>
    </Layout>
  );
};

export default Index;
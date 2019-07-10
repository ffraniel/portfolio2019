import Layout from '../components/Layout.js';
import Jumbo from '../components/Jumbo';
import Table from '../components/Table';

function Index () {
  return (
    <Layout>
      <main className="home">
        <Jumbo />
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
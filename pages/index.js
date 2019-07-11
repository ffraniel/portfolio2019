import Layout from '../components/Layout.js';
import Jumbo from '../components/Jumbo';
import Table from '../components/Table';
import KeyDetails from '../components/KeyDetails';
import LeftImageBlock from '../components/LeftImageBlock';
import HeadingImageBlock from '../components/HeadingImageBlock';
import GoFaq from '../components/GoFaq';

function Index () {
  return (
    <Layout>
      <main className="home">
        <Jumbo />
        <KeyDetails />
        <LeftImageBlock />
        <Table />
        <GoFaq />
        <HeadingImageBlock />
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
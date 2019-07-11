import Layout from '../components/Layout.js';
import Jumbo from '../components/Jumbo';
import Table from '../components/Table';
import KeyDetails from '../components/KeyDetails';
import LeftImageBlock from '../components/LeftImageBlock';
import HeadingImageBlock from '../components/HeadingImageBlock';
import GoFaq from '../components/GoFaq';
import CTA from '../components/CTA';

function Index () {
  return (
    <Layout>
      <main className="home">
        <Jumbo />
        <KeyDetails />
        <LeftImageBlock />
        <Table />
        <HeadingImageBlock />
        <GoFaq />
        <CTA />
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
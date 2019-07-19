import Layout from '../components/Layout.js';
import Jumbo from '../components/Jumbo';
import TableThree from '../components/TableThree';
import KeyDetails from '../components/KeyDetails';
import LeftImageBlock from '../components/LeftImageBlock';
import HeadingImageBlock from '../components/HeadingImageBlock';
import GoFaq from '../components/GoFaq';
import CTA from '../components/CTA';

function Index () {

  return (
    <Layout headerTrigger={500}>
      <main className="home">
        <Jumbo />
        <KeyDetails />
        <LeftImageBlock />
        <TableThree />
        <HeadingImageBlock />
        {/* <GoFaq /> */}
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
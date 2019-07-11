import Layout from '../components/Layout';
import HowItWorks from '../components/HowItWorks';
import WhyThisProcess from '../components/WhyThisProcess';

function Process() {
  return (
    <Layout>
      <main className="process">
        <HowItWorks />
        <WhyThisProcess />
      </main>
      <style jsx>{``}</style>
    </Layout>
  );
};

export default Process;
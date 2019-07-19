import Layout from '../components/Layout';
import TableThree from '../components/TableThree';
import ProductsHeadline from '../components/ProductsHeadline';
import Ecommerce from '../components/Ecommerce';
import Wordpress from '../components/Wordpress';
import CTA from '../components/CTA';
import Retainers from '../components/Retainers';

function Products() {
  return (
    <Layout headerTrigger={0} >
      <ProductsHeadline />
      <TableThree />
      <Retainers />
      <Ecommerce />
      <Wordpress />
      <CTA />      
      <style jsx>{``}</style>
    </Layout>
  );
};

export default Products;
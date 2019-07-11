import Layout from '../components/Layout';
import Table from '../components/Table';
import ProductsHeadline from '../components/ProductsHeadline';
import Ecommerce from '../components/Ecommerce';
import Wordpress from '../components/Wordpress';
import CTA from '../components/CTA';

function Products() {
  return (
    <Layout>
      <ProductsHeadline />
      <Table />
      <Ecommerce />
      <Wordpress />
      <CTA />      
      <style jsx>{``}</style>
    </Layout>
  );
};

export default Products;
import Layout from '../components/Layout';
import Table from '../components/Table';
import ProductsHeadline from '../components/ProductsHeadline';
import Ecommerce from '../components/Ecommerce';

function Products() {
  return (
    <Layout>
      <ProductsHeadline />
      <Table />
      <Ecommerce />
      <style jsx>{``}</style>
    </Layout>
  );
};

export default Products;
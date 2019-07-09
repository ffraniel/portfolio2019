const Table = () => (
  <section className="table">
    <h1>section 1</h1>
    <h1>section 2</h1>
    <h1>section 3</h1>
    <style jsx>{`
    .table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .table h1 {
      border: solid 2px red;
    }
      `}</style>
  </section>
);

export default Table;
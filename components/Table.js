const Table = () => (
  <section className="table">
    <h1>section 1</h1>
    <h1>section 2</h1>
    <h1>section 3</h1>
    <style jsx>{`
    .table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 80%;
      margin: 0 auto;
      grid-gap: 10px;
    }
    .table h1 {
      box-shadow: var(--shadow-medium);
      color: var(--main-text-colour);
    }
      `}</style>
  </section>
);

export default Table;
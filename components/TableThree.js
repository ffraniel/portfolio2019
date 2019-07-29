import Link from 'next/link';

const TableThree = () => (
  <section>
    <section className="mobile-table">
      <h1 className="table-mob-title">Choose Your Plan</h1>
      <section className="mobile-product-box">
        <h3 className="mob-title">Simple</h3>
        <h6 className="mob-price">Starting from £400</h6>
        <section className="mob-details-box">
          <h6>1 - 5 Pages</h6>
          <h6>Template-based Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £30 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring - £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions PostLaunch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/simple" as="/simple">
              <button className="basic-button button-spacer">Choose Simple</button>
            </Link>
          </section>
        </section>
      </section>
      <section className="mobile-product-box">
        <h3 className="mob-title">Regular</h3>
        <h6 className="mob-price">Starting from £700</h6>
        <section className="mob-details-box">
          <h6>6 - 10 Pages</h6>
          <h6>Bespoke Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £60 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring - £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions Post Launch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/regular" as="/regular">
              <button className="basic-button button-spacer">Choose Regular</button>
            </Link>
          </section>
        </section>
      </section>
      <section className="mobile-product-box">
        <h3 className="mob-title">Mighty</h3>
        <h6 className="mob-price">Starting from £1000</h6>
        <section className="mob-details-box">
          <h6>11+ Pages</h6>
          <h6>Bespoke Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £60 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring - £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions Post Launch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/mighty" as="/mighty">
              <button className="basic-button button-spacer">Choose Mighty</button>
            </Link>
          </section>
        </section>
      </section>
    </section>
    
    <section className="info-block">
      <section className="info-segment">
        <h3 className="info-heading">Design</h3>
        <p>Design is about more than what looks cool, it's the user experience (UX) and whether your users finds your site intuitive to use. You can leave this entirely to us or be involved.</p>
      </section>
      <section className="info-segment">
        <h3 className="info-heading">SEO</h3>
        <p>Search Engine Optimisation - so your site appears high in Google search results. We would never release your site into the wild without implementing SEO best practices throughout.</p>
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Social Media Integration</h3>
        <p>Per Integration</p>
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Monitoring</h3>
        <p>Keep up to date with how much traffic you are recieving</p>
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Monitoring</h3>
        <p>Keep up to date with how much traffic you are recieving</p>
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Bug Fixes</h3>
        <p>Always: in web development there will always be bugs. We use a system of services to watch for any errors the human eye may miss in order to maintain quality throughout.</p> 
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Revisions Post-Launch</h3>
        <p>For updates to content, design changes or to help you achieve your SEO goals.</p> 
      </section>
      <section className="info-segment">
        <h3 className="info-heading">Retainers Available</h3>
        <p>Ultimately you need to be happy with the website you receive. If you need further work after these hours are used we have a retainer service available.</p> 
      </section>
    </section>

    <style jsx>{`
      .mobile-link-container {
        text-align: center;
      }
      .mobile-table {
        display: block;
        color: var(--main-text-colour);
        font-family: var(--secondary-font);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: 90%;
        margin: 0 auto;
      }
      .table-mob-title {
        grid-column: 1 /-1;
        text-align: center;
        font-size: 2rem;
        font-family: var(--main-font);
      }
      .mobile-product-box {
        // border: solid #bfa1a1c9 1px;
        box-shadow: var(--shadow-medium);
        border-radius: var(--soft-radius);
        padding: 20px 20px;
      }
      .mob-title {
        text-align: center;
        font-size: 1.75rem;
        font-family: var(--main-font);
      }
      .mob-price {
        text-align: center;
        font-size: 1rem;
      }
      .mob-details-box {
        text-align: center;
        font-size: 1.25rem;
      }
      h6 {
        font-size: 1rem;
      }

    .info-block {
      padding: var(--half-section-padding);
      text-align: center;
    }

    .info-segment {
      border-bottom: 0.05px solid var(--main-text-colour);
      width: 75%;
      margin: 0 auto;
    }
    .info-heading {
      font-family: var(--main-font);
    }

    .info-segment p {
      font-family: var(--secondary-font);
    }

    @media screen and (max-width: 980px) {
      .mobile-table {
        grid-template-columns: 1fr;
      }
      .mobile-product-box {
        min-width: 600px;
        padding: 5px 20px;
      }

    }

    @media screen and (max-width: 720px) {
      .mobile-product-box {
        min-width: 400px;
        padding: 5px 20px;
      }

    }

    @media screen and (max-width: 480px) {
      .mobile-product-box {
        width: 85%;
        padding: 2.5px 5px;
        min-width: 300px;
      }
    `}</style>
  </section>
);

export default TableThree;
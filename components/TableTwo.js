import Link from 'next/link';

const TableTwo = () => (
  <section>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Simple</th>
          <th>Regular</th>
          <th>Mighty</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <caption>Pages</caption>
          <td>1-5</td>
          <td>6-10</td>
          <td>10+</td>
          <td className="details"></td>
        </tr>
        <tr>
          <caption>Designs</caption>
          <td>-</td>
          <td>Bespoke Designs</td>
          <td>Bespoke Designs</td>
          <td className="details">Design is about more than what looks cool, it's the user experience (UX) and whether your users finds your site intuitive to use. You can leave this entirely to us or be involved.</td>
        </tr>
        <tr>
          <caption>SEO</caption>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td className="details">Search Engine Optimisation - so your site appears high in Google search results. We would never release your site into the wild without implementing SEO best practices throughout.</td>
        </tr>
        <tr>
          <caption>Managed Hosting</caption>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td className="details"></td>
        </tr>
        <tr>
          <caption>Hosting Maintenance</caption>
          <td>£30 p/month</td>
          <td>£60 p/month</td>
          <td>£60 p/month</td>
          <td className="details"></td>
        </tr>
        <tr>
          <caption>Social Media Integration (Twitter, Instagram etc.)</caption>
          <td>£50</td>
          <td>£50</td>
          <td>£50</td>
          <td className="details">Per Integration</td>
        </tr>
        <tr>
          <caption>Monitoring</caption>
          <td>£40 p/month</td>
          <td>£40 p/month</td>
          <td>£40 p/month</td>
          <td className="details">Keep up to date with how much traffic you are receiving.</td>
        </tr>
        <tr>
          <caption>Bug Fixes</caption>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td><img src="static/tick.png" alt="tick" /></td>
          <td className="details">Always: in web development there will always be bugs. We use a system of services to watch for any errors the human eye may miss in order to maintain quality throughout.</td>
        </tr>
        <tr>
          <caption>Revisions Post Launch</caption>
          <td>4 hours of revisions free</td>
          <td>4 hours of revisions free</td>
          <td>4 hours of revisions free</td>
          <td className="details">For updates to content, design changes or to help you achieve your SEO goals.</td>
        </tr>
        <tr>
          <caption>Retainer</caption>
          <td>Available</td>
          <td>Available</td>
          <td>Available</td>
          <td className="details">Ultimately you need to be happy with the website you receive. If you need further work after these hours are used we have a retainer service available.</td>
        </tr>
      </tbody>
    </table>
  <style jsx>{`
  table, th, td, caption {
    border: solid black 2px;
    width: 100%;
  }
  th {

  }
  caption {

  }
  .details {

  }

  `}</style>
  </section>
);

export default TableTwo;
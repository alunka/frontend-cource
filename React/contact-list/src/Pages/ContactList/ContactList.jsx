import "./ContactList.css";

const ContactList = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-4" style={{ padding: "15px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Categories</h5>
              <div className="card-text">
                <ul>
                  <li
                    id="category_family"
                    style={{
                      backgroundColor: "#47bed3",
                    }}
                    className="categories-list-items"
                  >
                    Family<span className="pull-right category-counter">0</span>
                  </li>
                  <li
                    id="category_work"
                    style={{
                      backgroundColor: "#119243",
                    }}
                    className="categories-list-items"
                  >
                    Work<span className="pull-right category-counter">0</span>
                  </li>
                  <li
                    id="category_private"
                    style={{
                      backgroundColor: "#ecbc37",
                    }}
                    className="categories-list-items"
                  >
                    Private
                    <span className="pull-right category-counter">0</span>
                  </li>
                  <li
                    id="category_friends"
                    style={{
                      backgroundColor: "#ec5468",
                    }}
                    className="categories-list-items"
                  >
                    Friends
                    <span className="pull-right category-counter">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8" style={{ padding: "15px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Table</h5>
              <table>
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alla Jakimckuk</td>
                    <td>
                      <a href="mailto: allayakimchyk.1990@gmail.com">
                        allayakimchyk.1990@gmail.com
                      </a>
                    </td>
                    <td>
                      <a href="tel: +380971234567">+380971234567</a>
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>
                      <a href="mailto: info@gmail.com">info@gmail.com</a>
                    </td>
                    <td>
                      <a href="tel: +180971234567">+180971234567</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;

import "./ContactList.css";
import ContactItem from "../../Components/ContactItem/cc";

// Icons
import { FcConferenceCall, FcBullish } from "react-icons/fc";

const ContactList = () => {
  let savedData = localStorage.getItem("itstep_react_contacts_list");

  if (savedData === null) {
    savedData = {};
  } else {
    savedData = JSON.parse(savedData);
  }

  let menCount = 0;
  let womenCount = 0;
  let familyCount = 0;
  let friendsCount = 0;
  let privateCount = 0;
  let workCount = 0;
  let favoriteCount = 0;

  for (let id in savedData) {
    if (savedData[id].gender === "man") {
      menCount++;
    } else if (savedData[id].gender === "woman") {
      womenCount++;
    }

    if (savedData[id].favorite) {
      favoriteCount++;
    }

    switch (savedData[id].status) {
      case "friends":
        friendsCount++;
        break;
      case "private":
        privateCount++;
        break;
      case "work":
        workCount++;
        break;
      case "family":
        familyCount++;
        break;
      default:
    }
  }

  return (
    <>
      <div
        className="row"
        style={{ marginLeft: "0", marginTop: "0", marginRight: "0" }}
      >
        <div className="col-lg-3 col-md-3" style={{ padding: "15px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Categories&nbsp;
                <FcBullish />
              </h5>
              <div className="card-text">
                <ul>
                  <li
                    id="category_family"
                    style={{
                      backgroundColor: "#47bed3",
                    }}
                    className="categories-list-items"
                  >
                    Family
                    <span className="pull-right category-counter">
                      {familyCount}
                    </span>
                  </li>
                  <li
                    id="category_work"
                    style={{
                      backgroundColor: "#119243",
                    }}
                    className="categories-list-items"
                  >
                    Work
                    <span className="pull-right category-counter">
                      {workCount}
                    </span>
                  </li>
                  <li
                    id="category_private"
                    style={{
                      backgroundColor: "#ecbc37",
                    }}
                    className="categories-list-items"
                  >
                    Private
                    <span className="pull-right category-counter">
                      {privateCount}
                    </span>
                  </li>
                  <li
                    id="category_friends"
                    style={{
                      backgroundColor: "#ec5468",
                    }}
                    className="categories-list-items"
                  >
                    Friends
                    <span className="pull-right category-counter">
                      {friendsCount}
                    </span>
                  </li>
                </ul>
                <p>
                  Men: <span id="men_counter">{menCount}</span>
                  <br />
                  Women: <span id="women_counter">{womenCount}</span>
                  <br />
                  Favorite: <span id="favourite_counter">{favoriteCount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9" style={{ padding: "15px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Contacts&nbsp;
                <FcConferenceCall />
              </h5>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead className="text-center">
                    <tr>
                      <th>Avatar</th>
                      <th>Full name</th>
                      <th>E-mail</th>
                      <th>Phone</th>
                      <th>Favorite</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(savedData).map((id) => (
                      <ContactItem
                        id={id}
                        avatar={savedData[id].avatar}
                        name={savedData[id].name}
                        email={savedData[id].email}
                        phone={savedData[id].phone}
                        favorite={savedData[id].favorite}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;

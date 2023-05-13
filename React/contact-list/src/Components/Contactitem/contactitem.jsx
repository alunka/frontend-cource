import "./contactitem.css";
// Icons
import {
  FcApproval,
  FcMinus,
  FcViewDetails,
  FcDeleteColumn,
} from "react-icons/fc";

const ContactItem = (props) => {
  const deleteItem = () => {
    if (window.confirm("Are you sure?")) {
      let savedData = localStorage.getItem("itstep_react_contacts_list");
      if (savedData === null) {
        savedData = {};
      } else {
        savedData = JSON.parse(savedData);
      }

      if (savedData.hasOwnProperty(props.id)) {
        delete savedData[props.id];
        localStorage.setItem(
          "itstep_react_contacts_list",
          JSON.stringify(savedData)
        );
        document.getElementById(props.id).remove();
      } else {
        alert("Contact not found");
      }
    }
  };
  return (
    <tr id={props.id}>
      <td className="text-center">
        <img height="50" src={props.avatar} alt="avatar" />
      </td>
      <td>{props.name}</td>
      <td>
        <a href={"mailto: " + props.email}>{props.email}</a>
      </td>
      <td>
        <a href={"tel: " + props.phone}>{props.phone}</a>
      </td>
      <td className="text-center">
        {props.favorite ? (
          <FcApproval title="Yes it is favourite contact" size="2em" />
        ) : (
          <FcMinus title="Simple contact" size="2em" />
        )}
      </td>
      <td className="text-center">
        <a title="Edit" href={"/update-contact?id=" + props.id}>
          <FcViewDetails size="2em" />
        </a>
        &nbsp;&nbsp;
        <span title="Delete" style={{ cursor: "pointer" }} onClick={deleteItem}>
          <FcDeleteColumn size="2em" />
        </span>
      </td>
    </tr>
  );
};
export default ContactItem;

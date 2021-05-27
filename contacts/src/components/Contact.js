import { useState } from "react";

const Contact = ({ deleteClickHandler, contact: { name, email, phone } }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const showOnClick = (e) => {
    setShowContactInfo(!showContactInfo);
  };

  const onDeleteClick = () => {
    deleteClickHandler();
  };
  return (
    <div className="card card-body mb-3">
      <h4>
        {name}{" "}
        <i
          onClick={showOnClick}
          className="fas fa-sort-down"
          style={{ cursor: "pointer" }}
        ></i>
        <i
          onClick={() => onDeleteClick()}
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
        ></i>
      </h4>
      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;

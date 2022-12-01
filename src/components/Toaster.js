import React from "react";
import PropTypes from "prop-types";
import "./Toaster.css";

const Toaster = (props) => {
  const { toasts, position, deleteToast } = props;

  return (
    <>
      <div>Hello</div>
      <div className={`notification-container ${position}`}>
        {toasts.map((toast, i) => (
          <div
            key={i}
            className={`notification toast show ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Toaster.propTypes = {
  toasts: PropTypes.array.isRequired,
  position: PropTypes.string,
  deleteToast: PropTypes.func,
};

export default Toaster;

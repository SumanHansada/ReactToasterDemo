import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Toaster from "./components/Toaster";
import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";

const buttons = [
  {
    id: 1,
    type: "success",
    className: "success",
    label: "Success",
  },
  {
    id: 2,
    type: "danger",
    className: "danger",
    label: "Danger",
  },
  {
    id: 3,
    type: "info",
    className: "info",
    label: "Info",
  },
  {
    id: 4,
    type: "warning",
    className: "warning",
    label: "Warning",
  },
];

const App = () => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("Select Position");
  let [autoDismiss, setAutoDismiss] = useState(false);
  const [autoDismissTime, setAutoDismissTime] = useState(0);
  let toastProperties = null;

  const selectPosition = (e) => {
    setPosition(e.target.value);
    setToasts([]);
  };

  const deleteToast = useCallback(
    (id) => {
      const toastsItem = toasts.findIndex((e) => e.id === id);
      toasts.splice(toastsItem, 1);
      setToasts([...toasts]);
    },
    [toasts]
  );

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);

    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
          icon: checkIcon,
        };
        break;
      case "danger":
        toastProperties = {
          id,
          title: "Danger",
          description: "This is a error toast component",
          backgroundColor: "#d9534f",
          icon: errorIcon,
        };
        break;
      case "info":
        toastProperties = {
          id,
          title: "Info",
          description: "This is an info toast component",
          backgroundColor: "#5bc0de",
          icon: infoIcon,
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
          icon: warningIcon,
        };
        break;

      default:
        setToasts([]);
    }

    setToasts([...toasts, toastProperties]);
  };

  const toggleAutoDismiss = () => {
    autoDismiss = !autoDismiss;
    setAutoDismiss(autoDismiss);
    setToasts([]);
  };

  const changeAutoDismissTime = (e) => {
    const time = parseInt(e.target.value, 10);
    setAutoDismissTime(time);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (autoDismiss && toasts.length) {
        deleteToast(toasts[0].id);
      }
    }, autoDismissTime);
    return () => {
      clearTimeout(interval);
    };
  }, [autoDismiss, autoDismissTime, toasts, deleteToast]);

  return (
    <div className="app">
      <div className="app-header">
        <p>React Toaster Component</p>
        <p>Built with JavaScript!</p>
        <div className="toast-buttons">
          {buttons.map((e) => (
            <button
              key={e.id}
              className={`${
                position === "Select Position"
                  ? `btn ${e.className} btn-disable`
                  : `btn ${e.className}`
              }`}
              onClick={() => showToast(e.type)}
            >
              {e.label}
            </button>
          ))}
        </div>

        <div className="select">
          <input
            id="auto"
            type="checkbox"
            name="checkbox"
            value={autoDismiss}
            onChange={toggleAutoDismiss}
          />
          <label htmlFor="auto">Auto Dismiss</label>
        </div>
        <div className="select">
          <input
            className={`${!autoDismiss ? "disabled" : ""}`}
            type="text"
            name="checkbox"
            placeholder="Dismiss time Ex: 3000"
            autoComplete="false"
            onChange={changeAutoDismissTime}
          />
        </div>
        <div className="select">
          <select
            name="position"
            title="position"
            onChange={selectPosition}
            className="position-select"
          >
            <option> Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
      </div>

      <Toaster toasts={toasts} position={position} deleteToast={deleteToast} />
    </div>
  );
};

export default App;

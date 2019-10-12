import React from "react"
import layoutStyles from "./contactstyles/Modal.module.scss"

//TODO create a background div that contains all these divs so user can't access part of page until modal is closed
const Modal = props => {
  const styles = {
    height: "5rem",
    margin: "2rem",
  }

  if (props.status === "success" && props.modalCase === "show") {
    return (
      <div className={layoutStyles.modal__container}>
        <div className={layoutStyles.sent}>
          <figure style={styles}>
            <img
              style={{ width: "100%" }}
              src={
                "https://res.cloudinary.com/snackmanproductions/image/upload/v1570237318/consurgointl/conlogo_yixikm.jpg"
              }
              alt="Logo"
            />
          </figure>
          <h2 style={{ "font-size": "4em" }}>
            Thank you! your message has been sent, and someone will be in
            contact with you soon.
          </h2>
          <button className={layoutStyles.button} onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    )
  } else if (props.status === "error" && props.modalCase === "show") {
    return (
      <div className={layoutStyles.modal__container}>
        <div className={layoutStyles.error}>
          <figure style={styles}>
            <img
              style={{ width: "100%" }}
              src={
                "https://res.cloudinary.com/snackmanproductions/image/upload/v1570237318/consurgointl/conlogo_yixikm.jpg"
              }
              alt="Consurgo International Logo"
            />
          </figure>
          <h2 style={{ "font-size": "4em" }}>{props.response}.</h2>
          <h2 style={{ "font-size": "2em" }}>
            Please retry sending the email.
          </h2>
          <button className={layoutStyles.button} onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    )
  } else if (props.modalCase === "hidden") {
    return <div className={layoutStyles.closed} />
  } else {
    return <div className={layoutStyles.closed} />
  }
}

export default Modal

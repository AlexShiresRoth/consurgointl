import React from "react"
import axios from "axios"
import { IconContext } from "react-icons"
import { FaEnvelopeOpen, FaAddressCard } from "react-icons/fa"
import layoutStyles from "./contactstyles/Contact.module.scss"

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: "",
      openModal: null,
    }
    this.formSubmit = this.formSubmit.bind(this)
  }
  handleInputs = event => {
    if (event.target.value === "") {
      this.setState({ [event.target.name]: null })
    }
    this.setState({
      [event.target.name]: [event.target.value],
    })
  }

  formSubmit = async e => {
    e.preventDefault()

    const info = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }

    const corsAnywhere = "https://cors-anywhere.herokuapp.com/"

    return await axios({
      method: "POST",
      url: `${corsAnywhere}https://asrserver.herokuapp.com/api/consurgointl/send-email?&email=${info.email}&name=${info.name}&phone=${info.phone}&message=${info.message}`,
      data: {
        headers: {
          "Access-Control-Allow-Origin": "https://consurgointl.com",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    })
      .then(res => {
        this.setState({
          name: "",
          email: "",
          message: "",
          sent: "success",
          openModal: "show",
          response: res,
        })
        alert(res.data.msg)
      })
      .catch(err => {
        this.setState({
          sent: "error",
          openModal: "show",
          response: err.message,
        })
        alert(err.message)
      })
  }
  render() {
    return (
      <section className={layoutStyles.contact__section}>
        <form className={layoutStyles.contact__form} onSubmit={this.formSubmit}>
          <div className={layoutStyles.form__column}>
            <label htmlfor="name">Name or Business:</label>
            <div className={layoutStyles.form__row}>
              <IconContext.Provider
                value={{ className: `${layoutStyles.icon__box}` }}
              >
                <FaAddressCard />
              </IconContext.Provider>
              <input
                type="text"
                name="name"
                placeholder="Name or Business"
                value={this.state.name}
                onChange={e => this.handleInputs(e)}
                required
              ></input>
            </div>
          </div>
          <div className={layoutStyles.form__column}>
            <label htmlfor="email">Email:</label>
            <div className={layoutStyles.form__row}>
              <IconContext.Provider
                value={{ className: `${layoutStyles.icon__box}` }}
              >
                <FaEnvelopeOpen />
              </IconContext.Provider>
              <input
                type="email"
                name="email"
                placeholder="Please Enter Your Email"
                value={this.state.email}
                onChange={e => this.handleInputs(e)}
                required
              ></input>
            </div>
          </div>
          <div className={layoutStyles.form__column}>
            <label htmlfor="message">Enter your message:</label>
            <textarea
              type="text"
              name="message"
              rows="10"
              placeholder="Message"
              value={this.state.message}
              onChange={e => this.handleInputs(e)}
              required
            ></textarea>
          </div>
          <div className={layoutStyles.form__column}>
            <button
              className={layoutStyles.submit__button}
              onSubmit={this.formSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}

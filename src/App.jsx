import "./App.css";
import { Component } from "react";

function Input(props) {
  return (
    <div className="divin">
      <h1>Hi, give us your phone number</h1>
      <h2>This only works for MTN numbers.</h2>
      <h2>
        If you are not sure of the service provider for your number, still fill it in, we would
        let you know.
      </h2>
      <form>
        <label htmlFor="phone">Enter your number</label>
        <input type="tel" name="" id="phone" onChange={props.onChange} />
        <p>{props.update}</p>
      </form>
    </div>
  );
}

// (\+234|234)(0[7-9](0)|[7-9](0))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { update: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const ttf = /^\+234/;
    const ttfz = /(^\+234)0/;
    const ttfmtn = /(^\+2340)(803|806|814|810|813|814|816|703|706|903|906)/;
    const ttf9mobile = /(^\+2340)(809|817|818|908|909)/;
    const ttfairtel = /(^\+2340)(802|808|812|708|701|902|901|907)/;
    const ttfglo = /(^\+2340)(805|807|811|815|705|905)/;

    const ttfnum = /(^\+234)[7-9]/;
    const ttfnummtn = /(^\+234)(803|806|814|810|813|814|816|703|706|903|906)/;
    const ttfnum9mobile = /(^\+234)(809|817|818|908|909)/;
    const ttfnumairtel = /(^\+234)(802|808|812|708|701|902|901|907)/;
    const ttfnumglo = /(^\+234)(805|807|811|815|705|905)/;

    const noplus = /^234/;

    const noplusz = /(^234)0/;
    const nopluszmtn = /(^2340)(803|806|814|810|813|814|816|703|706|903|906)/;
    const noplusz9mobile = /(^2340)(809|817|818|908|909)/;
    const nopluszairtel = /(^2340)(802|808|812|708|701|902|901|907)/;
    const nopluszglo = /(^2340)(805|807|811|815|705|905)/;

    const noplusnum = /(^234)[7-9]/;
    const noplusnummtn = /(^234)(803|806|814|810|813|814|816|703|706|903|906)/;
    const noplusnum9mobile = /(^234)(809|817|818|908|909)/;
    const noplusnumairtel = /(^234)(802|808|812|708|701|902|901|907)/;
    const noplusnumglo = /(^234)(805|807|811|815|705|905)/;

    const zero = /^0/;
    const zeromtn = /(^0)(803|806|814|810|813|814|816|703|706|903|906)/;
    const zero9mobile = /(^0)(809|817|818|908|909)/;
    const zeroairtel = /(^0)(802|808|812|708|701|902|901|907)/;
    const zeroglo = /(^0)(805|807|811|815|705|905)/;

    const value = e.target.value;
    console.log(value);
    if (ttf.test(value)) {
      if (ttfz.test(value)) {
        if (ttfmtn.test(value)) {
          this.setState({ update: "This is an MTN number: VALID" });
        } else if (ttf9mobile.test(value)) {
          this.setState({ update: "This is a 9mobile number: Not Valid" });
        } else if (ttfairtel.test(value)) {
          this.setState({ update: "This is an Airtel number: Not Valid" });
        } else if (ttfglo.test(value)) {
          this.setState({ update: "This is a Glo number: Not Valid" });
        } else {
          this.setState({ update: "" });
        }
      } else if (ttfnum.test(value)) {
        if (ttfnummtn.test(value)) {
          this.setState({ update: "This is an MTN number: VALID" });
        } else if (ttfnum9mobile.test(value)) {
          this.setState({ update: "This is a 9mobile number: Not Valid" });
        } else if (ttfnumairtel.test(value)) {
          this.setState({ update: "This is an Airtel number: Not Valid" });
        } else if (ttfnumglo.test(value)) {
          this.setState({ update: "This is a Glo number: Not Valid" });
        } else {
          this.setState({ update: "" });
        }
      }
    } else if (noplus.test(value)) {
      if (noplusz.test(value)) {
        if (nopluszmtn.test(value)) {
          this.setState({ update: "This is an MTN number: VALID" });
        } else if (noplusz9mobile.test(value)) {
          this.setState({ update: "This is a 9mobile number: Not Valid" });
        } else if (nopluszairtel.test(value)) {
          this.setState({ update: "This is an Airtel number: Not Valid" });
        } else if (nopluszglo.test(value)) {
          this.setState({ update: "This is a Glo number: Not Valid" });
        } else {
          this.setState({ update: "" });
        }
      } else if (noplusnum.test(value)) {
        if (noplusnummtn.test(value)) {
          this.setState({ update: "This is an MTN number: VALID" });
        } else if (noplusnum9mobile.test(value)) {
          this.setState({ update: "This is a 9mobile number: Not Valid" });
        } else if (noplusnumairtel.test(value)) {
          this.setState({ update: "This is an Airtel number: Not Valid" });
        } else if (noplusnumglo.test(value)) {
          this.setState({ update: "This is a Glo number: Not Valid" });
        } else {
          this.setState({ update: "" });
        }
      }
    } else if (zero.test(value)) {
      if (zeromtn.test(value)) {
        this.setState({ update: "This is an MTN number: VALID" });
      } else if (zero9mobile.test(value)) {
        this.setState({ update: "This is a 9mobile number: Not Valid" });
      } else if (zeroairtel.test(value)) {
        this.setState({ update: "This is an Airtel number: Not Valid" });
      } else if (zeroglo.test(value)) {
        this.setState({ update: "This is a Glo number: Not Valid" });
      } else {
        this.setState({ update: "" });
      }
    } else {
      this.setState({ update: "" });
    }
  }

  render() {
    return (
      <>
        <Input
          onChange={(e) => {
            this.handleChange(e);
          }}
          update={this.state.update}
        />
      </>
    );
  }
}

export default App;

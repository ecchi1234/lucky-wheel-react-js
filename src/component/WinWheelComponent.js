/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./WinWheel.css";
import { WinWheelService } from "./WinWheelServices";

export const WinWheelComponent = () => {
  const winWheelService = React.useRef(null);
  const winWheelContainer = React.useRef(null);
  React.useEffect(() => {
    if (winWheelContainer.current) {
      winWheelService.current = new WinWheelService();
    }
  }, []);
  return (
    <div align="center">
      <h1>Winwheel.js example wheel - basic code wheel</h1>
      <p>
        Here is an example of a basic code drawn wheel which spins to a stop
        with the prize won alerted to the user.
      </p>
      <br />
      <p>
        Choose a power setting then press the Spin button. You will be alerted
        to the prize won when the spinning stops.
      </p>
      <br />
      <table cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td>
            <div className="power_controls">
              <br />
              <br />
              <table className="power" cellPadding="10" cellSpacing="0">
                <tr>
                  <th align="center">Power</th>
                </tr>
                <tr>
                  <td
                    width="78"
                    align="center"
                    id="pw3"
                    onClick={() => winWheelService.current.powerSelected(3)}
                  >
                    High
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    id="pw2"
                    onClick={() => winWheelService.current.powerSelected(2)}
                  >
                    Med
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    id="pw1"
                    onClick={() => winWheelService.current.powerSelected(1)}
                  >
                    Low
                  </td>
                </tr>
              </table>
              <br />
              <img
                id="spin_button"
                src={require("./spin_off.png").default}
                alt="Spin"
                onClick={() => winWheelService.current.startSpin()}
              />
              <br />
              <br />
              &nbsp;&nbsp;
              <a href="#" onClick={() => winWheelService.current.resetWheel()}>
                Play Again
              </a>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(reset)
            </div>
          </td>
          <td
            width="438"
            height="582"
            className="the_wheel"
            align="center"
            valign="center"
          >
            <canvas
              id="canvas"
              width="434"
              height="434"
              ref={winWheelContainer}
            >
              <p style={{ color: "white" }} align="center">
                Sorry, your browser doesn't support canvas. Please try another.
              </p>
            </canvas>
          </td>
        </tr>
      </table>
    </div>
  );
};

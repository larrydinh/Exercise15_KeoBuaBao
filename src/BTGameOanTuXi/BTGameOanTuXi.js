import React, { Component } from "react";
import AI from "./AI";
import Player from "./Player";
import Result from "./Result";
import {connect} from "react-redux"
import "../BTGameOanTuXi/BTGameOanTuXi.css"

class BTGameOanTuXi extends Component {
  render() {
    return (
      <div className="bgGame">
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <Result />
              <div
                className="btn btn-success"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play Game
              </div>
            </div>
            <div className="col-4">
              <AI />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      playGame: () => {
        const action = {
          type: "PLAY_GAME",
        };
        dispatch(action);
      },
      resultGame: () => {
        const action = {
          type: "GAME_RESULT",
        };
      },
    };
  };
  export default connect(null, mapDispatchToProps)(BTGameOanTuXi);
  
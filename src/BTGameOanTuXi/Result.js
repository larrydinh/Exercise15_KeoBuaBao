import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div className="h1">
        <div>
          <span className="text-warning">{this.props.result}</span>
        </div>
        <div>
          <span className="text-success">Số Bàn Thắng: </span>
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div>
          <span className="text-success">Số Bàn Chơi: </span>
          <span className="text-warning"> {this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  result: state.BTGameOanTuXiReducer.result,
  soBanChoi: state.BTGameOanTuXiReducer.soBanChoi,
  soBanThang: state.BTGameOanTuXiReducer.soBanThang,
});
export default connect(mapStateToProps)(Result);

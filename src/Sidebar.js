import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button
              onClick={() => this.props.addAuthor(this.props.newAuthorID)}
            >
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newAuthorID: state.newAuthorID
  };
};

//our reducer communicates with this dispatching function (via connect()), it gets sent a type to switch a spicific function on.
//the dispatching function will return slices of actions (functions) as props to be used in the component.

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: authorID => dispatch(actionCreators.addAuthor(authorID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

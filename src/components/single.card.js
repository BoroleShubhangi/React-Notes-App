import React, { Component } from "react";
import { connect } from "react-redux";


class Cards extends Component {
    

  render() {
       console.log(this.props);
    const postList = this.props.post ? (
      <div style={{ marginTop: "35px" }}>
        <h5>{this.props.post.title}</h5>
        <p>{this.props.post.body}</p>
        <button
          className="btn btn-light"
          onClick={()=>{
            this.props.Delete(this.props.post.id);
            this.props.history.push('/post');
          }}
        >
          Delete Post
        </button>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>Loading Data....</div>
    );
    return (
      <div style={{ textAlign: "center" }}>
        <span>{postList}</span>
      </div>
    );
  }
}
const mapStatetoProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    Delete: (id) => {
      dispatch({type:'DELETE_POST',id:id});
    }
  };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Cards);

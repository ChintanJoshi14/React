// import { connect } from 'formik';
import { connect } from "react-redux";
import "./Home.css";
import React from "react";
import { Navigate, Link } from "react-router-dom";

class Home extends React.Component {

  handleRedirect() {
    this.props.resetData();
    <Navigate to="/signup" />
  }
  render() {
    return (
      <div className="home_flex">
        <div>
        {/*
        checking if the data is available/is logged in or not, 
        if yes, then display data else navigate to signup page.  
        */}
        {this.props.user_name ? 
          <center>
            <div>Name: {this.props.user_name}</div>
            <div>Email: {this.props.user_email}</div>
            <div>Phone: {this.props.user_phone} </div>
            <div>Photo: </div>
            <img src={this.props.user_image} className="uploaded_image_format" />
          </center>
         : 
          <div>
            {alert("Please login first")}
            <Navigate to="/signup" />
          </div>
        }
        </div>

        <div>
          <Link to="/signup">
            <button className="logout_button" onClick={this.handelRedirect}>Logout</button>
          </Link>
          </div>
        

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_image: state.file,
    user_name: state.name,
    user_email: state.email,
    user_phone: state.phone,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetData: () => dispatch({ type: "RESETDATA"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;

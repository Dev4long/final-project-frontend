import './App.css';
import React from 'react';
import ProfileForm from './ProfileForm'



class Profile extends React.Component {

    state= {
        profileForm: false,
    }

        handleProfileForm = () => {
        this.setState({
        profileForm : !this.state.profileForm
        })
        }


  render() {
 
    
    return (
      <div className="profile">
       <h3>{this.props.profile.name}</h3>
       <img alt= 'profile' className = "profileImg"src={this.props.profile.pic}/>
       <h3>Age:{this.props.profile.age}</h3>
       <h3>Email:{this.props.profile.email}</h3>
       <h3>Bio:{this.props.profile.bio}</h3>
       {this.props.profile.id >= 1 ? <button onClick={() => this.handleProfileForm()}>Edit profile</button>:null}
       {this.state.profileForm ? <ProfileForm updateProfile={this.props.updateProfile} profile={this.props.profile}/>:null}
      </div>
    )
  }
}



export default Profile;


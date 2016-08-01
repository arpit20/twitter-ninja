import React from 'react';

export default class Tweet extends React.Component {

	render(){
		
		return (

			<li className="tweet-list-item">
				
				<a href="" className="tweet-list-item-user">
			 		<img src={this.props.user.profileImg} alt="Profile Pic" className="tweet-list-item-user-pic"></img>
			 		<strong className="tweet-list-item-user-name">{this.props.user.name}</strong>
			 		<span className="tweet-list-item-user-id">{this.props.user.userId}</span>
				</a>
			
				<div className="tweet-list-item-text">{this.props.text}</div>
				
			</li>
		)
	}


}
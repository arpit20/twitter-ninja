import React from 'react' ;
import Tweet from './Tweet' ;
import UserModel from '../common/UserModel'




export default class Timeline extends React.Component {



	render(){

		return (
			
			
			<ul className="tweet-list">
				{this.props.tweets.map(function(tweet) {
					
					let userModel = new UserModel(tweet.user);
					return <Tweet user={userModel} text={tweet.text}></Tweet>
					
				})}
			</ul>


		);
	}


} 
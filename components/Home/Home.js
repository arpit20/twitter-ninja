import React from 'react' ;
import Timeline from './Timeline';



export default class Home extends React.Component {


	static get contextTypes(){
		return {
            data: React.PropTypes.object
        };
	}

	constructor(props,context) {
        super(props,context);
        this.state = context.data || {tweets: []};
    }


	render(){
		return (
			
				<Timeline tweets={this.state.tweets}></Timeline>



		);
	}


} 
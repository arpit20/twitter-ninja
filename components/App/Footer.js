import React from 'react'
import TabsMenu from './TabsMenu'

export default class Footer extends React.Component{

	

	render(){

		let tabList=[ 
			{name:"Home",url:"/Home"},
			{name:"Offline",url:"/Offline"},
			{name:"Me",url:"/me"},
			{name:"Rank",url:"/rank"} 
		]
		return (

			<div id="footer">
				<TabsMenu tabList={tabList}></TabsMenu>
			</div>
			
			
		)
	}


}
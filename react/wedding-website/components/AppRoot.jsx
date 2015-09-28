// AppRoot.jsx
import React from 'react';
import CosmicObj from './CosmicObj';
import MediaList from './MediaList';
import Cosmic from 'cosmicjs-browser';
import config from '../config';

class AppRoot extends React.Component {

	constructor(){

		super();

		this.state = {
			data: {}
		}

	}

	componentDidMount(){

		let _this = this;

		Cosmic.getBucket(config, function(err, data){
			
			let objects = data.bucket.objects;
			let media = data.bucket.media;
			
      _this.setState({
				data: {
					objects: objects,
					media: media
				}
			});

		});
	}

	render(){
		
		let objects = this.state.data.objects;
		let media = this.state.data.media;
		let objects_list = '';

		if(objects){
			objects_list = objects.map(function(object){
				return (
					<div>
						<CosmicObj object={ object } />
					</div>
				);
			});
		}

		return (
			<div>
				<h1>Objects</h1>
				{ objects_list }
				<h4>Media</h4>
				<MediaList media={ media }/>
			</div>
		);

	}
}

export default AppRoot;
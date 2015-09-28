// MediaList.jsx
import React from 'react';

class MediaList extends React.Component {

	render(){

		let media_list = '';
		let media = this.props.media;
		if(media){
			media_list = media.map(function(media_object){
				return (
					<div>
						<img src={ media_object.location + '/' + media_object.name } />
					</div>
				);
			});
		}

		return (
			<div>
				{ media_list }
			</div>
		);
	}
}

export default MediaList;
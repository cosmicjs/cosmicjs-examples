// CosmicObj.jsx
import React from 'react';

class CosmicObj extends React.Component {

	render(){

		return (
			<div>
				{ this.props.object.title }
			</div>
		);
	}
}

export default CosmicObj;
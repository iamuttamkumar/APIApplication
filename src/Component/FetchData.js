import React, { Component } from 'react';
import { config } from '../Config/Config';
//import data from '../dummyData/cardData.json'
import { connect } from 'react-redux';

class FetchData extends Component {
	constructor(props) {
		super(props);
		this.state = { test: '' };
	}

	componentDidMount() {
		console.log('fetch', this.props.da);
	}

	render() {
		return <div>hello</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		da: state.proType,
	};
};
export default connect(mapStateToProps)(FetchData);

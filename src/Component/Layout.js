import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';
import appStyle from 'assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx';
import { withStyles } from '@material-ui/styles';

class Layout extends Component {
	static displayName = Layout.name;

	render() {
		const { classes, ...rest } = this.props;

		// 	return (
		// 		<div>
		// 			<div style={{ width: '100%' }}>
		// 				<TopBar />
		// 				<div style={{ width: '100%' }}>{this.props.children}</div>
		// 			</div>
		// 		</div>
		// 	);
		// }
		return (
			<div>
				<NavBar />
				<div>
					<TopBar />

					<div className="Content">
						<Container fluid={true}>{this.props.children}</Container>
					</div>
				</div>
			</div>
		);
	}
}
export default Layout;

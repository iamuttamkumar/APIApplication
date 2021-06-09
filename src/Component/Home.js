import React, { Component } from 'react';
import SimpleCard from './Card/Card';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel/Carousel';
import FormController from './Form Controller/FormController';
import Button from './CustomButtons/Button';
import Checkbox from './Checkbox/CustomCheckbox';
import DateTime from './CustomDatetime/CustomDatetime';
import Dropdown from './Dropdown/Dropdown';
import Input from './CustomInput/CustomInput';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import CustomCard from './Card/CardBody';
import CardHeader from './Card/CardHeader';
import Card from './CustomCard/Card';
import CardIcon from './Card/CardIcon';
import CardText from './Card/CardText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DashboardSlider from '../view/DashboardSlider';
import FormC from '../components/Form Controller/FormController';
import Table from '../components/MuiTable/MuiTable';

//import Dropdown from "./CustomDropdown/CustomDropdown";
import CustomDropdown from './CustomDropdown/CustomDropdown';
import { CardFooter } from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TableCell from '@material-ui/core/TableCell';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 90,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
	},
];

const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typeList: [
				{ mID: 1, mValue: 'Add Face', mType: 'APIName' },
				{ mID: 2, mValue: 'Find Similar ', mType: 'APIName' },
				{ mID: 3, mValue: 'Face Detect', mType: 'APIName' },
			],
		};
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<DashboardSlider />

						<Button id="button-search-partner" color="primary" onClick={() => {}}>
							Theme tester
						</Button>

						<CustomCard>
							<Input
								error={false}
								id={'validation-outlined-input'}
								variant={'outlined'}
								labelText={'Customer ID'}
								defaultValue={'NI075164'}
								required={true}
								formControlProps={{
									fullWidth: true,
								}}
							/>
						</CustomCard>
						<GridContainer lg={12}>
							<GridItem xs={5} sm={3} md={3} lg={1}>
								<Button id="button-search-partner" color="info" round>
									Test Button
								</Button>

								<Checkbox labelText={'Option 1'} />
								<Checkbox labelText={'Option 2'} />
							</GridItem>
						</GridContainer>

						<GridItem xs={12} sm={6} md={6} lg={3}>
							<Card>
								{/* <ContentLoader className="dashboard-icon" >*/}

								<p id="responsive-p" />
								<h3>Pending for registration</h3>

								{/*</ContentLoader >*/}
								<CardFooter stats>
									<div>
										<a>
											<i id="eye" className="fas fa-eye" />
										</a>
									</div>
									Click here to view.
								</CardFooter>
							</Card>
						</GridItem>
						<FormControl component="fieldset">
							<FormLabel component="legend">Update contact details</FormLabel>
							<RadioGroup row aria-label="position" name="position" defaultValue="top">
								<FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
								<FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
							</RadioGroup>

							<Dropdown
								labelText="District"
								required
								lstObject={this.state.typeList}
								formControlProps={{ fullWidth: true }}
							/>
						</FormControl>
						<div style={{ height: 400, width: '100%' }}>
							<DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
						</div>
						<FormC />
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, version, context, provider, type, rating) {
    return { name, version, context, provider, type, rating };
}
const rows = [
    createData('Health-Flexi-Retail', 'v1.0.0', '/Healthflexiretail', 'admin', 'HTTP')
];
export default function ApiDetails() {    
    return (
        <div className={"apiList"}>
            <TableContainer component={Paper}>
                <Table  >
                    <TableHead >
                        <TableRow  >
                            <TableCell style={{fontWeight:'bold'}}>Name</TableCell>
                            <TableCell style={{fontWeight:'bold'}}>Version &nbsp;</TableCell>
                            <TableCell style={{fontWeight:'bold'}}>Context</TableCell>
                            <TableCell style={{fontWeight:'bold'}}>Provider/Business Owner</TableCell>
                            <TableCell style={{fontWeight:'bold'}}>Type</TableCell>
                            <TableCell style={{fontWeight:'bold'}}>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell >{row.version}</TableCell>
                                <TableCell >{row.context}</TableCell>
                                <TableCell >{row.provider}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell >{row.rating}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

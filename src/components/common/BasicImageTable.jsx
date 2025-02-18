import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import testimg from "../../assets/images/management/Rajesh.jpg";
import useImage from './useImage';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily :'Montserrat'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    fontFamily :'Montserrat'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function BasicImageTable(data) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Sr.No.</StyledTableCell>
          <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Designation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.data && data.data.map((row, count) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell >{++count}</StyledTableCell>
            <StyledTableCell >{row.img && <img style={{height:"300px"}} src={useImage(row.img, "management").image}/>}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.designation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

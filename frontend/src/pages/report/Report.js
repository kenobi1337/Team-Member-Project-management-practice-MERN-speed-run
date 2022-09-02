import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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

const Report = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/team-members")
            .then(response => response.json())

            .then(jsonData => {
                let newRows = []
                const memberData = {
                    CompletedHours: "%",
                    ClientName: "Obama",
                    ClientType: "High Volume",
                    MemberName: "John Doe",
                    ProjectName: "Project 1",
                    ProjectType: "Buyer",
                    TeamMembersHours: 0
                }

                console.log(jsonData.data[0])

                for (let i = 0; i < jsonData.data.length; i++) {
                    newRows.push(jsonData.data[i])

                    // memberData.MemberName = jsonData.data[i].MemberName
                    // memberData.CompletedHours = jsonData.data[i].TeamMembersHours / jsonData.data[i].AvailableHours * 100 + "%"
                    // memberData.ClientName = jsonData.data[i].ClientName
                    // memberData.ClientType = jsonData.data[i].ClientType
                    // memberData.ProjectName = jsonData.data[i].ProjectName
                    // memberData.ProjectType = jsonData.data[i].ProjectType
                    // memberData.TeamMembersHours = jsonData.data[i].TeamMembersHours
                }

                setRows(newRows)
            })


    },[])

    // useEffect(async () => {
    //     const newRows = []
    //     const memberData = {
    //         CompletedHours: "%",
    //         ClientName: "Obama",
    //         ClientType: "High Volume",
    //         MemberName: "John Doe",
    //         ProjectName: "Project 1",
    //         ProjectType: "Buyer",
    //         TeamMembersHours: 0
    //     }
    //
    //     const data = await fetch('http://localhost:3001/api/team-members')
    //     const jsonData = await data.json()
    //
    //
    //     for (let i = 0; i < jsonData.data.length; i++) {
    //         memberData.CompletedHours = jsonData.data[i].TeamMembersHours / jsonData.data[i].AvailableHours * 100 + "%"
    //         memberData.ClientName = jsonData.data[i].ClientName
    //         memberData.ClientType = jsonData.data[i].ClientType
    //         memberData.ProjectName = jsonData.data[i].ProjectName
    //         memberData.ProjectType = jsonData.data[i].ProjectType
    //         memberData.TeamMembersHours = jsonData.data[i].TeamMembersHours
    //         newRows.push(memberData)
    //     }
    //
    //     setRows(newRows)
    //
    //
    //
    // }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Team Member Name</StyledTableCell>
                            <StyledTableCell>Project Name</StyledTableCell>
                            <StyledTableCell>Project Type</StyledTableCell>
                            <StyledTableCell>Client Name</StyledTableCell>
                            <StyledTableCell>Client Type</StyledTableCell>
                            <StyledTableCell>Project % Completed</StyledTableCell>
                            <StyledTableCell>Team member hours</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.TeamMembersHours}>
                                <StyledTableCell>{row.MemberName}</StyledTableCell>
                                <StyledTableCell>{row.ProjectName}</StyledTableCell>
                                <StyledTableCell>{row.ProjectType}</StyledTableCell>
                                <StyledTableCell>{row.ClientName}</StyledTableCell>
                                <StyledTableCell>{row.ClientType}</StyledTableCell>
                                <StyledTableCell>{(parseInt(row.TeamMembersHours) / parseInt(row.AvailableHours) * 100).toFixed(2)}%</StyledTableCell>
                                <StyledTableCell>{row.TeamMembersHours}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Report;

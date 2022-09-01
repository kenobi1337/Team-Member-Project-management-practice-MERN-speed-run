import React, { useState } from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
} from "@mui/material";

import { useNavigate } from 'react-router-dom';

const Setup = () => {
    const history = useNavigate()
    const [memberName, setMemberName] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectType, setProjectType] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientType, setClientType] = useState("")
    const [availableHours, setAvailableHours] = useState();
    const [workedHours, setWorkedHours] = useState();

    const handleSubmit = (e) => {
        const body = {
            "MemberName": memberName,
            "ProjectName": projectName,
            "ProjectType": projectType,
            "ClientName": clientName,
            "ClientType": clientType,
            "AvailableHours": availableHours,
            "TeamMembersHours": workedHours
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body })
        };
        fetch('http://localhost:3001/api/team-members', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        history('/report')
    }

    return (
        <div>
            <AppBar>
                <toolbar>
                    <h1>Add team member form</h1>
                </toolbar>
            </AppBar>
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Member Name"
                    variant="outlined"
                    value={memberName}
                    onChange={e => setMemberName(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Project Name"
                    variant="outlined"
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Project Type"
                    variant="outlined"
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Client Name"
                    variant="outlined"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Client Type"
                    variant="outlined"
                    value={clientType}
                    onChange={e => setClientType(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="Available Hours"
                    variant="outlined"
                    value={availableHours}
                    onChange={e => setAvailableHours(e.target.value)}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Worked Hours"
                    variant="outlined"
                    value={workedHours}
                    onChange={e => setWorkedHours(e.target.value)}
                />
                <br />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default Setup;

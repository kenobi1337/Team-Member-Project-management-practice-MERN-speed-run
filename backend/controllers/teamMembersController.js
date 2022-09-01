const TeamMembers = require('../models/teamMembersModels')

const getAllTeamMembers = async (req, res) => {
    try {
        const allTeamMembers = await TeamMembers.find()
        res.json({
            data: allTeamMembers
        })

    } catch (e) {
        res.status(500).json({
            error: e
        })
    }
}

const createTeamMember = async (req, res) => {
    const { MemberName,
        ProjectName,
        ProjectType,
        ClientName,
        ClientType,
        AvailableHours,
        TeamMembersHours } = req.body.body

    try {
        const createdTeamMember = await TeamMembers.create({
            MemberName,
            ProjectName,
            ProjectType,
            ClientName,
            ClientType,
            AvailableHours,
            TeamMembersHours
        })

        res.status(201).json({
            msg: "New team member added",
            data: createdTeamMember
        })
    } catch (e) {
        res.status(500).json({
            error: e
        })
    }
}

module.exports = {
    getAllTeamMembers,
    createTeamMember
}
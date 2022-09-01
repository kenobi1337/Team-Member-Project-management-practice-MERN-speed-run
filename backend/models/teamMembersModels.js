const mongoose = require('mongoose')

const TeamMembersSchema = new mongoose.Schema({
    MemberName: String,
    ProjectName: String,
    ProjectType: String,
    ClientName: String,
    ClientType: String,
    AvailableHours: Number,
    TeamMembersHours: Number
})

const TeamMembers = mongoose.model('TeamMembers', TeamMembersSchema)

module.exports = TeamMembers
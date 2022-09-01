const express = require('express')

const router = express.Router()

const {
    getAllTeamMembers, createTeamMember
} = require('../controllers/teamMembersController')

router.get('/', getAllTeamMembers)

router.post('/', createTeamMember)

module.exports = router
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")
const Poll = require("../models/Poll")

exports.getPolls = asyncHandler(async (req, res, next)=>{



    res.status(200).json(res)
})

exports.submitPoll = asyncHandler(async (req, res, next)=>{

    const poll = await Poll.create(req.body)

    res.status(200).json(poll)
})

exports.updatePoll = asyncHandler(async (req, res, next)=>{

    const poll = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json(poll)
})

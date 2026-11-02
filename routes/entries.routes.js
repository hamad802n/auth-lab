const router = require("express").Router()
const Entry = require("../models/Entry.js")
const isSignedIn = require("../middleware/is-signed-in.js")


router.get("/new", isSignedIn, (req, res) => {
    res.render("entries/new.ejs")
})

router.post("/", isSignedIn, async (req, res) => {
    req.body.owner = req.session.user._id
    await Entry.create(req.body)
    res.redirect("/entries")
})

router.get("/my-entries", isSignedIn, async (req, res) => {
    const entries = await Entry.find({ owner: req.session.user._id })
    res.render("entries/my-entries.ejs", { entries })
})


module.exports = router

router.get('/', async (req,res)=> {

const entries = await Entry.find({isPublic: true })
res.render("entries/all-entries.ejs", { entries


})




})
const router = require("express").Router();
let Songs = require("../models/songs.model");

router.route("/:id").get((req, res) => {
    Songs.find({ _id: req.params.id })
        .then((playlist) => res.json(playlist))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
    Songs.find()
        .then((songs) => res.json(songs))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const artists = req.body.artists;
    const uploaddate = Date.parse(req.body.uploaddate);
    const mediaurl = req.body.mediaurl;
    const playlistid = Number(req.body.playListId);
    const newSongs = new Songs({
        name,
        artists,
        uploaddate,
        mediaurl,
    });

    newSongs
        .save()
        .then(() => res.json({ message: "Song added!" }))
        .catch((err) => res.status(400).json({ message: "Error: " + err }));
});

module.exports = router;

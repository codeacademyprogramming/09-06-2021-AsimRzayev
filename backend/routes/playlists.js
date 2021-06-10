const router = require("express").Router();
let Playlist = require("../models/playlists.model");
router.route("/:id").get((req, res) => {
    Playlist.find({ _id: req.params.id })
        .then((playlist) => res.json(playlist))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
    Playlist.find()
        .then((playlist) => res.json(playlist))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const createddate = Date.parse(req.body.createddate);
    const author = req.body.author;
    const songList = [];
    const newPlaylist = new Playlist({
        name,
        createddate,
        author,
        songList,
    });

    newPlaylist
        .save()
        .then(() => res.json("Playlists added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/addSong").post((req, res) => {
    const { id } = req.params;
    let playlist = Playlist.findById(id);
    if (!playlist) {
        res.status(404).json({ message: "Not found" });
    } else {
        const songId = req.body.songId;
        playlist
            .updateOne({
                $addToSet: { songList: songId },
            })
            .then(() => res.json({ message: "Song added Playlist!" }));
    }
});
router.route("/:id/removeSong").delete((req, res) => {
    const { id } = req.params;
    let playlist = Playlist.findById(id);
    let songList = Playlist.findById(id).songList;
    const songId = req.body.songId;
    let isHave = JSON.stringify(playlist);

    if (!playlist) {
        res.status(404).json({ message: "Not found" });
    } else {
        const songId = req.body.songId;

        playlist
            .updateOne({
                $pull: { songList: songId },
            })
            .then(() => res.json({ message: "Song removed Playlist!" }));
    }
});

module.exports = router;

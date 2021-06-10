const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlistSchema = new Schema(
    {
        name: { type: String, required: true },
        createddate: { type: Date, required: true },
        author: { type: String, required: false },
        songList: [{ type: String, required: false }],
    },
    {
        timestamps: true,
    }
);

const Playlists = mongoose.model("Playlists", playlistSchema);

module.exports = Playlists;

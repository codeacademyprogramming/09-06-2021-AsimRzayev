const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songsSchema = new Schema(
    {
        name: { type: String, required: true },
        artists: { type: String, required: true },
        uploaddate: { type: Date, required: true },
        mediaurl: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;

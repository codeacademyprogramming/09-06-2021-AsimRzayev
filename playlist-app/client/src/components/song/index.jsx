import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { typeConst } from "../../redux/constants";
export default function Songs() {
    const dispatch = useDispatch();

    const [name, setName] = React.useState("");
    const [artist, setArtist] = React.useState("");
    const [uploadDate, setUploadDate] = React.useState("2017-05-24T10:30");
    const [mediaurl, setMediaurl] = React.useState("");

    const handleForm = (evt) => {
        evt.preventDefault();
        const song = {
            name: name,
            artists: artist,
            uploaddate: uploadDate,
            mediaurl: mediaurl,
        };

        dispatch({ type: typeConst.ADD_MUSIC, payload: song });
    };

    return (
        <div>
            <div className="d-flex justify-content-beetwen mb-3">
                <h2 className="text-primary">Songs</h2>
                <button
                    type="button"
                    className="btn btn-success ml-auto"
                    data-toggle="modal"
                    data-target="#SongModal"
                >
                    Add Song
                </button>
            </div>

            <div
                className="modal fade"
                id="SongModal"
                tabindex="-1"
                aria-labelledby="SongModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Song form
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(evt) => handleForm(evt)}>
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(evt) =>
                                            setName(evt.target.value)
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <label for="inputArtists">Artists</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputArtists"
                                        placeholder="Artists"
                                        value={artist}
                                        onChange={(evt) =>
                                            setArtist(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputDate">Upload date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputDate"
                                        value={uploadDate}
                                        onChange={(evt) =>
                                            setUploadDate(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputMedia">Media URl</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMedia"
                                        placeholder="Media URl"
                                        value={mediaurl}
                                        onChange={(evt) =>
                                            setMediaurl(evt.target.value)
                                        }
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Add playlist
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Artists</th>
                        <th scope="col">Upload date</th>
                        <th scope="col">Media url </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>Creation Date</td>
                        <td>Author</td>
                        <td className="w-25">A second item</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

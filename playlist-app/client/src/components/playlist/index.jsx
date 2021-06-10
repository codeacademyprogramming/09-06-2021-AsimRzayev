import React, { useCallback } from "react";
import { Link } from "react-router-dom";

export default function Playlists() {
    const removeAuth = useCallback(() => {
        localStorage.removeItem("authToken");
    }, []);
    return (
        <div className="container">
            <div className="text-right my-3">
                <Link
                    className="btn btn-danger"
                    to="/login"
                    onClick={removeAuth}
                >
                    Logout
                </Link>
            </div>
            <div className="d-flex justify-content-beetwen mb-3">
                <h2 className="text-primary">Playlists</h2>
                <button
                    type="button"
                    className="btn btn-success ml-auto"
                    data-toggle="modal"
                    data-target="#PlaylistsModal"
                >
                    Add Playlist
                </button>
            </div>

            <div
                className="modal fade"
                id="PlaylistsModal"
                tabindex="-1"
                aria-labelledby="PlaylistsModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Playlist form
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
                            <form>
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputDate">Crated date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputDate"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputAuthor">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAuthor"
                                        placeholder="Author"
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
                        <th scope="col">Creation Date</th>
                        <th scope="col">Author </th>
                        <th scope="col">Musics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>Creation Date</td>
                        <td>Author</td>
                        <td className="w-25">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">
                                    A second item
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

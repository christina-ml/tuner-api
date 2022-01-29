// bring connection to database
const db = require("../db/dbConfig.js");

// function that will have a SQL query. Async to wait for the response from the database before we try to return a value.
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;
    } catch (error) {
        return error;
    }
};

// returning an object because we are going to return more than one function
module.exports = {
    getAllSongs
};
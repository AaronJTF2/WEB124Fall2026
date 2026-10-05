

const playlistContainer = document.getElementById("playlistContainer");
const addButton = document.getElementById("addBtn");
const titleInput = document.getElementById("songTitle");
const artistInput = document.getElementById("songArtist");

function addSong(title, artist) {
    const article = document.createElement("article");
    article.classList.add("songCard");

    const songInfo = document.createElement("span");
    songInfo.textContent = `${title} - ${artist}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteBtn");

    article.appendChild(songInfo);
    article.appendChild(deleteButton);

    playlistContainer.appendChild(article);
}

function handleAddSong() {

    const title = titleInput.value;
    const artist = artistInput.value;

    if (title && artist) {
        addSong(title, artist);

        titleInput.value = "";
        artistInput.value = "";
    }
}

addButton.addEventListener("click", handleAddSong);


function handlePlaylistClick(event) {

    console.log("Event bubbled up to playlist container:", event.target);

    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
}

playlistContainer.addEventListener("click", handlePlaylistClick);
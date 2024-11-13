
const crearCancion = (SongData) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'song')
    div.innerHTML = ` 
                <img src="${'https://api.institutoalfa.org/api/songs/image/' + SongData.image.filename}" alt="">
                <div>
                    <h4>${SongData.title}</h4>
                    <p>${SongData.author} </p>
                </div>`

    div.addEventListener("click", () => {
        document.getElementById("song-front").setAttribute("src", "https://api.institutoalfa.org/api/songs/image/" + SongData.image.filename)

        document.getElementById("song-audio").setAttribute("src", "https://api.institutoalfa.org/api/songs/audio/" + SongData.audio.filename)

        document.getElementById("song-title").innerHTML = SongData.title

        document.getElementById("song-author").innerHTML = SongData.author
    })



    return div


}

document.getElementById("play").addEventListener("click", () => {

    const audio = document.getElementById("song-audio")
    document.getElementById("play").setAttribute("src", "/assets/img section 3.svg")

    if (audio.paused) {
        document.getElementById("play").setAttribute("src", "/assets/element.svg")
        document.getElementById("play").setAttribute("class", "pause")
        audio.play()
    } else {
        document.getElementById("play").setAttribute("src", "/assets/img section 3.svg")
        audio.pause()
    }
})


console.log(axios)

axios.get('https://api.institutoalfa.org/api/songs')
    .then((res) => {
        const canciones = res.data.songs

        canciones.map((cancion) => {
            document.getElementById("container")
                .appendChild(crearCancion(cancion))

        })
    })

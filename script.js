
    const crearCancion = (SongData) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'song')
        div.innerHTML = ` 
                <img src="${'https://api.institutoalfa.org/api/songs/image/'+SongData.image.filename}" alt="">
                <div>
                    <h4>${SongData.title}</h4>
                    <p>${SongData.author} </p>
                </div>`


        return div

    }

    console.log(axios)
    
    axios.get('https://api.institutoalfa.org/api/songs')
    .then((res) => {
        const canciones = res.data.songs

        canciones.map((cancion) => {
            document.getElementById("container")
            .appendChild(crearCancion(cancion))

        })
    })
    
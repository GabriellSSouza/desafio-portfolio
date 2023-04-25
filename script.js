const foto_perfil = document.querySelector('.foto_perfil')
const nome_perfil = document.querySelector('.nome_perfil')
const sociais_localizacao = document.querySelector('.redes_socias_localizacao')

//login_gihub

const url = "https://api.github.com/users/gabriellssouza"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        foto_perfil.src = data.avatar_url
        nome_perfil.innerHTML = data.name
        sociais_localizacao.childNodes[2].textContent = data.location
    })
    .catch(error => console.error(error))
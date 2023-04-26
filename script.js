const foto_perfil = document.querySelector('.foto_perfil')
const nome_perfil = document.querySelector('.nome_perfil')
const sociais_localizacao = document.querySelector('.redes_socias_localizacao')
const login_github = document.querySelector('.login_github')
const projeto1_nome = document.querySelector('.projeto1_nome')
const projeto1_desc = document.querySelector('.projeto1_desc')
const projeto2_nome = document.querySelector('.projeto2_nome')
const projeto2_desc = document.querySelector('.projeto2_desc')

//github - forks stargazers_count classes - projeto1_stars projeto1_forks
const url = "https://api.github.com/users/gabriellssouza"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        foto_perfil.src = data.avatar_url
        nome_perfil.innerHTML = data.name
        sociais_localizacao.childNodes[2].textContent = data.location
        login_github.childNodes[2].textContent = data.login
        fetch(data.repos_url)
            .then(response =>response.json())
            .then(data =>{
                console.log(data)
                projeto1_nome.textContent = data[5].name
                projeto1_desc.textContent = data[5].description
                projeto2_nome.textContent = data[8].name
                projeto2_desc.textContent = data[8].description

            })
        
    })
    .catch(error => console.error(error))
const foto_perfil = document.querySelectorAll('.foto_perfil')
const nome_perfil = document.querySelector('.nome_perfil')
const sociais_localizacao = document.querySelector('.redes_socias_localizacao')
const login_github = document.querySelector('.login_github')
const projeto1_nome = document.querySelector('.projeto1_nome')
const projeto1_desc = document.querySelector('.projeto1_desc')
const projeto1_stars = document.querySelector('.projeto1_stars')
const projeto1_forks = document.querySelector('.projeto1_forks')
const projeto1_tecno = document.querySelector('#projeto1_tecno')

const projeto2_nome = document.querySelector('.projeto2_nome')
const projeto2_desc = document.querySelector('.projeto2_desc')
const projeto2_stars = document.querySelector('.projeto2_stars')
const projeto2_forks = document.querySelector('.projeto2_forks')
const projeto2_tecno = document.querySelector('#projeto2_tecno')
const url = "https://api.github.com/users/gabriellssouza"

fetch(url)
    .then(response => response.json())
    .then(data => {
        foto_perfil.forEach((e)=>e.src = data.avatar_url)
        nome_perfil.innerHTML = data.name
        sociais_localizacao.childNodes[2].textContent = data.location
        login_github.childNodes[2].textContent = data.login

        fetch(data.repos_url)
            .then(response =>response.json())
            .then(data =>{

                projeto1_nome.textContent = data[5].name
                projeto1_nome.href = data[5].html_url
                projeto1_desc.textContent = data[5].description
                projeto1_stars.childNodes[2].textContent = data[5].forks
                projeto1_forks.childNodes[2].textContent = data[5].stargazers_count
                projeto1_tecno.textContent = data[5].language

                projeto2_nome.textContent = data[8].name
                projeto2_nome.href = data[8].html_url
                projeto2_desc.textContent = data[8].description
                projeto2_stars.childNodes[2].textContent = data[8].forks
                projeto2_forks.childNodes[2].textContent = data[8].stargazers_count
                projeto2_tecno.textContent = data[8].language

            })
        
    })
    .catch(error => console.error(error))
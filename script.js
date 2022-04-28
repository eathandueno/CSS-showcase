function addShadow(element){
    element.classList.add('shadow');
}
function removeShadow(element){
    element.classList.remove('shadow')
}
var divCards = document.querySelector(".card");
var currentUsername = "";

function getUsername(element){
    console.log(element.value);
    currentUsername = element.value;

}

function makeCoderCard(data){
    var res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}" height="30px" width="30px">
                    <h3>${data.login}</h3>
                    <p>Repositories ${data.public_repos}</p>
                </div>`
    return res;
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    console.log(coderData);
    divCards.innerHTML = makeCoderCard(coderData);
}
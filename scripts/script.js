
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  alert('Mensagem enviada com sucesso!');
})

document.getElementById('ano').innerText = new Date().getFullYear();
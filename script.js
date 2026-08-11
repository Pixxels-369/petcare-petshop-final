const formElemento = document.querySelector(".contato_formulario");
const inputsElementos = document.querySelectorAll("input");
const textAreaElemento = document.querySelector("textarea");

formElemento.addEventListener("submit", function (event) {
  event.preventDefault();

  let valores = [];

  inputsElementos.forEach(function (input) {
    valores.push(input.value);
    //console.log(input.value);
  });

  valores.push(textAreaElemento.value);

  console.log("dados do formulário: ", valores);
  // Apresenta os valores no console. Ainda sem interatividade com Backend.
  alert("Mensagem enviada com sucesso!");
  formElemento.reset();
});

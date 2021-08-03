//variaveis pro slider
var slide_numero = 1;
var slide_total = 5;
var tempo_exibir = 4000;

//função some todos os slides, depois exibe um por vez
function trocar(){
    document.getElementById('s1').style.visibility="hidden";
    document.getElementById('s2').style.visibility="hidden";
    document.getElementById('s3').style.visibility="hidden";
    document.getElementById('s4').style.visibility="hidden";
    document.getElementById('s5').style.visibility="hidden";

    document.getElementById('s'+ slide_numero).style.visibility="visible";

    slide_numero++;

    if(slide_numero > slide_total){
      slide_numero = 1;
    }
}
//função chama o trocar, com timer; inicialmente exibe só o slide5
function slider(){
  document.getElementById('s1').style.visibility="hidden";
  document.getElementById('s2').style.visibility="hidden";
  document.getElementById('s3').style.visibility="hidden";
  document.getElementById('s4').style.visibility="hidden";
  document.getElementById('s5').style.visibility="visible";

  slide_timer = setInterval(trocar,tempo_exibir);
}

//Dica pra easter egg; da uma pista pra charada
function dica(){
  alert("Dica: Nosso P.I. fala sobre isso. escreva em qualquer lugar.")
}

//Easter egg trem
//lista pra guardar as letras
const pressionados = []
//o codigo do eater egg
const easteregg = 'trem'

//captura as teclas digitadas e executa a função
window.addEventListener('keyup', (e) =>{
  //joga as tecla pra lista
  pressionados.push(e.key);

  //splica para separar o codigo só do dos ultimas 4 teclas (tamanho do codigo eater egg)
  pressionados.splice(-easteregg.lenght-1, pressionados.lenght - easteregg.lenght);
  //se o codigo estiver na lista de teclas digitadas ele muda o fundo da tela, coloca a foto selecionada e mostra um alert;
  if(pressionados.join("").includes(easteregg)){
    document.getElementById("slider").src="http://trabalhosujo.com.br/wp/wp-content/uploads/2015/03/mano-brown-trem.jpg";
    document.body.style.backgroundColor = "pink";
    alert("ISSO É IMPOSSÍVEL!!!!!!! VOCÊ DESVENDOU A CHARADA")
  }

})

//voltar ao topo

function iraoTopo(){
  //pega o html e body e realiza uma animação que scrolla a pagina para o ponto 0 no tempo de 1 segundo;
    $('html, body').animate({
    scrollTop: 0
    }, 1000, 'linear');
    }

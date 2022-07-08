
const OPCAO = document.querySelector('#optCalc');

OPCAO.addEventListener('change', verificaOperacao);

function verificaOperacao(){
	var operacaoEscolhida;
	for(let a of OPCAO){
		if(a.isChecked){
			console.log(a)
		}
	}
	
}
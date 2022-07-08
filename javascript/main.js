
const OPCAO = document.querySelector('#operacoes');

OPCAO.addEventListener('change', verificaOperacao);

function verificaOperacao(){
	let operacaoEscolhida;
	operacaoEscolhida = OPCAO[OPCAO.selectedIndex].value;
	return operacaoEscolhida;
}
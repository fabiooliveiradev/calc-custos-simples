const OPCAO = document.querySelector('#operacoes');

OPCAO.addEventListener('change', verificaOperacao);


function verificaOperacao() {
	let operacaoEscolhida;
	operacaoEscolhida = OPCAO[OPCAO.selectedIndex].value;

	showResult(operacaoEscolhida);
	
	showFields(operacaoEscolhida);
}


function showFields(operacaoEscolhida) {
	
	let inpPrCompra = document.querySelector('#inpPrCompra');
	let prCompra = document.querySelector('#prCompra');
	let inpIcms = document.querySelector('#inpIcms');
	let inpIpi = document.querySelector('#inpIpi');
	let inpMargLucro = document.querySelector('#inpMargLucro');
	let inpPrVenda = document.querySelector('#inpPrVenda');
	let inpFrete = document.querySelector('#inpFrete');
	
	switch (operacaoEscolhida) {
		case 'prCusto':
			prCompra.checked = true;
			inpPrCompra.classList.toggle('invisible');
			break;
	}
}


function showResult(operacaoEscolhida) {

	let resultado = document.querySelector('#title')

	switch (operacaoEscolhida) {
		case 'prCusto':
			resultado.innerHTML = 'PREÇO DE CUSTO';
			break;
		case 'prVenda':
			resultado.innerHTML = 'PREÇO DE VENDA';
			break;
		case 'margLucro':
			resultado.innerHTML = 'MARGEM DE LUCRO';
			break;
		default:
			resultado.innerHTML = 'RESULTADO';
	}
}

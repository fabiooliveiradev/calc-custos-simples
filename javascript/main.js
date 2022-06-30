const OPTION_CALC = document.querySelector('#optCalc');

function selectCalc(){
        const PR_VENDA = 'prVenda';
        const PR_CUSTO = 'prCusto';
        const MARG_LUCRO = 'margLucro'
        let index = OPTION_CALC.selectedIndex;
        let choose = OPTION_CALC[index].value;
        
        if(choose === PR_VENDA){
                document.querySelector('#prCompra').checked = true;
                document.querySelector('#margLucro').checked = true;
                document.querySelector('#inpPrCompra').value = 0,00;
                document.querySelector('#inpMargLucro').value = 0,00;
        }
        console.log(choose)
        
}
const avanca=document.querySelectorAll('.btn-proximo');

avanca.forEach(button=>{
    button.addEventListener('click',fuction(){
        const atual=document.querySelector('.ativo');
        const proximopasso ='passo-'+ this.getATTribute('data-proximo')

        atual.classlist.remove('ativo');
document.getElementById(proximopasso).classlist.add('ativo');
    }
})
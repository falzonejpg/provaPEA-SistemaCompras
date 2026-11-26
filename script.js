
let aviso = document.getElementById("aviso");
let barraGeral = document.getElementById("BarraGeral");

let botaoMais = document.getElementsByClassName("botaoMais")
let botaoMenos = document.getElementsByClassName("botaoMenos")

let maisTeclado = document.getElementById("MaisTeclado")
let menosTeclado = document.getElementById("MenosTeclado")

let maisMouse = document.getElementById("MaisMouse")
let menosMouse = document.getElementById("MenosMouse")

let maisHeadset = document.getElementById("MaisHeadset")
let menosHeadset = document.getElementById("MenosHeadset")

let finalizar = document.getElementById("botaoFinal")

let contadorGeral = 0;

let texto = document.getElementById("textoTotal");
let valorTotal = 0;
let valorTeclado = 40;
let valorMouse = 25;
let valorHeadset = 50;

let qtTeclado = 0;
let qtMouse = 0;
let qtHeadset = 0;

let textoTeclado = document.getElementById("textoTeclado")
let textoMouse = document.getElementById("textoMouse")
let textoHeadset = document.getElementById("textoHeadset")

function atualizar(){
if (valorTotal >= 100){
 barraGeral.style.width = "100%";
}
else{
 barraGeral.style.width = (valorTotal) + "%";
}

 finalizar.disabled = contadorGeral == 0;

 texto.innerText = "Valor total R$" + valorTotal


 menosTeclado.disabled = qtTeclado == 0;
 menosMouse.disabled = qtMouse == 0;
 menosHeadset.disabled = qtHeadset == 0;

 textoTeclado.innerText = qtTeclado
 textoMouse.innerText = qtMouse
 textoHeadset.innerText = qtHeadset


 if(valorTotal >= 100){
aviso.innerText = "Frete Grátis Liberado!" 
aviso.style.backgroundColor = "green"
}
else {
    aviso.innerText = "AVISO!! FRETE GRÁTIS ACIMA DE R$ 100" 
aviso.style.backgroundColor = "greenyellow"
}

}
maisTeclado.addEventListener("click" , ()=> {
contadorGeral++
qtTeclado++
valorTotal = valorTeclado + valorTotal
atualizar()
})
menosTeclado.addEventListener("click" , ()=> {
    contadorGeral--
    qtTeclado--
    valorTotal = valorTotal - valorTeclado   
    atualizar()
    })
    maisMouse.addEventListener("click" , ()=> {
        contadorGeral++
        qtMouse++
        valorTotal = valorMouse + valorTotal
        atualizar()
        })
        menosMouse.addEventListener("click" , ()=> {
            contadorGeral--
            qtMouse--
            valorTotal = valorTotal - valorMouse 
            atualizar()
            })
            maisHeadset.addEventListener("click" , ()=> {
                contadorGeral++
                qtHeadset++
                valorTotal = valorHeadset + valorTotal
                atualizar()

                })
                menosHeadset.addEventListener("click" , ()=> {
                    contadorGeral--
                    qtHeadset--
                    valorTotal = valorTotal - valorHeadset  
                    atualizar()
                    })
                
atualizar()
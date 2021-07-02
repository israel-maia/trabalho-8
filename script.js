var soma = [10, 20, 30, 40];
var total = 0
var nomes = ["luffy", "zoro", "sanji", "franky", "chopper"]

function nome() {
    document.getElementById('texto2').innerHTML = nomes
}

function numero() {
    for(var i =0; i < soma.length; i++){
        total = total + soma[i]
    }
    document.getElementById('texto').innerHTML = total
}
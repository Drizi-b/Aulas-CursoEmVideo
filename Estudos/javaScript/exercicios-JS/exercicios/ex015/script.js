function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById("txtano")
    let res = document.querySelector("div#res")
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("ERRO - Verifique os dados e tente novamente!!")
    } else {
        let fsex = document.getElementsByName("radsex") // [0] para masc e [1] para fem
        let idade = ano - Number(fAno.value)
        //res.innerHTML = `idade calculada: ${idade}` //testar o código
        let genero = " "
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 13) {
                img.setAttribute("src", "menino.png")
            } else if (idade < 18) {
                img.setAttribute("src", "rapaz.png")
            } else if (idade < 60) {
                img.setAttribute("src", "homem.png")
            } else {
                img.setAttribute("src", "idoso.png")
            }
         } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 13) {
                img.setAttribute("src", "menina.png") 
            } else if (idade < 18) {
                img.setAttribute("src", "moca.png")
            } else if (idade < 60) {
                img.setAttribute("src", "mulher.png")
            } else {
                img.setAttribute("src", "idosa.png")
                }
            }    
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
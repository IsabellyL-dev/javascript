function carregar(){
    var img = window.document.getElementById('foto')
    var txt = window.document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
         txt.innerHTML = `Agora são ${hora} horas da manhã!`
         img.src = 'imagens/manha.jpg'

    }
    else if (hora <= 18){
        txt.innerHTML = `Agora são ${hora} horas da tarde!`
         img.src = 'imagens/tarde2.jpg'
         document.body.style.background = '#CA7646'

    }
    else{
        txt.innerHTML = `Agora são ${hora} horas da noite!`
        img.src = 'imagens/noite.jpg'
         document.body.style.background = '#516373'
    }

    }
    
        
    


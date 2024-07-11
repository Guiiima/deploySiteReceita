document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var mensagemDiv = document.getElementById("mensagem");
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarsenha = document.getElementById("confirmarSenha").value;
    var telefone = document.getElementById("telefone").value;
    
    var novaLinha = nome + "," + email + "," + senha + "," + confirmarsenha + "," + telefone;
    if (localStorage.getItem("usuarios") === null) {
        localStorage.setItem("usuarios", novaLinha);
        mensagemDiv.innerHTML = "Usuário cadastrado com sucesso!";
    } else {
        var usuarios = localStorage.getItem("usuarios").split("\n");
        var emailExistente = false;
        for (var i = 0; i < usuarios.length; i++) {
            var usuario = usuarios[i].split(",");
            if (usuario[1] === email) {
                emailExistente = true;
                break;
            }
        }
        if (emailExistente) {
            mensagemDiv.innerHTML = "E-mail já cadastrado!";
        } else {
            localStorage.setItem("usuarios", localStorage.getItem("usuarios") + "\n" + novaLinha);
            
            mensagemDiv.innerHTML = "Usuário cadastrado com sucesso!";
        }
    }
    mensagemDiv.style.backgroundColor = "#ffffff";
    mensagemDiv.style.border = "5px solid black";

    setTimeout(function() {
        mensagemDiv.innerHTML = "";
        mensagemDiv.style.border = "none";
        mensagemDiv.style.backgroundColor = "#efefef";
    }, 5000); 

});
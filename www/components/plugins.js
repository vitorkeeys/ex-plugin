´[[][][]// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    function retorno() {
        // Função de retorno vazia
    }
    navigator.notification.alert("minha Mensagem", retorno, "Aviso!","Aceito");
});

$(document).on("click", "#confirm", function(){
    function confirma(buttonIndex) {
        if(buttonIndex == 1) {
            navigator.notification.alert("Escolheu a opção A");
        } else {
            navigator.notification.alert("Escolheu a opção B");
        }
    }
    navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:", ['A','B']);
});

$(document).on("click", "#beep", function(){
    navigator.notification.beep(4);
});
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    if (navigator.vibrate) {
        console.log("Vibração é suportada");
    } else {
        console.log("Vibração não é suportada");
    }
}

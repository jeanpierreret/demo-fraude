function funcionRegistrarConsumo() { 
    
    var data = {};
    data['numeroTarjeta'] = document.getElementById("inputTarjeta").value;
    data['monto'] = document.getElementById("inputMonto").value;
    data['comercio'] = document.getElementById("inputMCC").value;
    data['descComercio'] = document.getElementById("inputdDescComercio").value;
    
    console.log(data);
    
    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://54.232.200.58:8080/cliente/consumo', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () {
        alert("Consumo Registrado");
        location.reload();
    };
    
    
}
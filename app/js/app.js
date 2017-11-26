function funcionRegistrarConsumo() { 
    
    var data = {};
    data['numeroTarjeta'] = document.getElementById("inputTarjeta").value;
    data['monto'] = document.getElementById("inputMonto").value;
    data['comercio'] = document.getElementById("inputMCC").value;
    data['descConmercio'] = document.getElementById("inputdDescComercio").value;
    
    console.log(data);

    // send the collected data as JSON

    jQuery.ajax({
        url: "http://54.232.200.58:8080/cliente/consumo?" + jQuery.param({
            "numeroTarjeta": ''+data["numeroTarjeta"],
            "descConmercio": ''+data["descConmercio"],
            "monto": ''+data["monto"],
            "comercio": ''+data["comercio"]
        }),
        type: "POST",
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    
    
}
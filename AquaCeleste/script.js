document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    // Configura o endpoint do Dynamics
    const endpoint = "https://172dff3fa035e0909763b1c1560713.ec.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b75e8a05e88e420a86a5d968d6ad7d25/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=172dff3f-a035-e090-9763-b1c1560713ec&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=u7m0m2o4S8JJxaYnBCy06Ad58NV6AJ48jj8Y0vM8p5M";

    // Envia os dados para o Dynamics
    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (response.ok) {
            alert("Lead criada com sucesso!");
        } else {
            alert("Erro ao criar Lead. Verifique os dados e tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar os dados.");
    });
});
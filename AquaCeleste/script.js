document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    // Configura o endpoint do Dynamics
    const endpoint = "https://6d3ffc8b3f82e56ba706fe8210f34b.ed.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ca8582ca9cd14925a1f38a97475e5211/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=6d3ffc8b-3f82-e56b-a706-fe8210f34bed";

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
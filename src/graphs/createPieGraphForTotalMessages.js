function createPieGraphForTotalMessages(totalMessagesData) {
    console.log(totalMessagesData);
    const container = document.getElementById("totalGraphContainer");

    // Clear existing content
    container.innerHTML = "";

    // Create a canvas element for the pie chart
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    const {sender1name, sender2name, sender1total, sender2total} =
        totalMessagesData;

    // Prepare chart data
    const data = {
        labels: [sender1name, sender2name],
        datasets: [
            {
                data: [sender1total, sender2total],
                backgroundColor: [
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                ],
                borderColor: [
                    "rgba(153, 102, 255, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    // Create the pie chart
    new Chart(canvas, {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
        },
    });
}

const pieGraphPlaceholder = {
    total: 430,
    sender1name: "Participante 1",
    sender2name: "Participante 2",
    sender1total: 230,
    sender2total: 200,
};

createPieGraphForTotalMessages(pieGraphPlaceholder);

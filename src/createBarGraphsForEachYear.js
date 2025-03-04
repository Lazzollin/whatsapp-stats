function createBarGraphsForEachYear(dateStats) {
    const container = document.getElementById("graphCountByDateContainer");

    // Clear the container before adding new graphs
    container.innerHTML = "";

    // Spanish month names
    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    // Loop through each year in the stats
    Object.keys(dateStats).forEach((year) => {
        const data = dateStats[year];
        const months = Object.keys(data);

        // Calculate the total for the year
        const totalForYear = months.reduce((total, month) => {
            return total + data[month].sender1 + data[month].sender2;
        }, 0);

        // Create a parent div with the classes "col-12 col-md-6 px-1"
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("col-12", "col-md-6", "px-1");
        container.appendChild(parentDiv);

        // Create a child div with the classes "col-12 card"
        const graphContainer = document.createElement("div");
        graphContainer.classList.add("col-12", "card", "px-3", "py-2");
        parentDiv.appendChild(graphContainer);

        // Create a row div to hold both the h3 and p elements in the same row
        const headerRow = document.createElement("div");
        headerRow.classList.add("row", "align-items-center"); // Added align-items-center for vertical centering
        graphContainer.appendChild(headerRow);

        // Create a div for the year (h3) with appropriate Bootstrap classes
        const yearCol = document.createElement("div");
        yearCol.classList.add("col-8"); // Takes up 8 parts of the row
        const yearHeader = document.createElement("h3");
        yearHeader.innerText = `Año ${year}`;
        yearCol.appendChild(yearHeader);
        headerRow.appendChild(yearCol);

        // Create a div for the total of the year (p) with appropriate Bootstrap classes
        const totalCol = document.createElement("div");
        totalCol.classList.add("col-4", "text-end"); // Takes up 4 parts of the row, aligned to the right
        const yearTotal = document.createElement("p");
        yearTotal.classList.add("mb-0");
        yearTotal.innerText = `Total: ${totalForYear}`;
        totalCol.appendChild(yearTotal);
        headerRow.appendChild(totalCol);

        // Create a canvas element for the graph
        const canvas = document.createElement("canvas");
        graphContainer.appendChild(canvas);

        // Prepare the data for the bar graph
        const labels = months.map(
            (month) =>
                `${monthNames[month - 1]} (${
                    data[month].sender1 + data[month].sender2
                })`
        ); // Month name with total
        const sender1Messages = months.map((month) => data[month].sender1);
        const sender2Messages = months.map((month) => data[month].sender2);

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: data[months[0]].sender1name,
                    data: sender1Messages,
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
                {
                    label: data[months[0]].sender2name,
                    data: sender2Messages,
                    backgroundColor: "rgba(153, 102, 255, 0.5)",
                    borderColor: "rgba(153, 102, 255, 1)",
                    borderWidth: 1,
                },
            ],
        };

        // Create the bar chart for the current year
        new Chart(canvas, {
            type: "bar",
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: "top",
                    },
                },
            },
        });
    });
}

// Example: Call the function with your date stats data
const placeholder = {
    2024: {
        1: {
            sender1: 50,
            sender2: 30,
            sender1name: "Participante 1",
            sender2name: "Participante 2",
        },
        2: {
            sender1: 80,
            sender2: 60,
            sender1name: "Participante 1",
            sender2name: "Participante 2",
        },
    },
    2025: {
        1: {
            sender1: 40,
            sender2: 70,
            sender1name: "Participante 1",
            sender2name: "Participante 2",
        },
        2: {
            sender1: 60,
            sender2: 40,
            sender1name: "Participante 1",
            sender2name: "Participante 2",
        },
    },
};

// Call the function to create the graphs
createBarGraphsForEachYear(placeholder);

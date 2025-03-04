function renderData(intervalsData) {
    const averages = calculateAverageResponseTime(intervalsData);
    const maxResponseTimes = calculateMaxResponseTime(intervalsData);

    const uniqueReceivers = [
        ...new Set(intervalsData.map(({reciever}) => reciever)),
    ];

    const [receiver1, receiver2] = uniqueReceivers;

    document.getElementById("person1Name").textContent = receiver1;
    document.getElementById("person2Name").textContent = receiver2;
    document.getElementById("person2AverageResponse").textContent = formatTime(
        averages[receiver1]
    );
    document.getElementById("person1AverageResponse").textContent = formatTime(
        averages[receiver2]
    );
    document.getElementById("person1MaxTime").textContent = formatTime(
        maxResponseTimes[receiver1]
    );
    document.getElementById("person2MaxTime").textContent = formatTime(
        maxResponseTimes[receiver2]
    );
}

function calculateAverageResponseTime(intervalsData) {
    const responseTimes = {};

    intervalsData.forEach(({reciever, timeTillResponse}) => {
        if (!responseTimes[reciever]) {
            responseTimes[reciever] = {total: 0, count: 0};
        }
        responseTimes[reciever].total += timeTillResponse;
        responseTimes[reciever].count += 1;
    });

    const averages = {};
    for (const reciever in responseTimes) {
        averages[reciever] =
            responseTimes[reciever].total / responseTimes[reciever].count;
    }

    return averages;
}

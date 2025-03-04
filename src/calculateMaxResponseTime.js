function calculateMaxResponseTime(intervalsData) {
    const maxResponseTimes = {};

    intervalsData.forEach(({reciever, timeTillResponse}) => {
        if (
            !maxResponseTimes[reciever] ||
            timeTillResponse > maxResponseTimes[reciever]
        ) {
            maxResponseTimes[reciever] = timeTillResponse;
        }
    });

    return maxResponseTimes;
}

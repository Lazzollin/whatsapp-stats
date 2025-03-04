function processChat(text) {
    const messages = text.split("\n").filter((line) => line.trim() !== "");
    const chatData = [];

    const timeIntervals = [];

    // Extract messages
    for (let line of messages) {
        const match = line.match(
            /^(\d{1,2}\/\d{1,2}\/\d{2,4}), (\d{1,2}:\d{2}) - ([^:]+): (.+)$/
        );
        if (match) {
            const [, date, time, sender, message] = match;
            chatData.push({date, time, sender, message});
        }
    }

    if (chatData.length === 0) {
        console.warn("No messages found.");
        return;
    }

    const graphMessagesByDefault = document.getElementById(
        "graphMessagesByDefault"
    );
    if (graphMessagesByDefault && graphMessagesByDefault.checked) {
        console.log(getMessageCountByDate(chatData));
        createBarGraphsForEachYear(getMessageCountByDate(chatData));
    }

    let lastSender = chatData[0].sender;
    let lastTime = chatData[0].time;
    let lastDate = chatData[0].date;

    for (let i = 1; i < chatData.length; i++) {
        const {date, time, sender} = chatData[i];

        if (sender !== lastSender) {
            const diff = calculateTimeDifference(
                lastDate,
                lastTime,
                date,
                time
            );
            // console.log(
            //     `Interval between ${lastSender} and ${sender}: ${diff.minutes} minutes`
            // );
            timeIntervals.push({
                sender: lastSender,
                reciever: sender,
                timeTillResponse: diff.minutes,
            });

            lastSender = sender;
            lastTime = time;
            lastDate = date;
        }
    }

    return timeIntervals;
}

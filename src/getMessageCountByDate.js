function getMessageCountByDate(chatData) {
    const result = {};
    const senders = new Set();

    chatData.forEach((chat) => {
        const year = new Date(chat.date).getFullYear();
        const month = new Date(chat.date).getMonth() + 1;
        const sender = chat.sender.toLowerCase();

        senders.add(sender); // Track unique senders

        if (!result[year]) {
            result[year] = {};
        }

        if (!result[year][month]) {
            result[year][month] = {
                total: 0,
                sender1: 0,
                sender2: 0,
                sender1name: "",
                sender2name: "",
                mostSentBy: "",
            };
        }

        result[year][month].total++;

        // Dynamically assign sender1 and sender2
        if (!result[year][month].sender1name) {
            result[year][month].sender1name = sender;
        }

        if (sender === result[year][month].sender1name) {
            result[year][month].sender1++;
        } else {
            result[year][month].sender2++;
            result[year][month].sender2name = sender;
        }

        // Determine who sent more messages
        result[year][month].mostSentBy =
            result[year][month].sender1 > result[year][month].sender2
                ? "sender1"
                : "sender2";
    });

    return result;
}

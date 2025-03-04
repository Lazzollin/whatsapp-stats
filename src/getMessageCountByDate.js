function getMessageCountByDate(chatData) {
    const result = {};

    chatData.forEach((chat) => {
        const year = new Date(chat.date).getFullYear();
        const month = new Date(chat.date).getMonth() + 1;
        const sender = chat.sender.toLowerCase();

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

        if (sender === "laza") {
            result[year][month].sender1++;
            result[year][month].sender1name = "laza";
        } else if (sender === "juliet") {
            result[year][month].sender2++;
            result[year][month].sender2name = "juliet";
        }

        if (result[year][month].sender1 > result[year][month].sender2) {
            result[year][month].mostSentBy = "sender1";
        } else {
            result[year][month].mostSentBy = "sender2";
        }
    });

    // Fill the missing sender names if they don't appear in the month
    Object.keys(result).forEach((year) => {
        Object.keys(result[year]).forEach((month) => {
            if (!result[year][month].sender1name) {
                result[year][month].sender1name = "laza";
            }
            if (!result[year][month].sender2name) {
                result[year][month].sender2name = "juliet";
            }
        });
    });

    return result;
}

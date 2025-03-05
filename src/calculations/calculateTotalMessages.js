function calculateTotalMessages(messages) {
    const totals = {
        total: 0,
        sender1name: "",
        sender2name: "",
        sender1total: 0,
        sender2total: 0,
    };

    const senderCounts = {};

    messages.forEach(({sender}) => {
        senderCounts[sender] = (senderCounts[sender] || 0) + 1;
    });

    const senders = Object.keys(senderCounts);

    if (senders.length >= 2) {
        totals.sender1name = senders[0];
        totals.sender2name = senders[1];
        totals.sender1total = senderCounts[senders[0]];
        totals.sender2total = senderCounts[senders[1]];
        totals.total = totals.sender1total + totals.sender2total;
    }

    document.getElementById("totalMessages").textContent = totals.total;

    return totals;
}

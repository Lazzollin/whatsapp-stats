function formatTime(minutes) {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    const seconds = Math.round((minutes % 1) * 60);

    let formattedTime = "";

    if (days > 0) {
        formattedTime += `${days}d `;
    }

    if (hours > 0 || days > 0) {
        formattedTime += `${hours}h `;
    }

    if (remainingMinutes > 0 || (days === 0 && hours === 0)) {
        formattedTime += `${remainingMinutes}m `;
    }

    if (seconds > 0) {
        formattedTime += `${seconds}s`;
    }

    return formattedTime.trim();
}

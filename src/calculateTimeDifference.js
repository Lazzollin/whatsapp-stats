function calculateTimeDifference(date1, time1, date2, time2) {
    const parseDateTime = (date, time) => {
        const [month, day, year] = date.split("/").map(Number);
        const [hours, minutes] = time.split(":").map(Number);
        return new Date(
            year < 100 ? 2000 + year : year,
            month - 1,
            day,
            hours,
            minutes
        );
    };

    const d1 = parseDateTime(date1, time1);
    const d2 = parseDateTime(date2, time2);

    const diffMs = (d2 - d1) / 1000;
    const minutes = Math.floor(diffMs / 60);

    return {minutes};
}

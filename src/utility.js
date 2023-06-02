export function getRelativeTime(postedTime) {
    const currentDate = new Date();
    const formatter = new Intl.RelativeTimeFormat("en-US", {
        numeric: "auto",
    });

    const createdAtDate = new Date(postedTime);
    const timeDifference = currentDate - createdAtDate;

    const seconds = timeDifference / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // get time relative to current time

    let timeAgo;
    if (years >= 1) {
        timeAgo = formatter.format(-years, "year");
    } else if (months >= 1) {
        timeAgo = formatter.format(-months, "month");
    } else if (days >= 1) {
        timeAgo = formatter.format(-days, "day");
    } else if (hours >= 1) {
        timeAgo = formatter.format(-hours, "hour");
    } else if (minutes >= 1) {
        timeAgo = formatter.format(-minutes, "minute");
    } else {
        timeAgo = "just now"
    }
    return timeAgo;
}

export default function formatDate(requestTime) {
    const date = new Date(requestTime);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
    const isThisYear = date.getFullYear() === now.getFullYear();

    if (isToday) {
        return date.toLocaleTimeString(); // Show only time if the date is today
    } else if (isYesterday) {
        return `Yesterday, ${date.toLocaleTimeString()}`; // Show "Yesterday" + time
    } else if (isThisYear) {
        return date.toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }); // Show day, month, and time if the date is this year
    } else {
        return date.toLocaleString(); // Show full date if not this year
    }
}
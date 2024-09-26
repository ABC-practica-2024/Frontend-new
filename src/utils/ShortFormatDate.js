export default function shortFormatDate(requestTime) {
    const date = new Date(requestTime);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
    const isThisYear = date.getFullYear() === now.getFullYear();

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay())); // Start of the current week

    const isThisWeek = date >= startOfWeek && date <= new Date();

    if (isToday) {
        return date.toLocaleTimeString(); // Show only time if the message was today
    } else if (isYesterday) {
        return `Yesterday`; // Show "Yesterday"
    } else if (isThisWeek) {
        return dayOfWeek[date.getDay()]; // Show the day of the week if the message was this week
    } else if (isThisYear) {
        return date.toLocaleString(undefined, {
            month: '2-digit',
            day: '2-digit',
        }); // Show day and month if the message was this year
    } else {
        return date.toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }); // Show full date in the format dd.mm.yyyy if not this year
    }
}
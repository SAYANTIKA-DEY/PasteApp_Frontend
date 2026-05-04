export const FormatDate = (date) => {
    // ensure the date is valid Date object
    const _date = new Date(date);

    // check if the date is valid 
    if(isNaN(_date)){
        console.error("Invalid date");
        return "Invalid Date";
    }

    //format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',

    }).format(_date);

    return formattedDate;
};
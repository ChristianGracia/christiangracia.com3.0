function militaryTimeConverter(date: Date) {
  let hours = date.getHours();
  const AmOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  let minutes = date.getMinutes();
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + formattedMinutes + " " + AmOrPm;
}
function formatDateAndTime(date: string) {
  let formattedDate = new Date(date);
  let hours = formattedDate.getHours();
  console.log(hours);
  const dayOrNight = hours > 19 || hours < 5 ? "🌙" : "🌞";
  return (
    " " +
    dayOrNight +
    " " +
    militaryTimeConverter(formattedDate) +
    " " +
    formattedDate.toLocaleDateString("en-US")
  );
}

export { militaryTimeConverter, formatDateAndTime };

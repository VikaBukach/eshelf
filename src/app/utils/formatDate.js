export function formatDateToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);

  // Extract day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Format the date as 'DD.MM.YYYY'
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}

export function formatDateWithTime(isoDate) {
  const date = new Date(isoDate);

  // Extract day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  // Format the date as 'DD.MM.YYYY'
  const formattedDate = `${day}.${month}.${year} ${h}:${m}:${s}`;

  return formattedDate;
}

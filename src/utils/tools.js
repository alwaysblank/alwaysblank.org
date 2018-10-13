function getDate(input) {
  const newDate = new Date(input);
  return `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
}

export { getDate };

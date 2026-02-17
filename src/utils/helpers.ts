export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

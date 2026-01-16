export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export const formatDate = (value: string) => {
  const date = new Date(value);
  if (isNaN(date.getTime())) return value || "[date pending]";
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
};

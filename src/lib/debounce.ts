/* eslint-disable */
// @typescript-eslint/no-explicit-any

export default function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

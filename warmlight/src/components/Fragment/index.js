// alternative to v-if of vue
export function If({ value, children }) {
  return value ? children : null;
}

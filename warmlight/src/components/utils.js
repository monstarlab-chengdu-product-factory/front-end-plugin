export function classname(style, className) {
  return [style, className].join(' ').trim();
}

export function withStyle(styles) {
  return function mergeStyle(style, className) {
    return classname(styles[style], className);
  };
}

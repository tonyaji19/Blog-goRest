export function truncateString(str) {
  if (str.length > 200) {
    return str.slice(0, 200) + "...";
  } else {
    return str;
  }
}

export function truncateStringArticles(str) {
  if (str.length > 50) {
    return str.slice(0, 50) + "...";
  } else {
    return str;
  }
}

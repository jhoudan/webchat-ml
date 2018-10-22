let truncate = (str, len) =>
  str->String.length > len ? String.sub(str, 0, len) ++ "..." : str;

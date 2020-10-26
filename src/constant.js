export const defaultGroups = [
  {
    name: "Default",
    id: "default",
    prefix: false
  }
];

export const defaultShortcuts = [
  {
    keyword: "google",
    url: "https://google.com",
    group: "default"
  }
];

export const encodeHTML = function (str) {
  return str.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&apos;');
};

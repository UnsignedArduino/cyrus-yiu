export function isExternalLink(url: string): boolean {
  if (url.startsWith("/")) {
    return false;
  }
  try {
    return new URL(url).host !== window.location.host;
  } catch {
    const urls = ["http://localhost:3000", "https://cyrus-yiu.pages.dev"];
    try {
      return !urls.some((u) => {
        return new URL(url).host === new URL(u).host;
      });
    } catch {
      return false;
    }
  }
}

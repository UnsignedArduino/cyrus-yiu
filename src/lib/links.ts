// Centralized external profile/social links, so they don't need to be
// updated in multiple places if they ever change.
// Note: public/_redirects is consumed directly by the host and can't import
// from here, so keep it in sync with these values manually.

export const GITHUB_USERNAME = "UnsignedArduino";
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
export const GITHUB_REPO_URL = `${GITHUB_PROFILE_URL}/cyrus-yiu`;
export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/cyrus-yiu";

export const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1d8ebDEHgOkQAGk4MCLDuOBT41HX_DKrX/view";
export const RESUME_MD_URL =
  "https://drive.google.com/file/d/1KwjGPzZeaJiSf1_xsNplnxwsLqQo22LB/view";

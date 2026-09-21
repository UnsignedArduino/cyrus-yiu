import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  RESUME_MD_URL,
  RESUME_PDF_URL,
} from "@/lib/links";
import React from "react";

export default function Contact() {
  return (
    <Layout title="Contact Me | Cyrus Yiu" current="Contact Me">
      <h2>Contact Me</h2>
      <p>
        Want to talk with me? I{"'"}m always interested in new projects and
        opportunities! Consider connecting with me on{" "}
        <AutoLink href={LINKEDIN_URL}>LinkedIn</AutoLink>, or if you have a
        GitHub account, check out my{" "}
        <AutoLink href={GITHUB_PROFILE_URL}>profile page</AutoLink> to see the
        public email I use for GitHub.
      </p>
      <p>
        Check out my resume <AutoLink href={RESUME_PDF_URL}>here</AutoLink>. (
        <AutoLink href={RESUME_MD_URL}>Markdown version</AutoLink>, in case you
        or your AI prefer plain text)
      </p>
    </Layout>
  );
}

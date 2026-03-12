import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import React from "react";

export default function Contact() {
  return (
    <Layout title="Contact Me | Cyrus Yiu" current="Contact Me">
      <h2>Contact Me</h2>
      <p>
        Want to talk with me? I{"'"}m always interested in new projects and
        opportunities! Consider connecting with me on{" "}
        <AutoLink href="https://www.linkedin.com/in/cyrus-yiu/">
          LinkedIn
        </AutoLink>
        , or if you have a GitHub account, check out my{" "}
        <AutoLink href="https://github.com/UnsignedArduino">
          profile page
        </AutoLink>{" "}
        to see the public email I use for GitHub.
      </p>
      <p>
        Check out my resume{" "}
        <AutoLink href="https://drive.google.com/file/d/1d8ebDEHgOkQAGk4MCLDuOBT41HX_DKrX/view">
          here
        </AutoLink>
        .
      </p>
    </Layout>
  );
}

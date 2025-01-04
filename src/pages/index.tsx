import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Home() {
  return (
    <Layout title="Cyrus Yiu" current="Home">
      <h2>About Me</h2>
      <p>
        Hello! I{"'"}m Cyrus Yiu, a senior at Woburn Memorial High School. I
        {"'"}m interested in majoring in Computer Engineering, Electrical
        Engineering, or Computer Science. You can check out my projects{" "}
        <AutoLink href="/projects">here</AutoLink>!
      </p>
    </Layout>
  );
}

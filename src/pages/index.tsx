import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Home() {
  return (
    <Layout title="Cyrus Yiu" current="Home">
      <h2>About Me</h2>
      <p>
        Hello! I{"'"}m Cyrus Yiu, a freshmen Computer Engineering major at
        University of Massachusetts Lowell. Check out my favorite projects{" "}
        <AutoLink href="/projects">here</AutoLink>, or let{"'"}s{" "}
        <AutoLink href="/contact">get in touch</AutoLink>!
      </p>
      <p>
        Besides engineering and working on personal digital and physical
        projects, I enjoy other extracurriculars such as robotics, rocketry, and
        marching band!
      </p>
      {/*<div>*/}
      {/*  <AutoLink href="https://github.com/UnsignedArduino">*/}
      {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
      {/*    <img*/}
      {/*      className="me-2 mt-2 align-top"*/}
      {/*      src="https://github-readme-stats.vercel.app/api?username=UnsignedArduino&show_icons=true&hide=contribs&hide_rank=true&theme=transparent"*/}
      {/*      alt="Cyrus Yiu's GitHub stats"*/}
      {/*    />*/}
      {/*  </AutoLink>*/}
      {/*  <AutoLink href="https://github.com/UnsignedArduino">*/}
      {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
      {/*    <img*/}
      {/*      className="me-2 mt-2 align-top"*/}
      {/*      src="https://github-readme-stats.vercel.app/api/top-langs/?username=UnsignedArduino&layout=compact&exclude_repo=GIF-converter-showcase&theme=transparent"*/}
      {/*      alt="Cyrus Yiu's top languages"*/}
      {/*    />*/}
      {/*  </AutoLink>*/}
      {/*</div>*/}
    </Layout>
  );
}

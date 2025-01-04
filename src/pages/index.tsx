import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Home() {
  return (
    <Layout title="Cyrus Yiu" current="Home">
      <h2>About Me</h2>
      <p>
        Hello! I{"'"}m Cyrus Yiu, a senior at Woburn Memorial High School. I
        {"'"}m interested in majoring in Computer Engineering, Electrical
        Engineering, or Computer Science. Check out my favorite projects{" "}
        <AutoLink href="/projects">here</AutoLink> and my GitHub{" "}
        <AutoLink href="https://github.com/UnsignedArduino">here</AutoLink>!
      </p>
      <p>
        Besides engineering and working on digital and physical projects, I
        enjoy other activities including competing in the WMHS Math Team (as
        co-captain) and Science Team. I also teach middle school kids how to
        code in Python with the WMHS Coding Club. Non-STEM activities include
        performing in the WMHS Marching and Concert Band (as section leader for
        pit percussion and clarinets), playing the piano (including recitals and
        competitions), the occasional online chess game, and skiing!
      </p>
      <div>
        <AutoLink href="https://github.com/UnsignedArduino">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="me-2 mt-2 align-top"
            src="https://github-readme-stats.vercel.app/api?username=UnsignedArduino&show_icons=true&hide=contribs&hide_rank=true&theme=transparent"
            alt="Cyrus Yiu's GitHub stats"
          />
        </AutoLink>
        <AutoLink href="https://github.com/UnsignedArduino">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="me-2 mt-2 align-top"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=UnsignedArduino&layout=compact&exclude_repo=GIF-converter-showcase&theme=transparent"
            alt="Cyrus Yiu's top languages"
          />
        </AutoLink>
      </div>
    </Layout>
  );
}

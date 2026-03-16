import Layout from "@/components/Layout";
import imageWeatherStationFinishedFront from "@/assets/weather-station/finished front.jpg";
import imageLittleFireplaceFinishedFront from "@/assets/little-fireplace/finished front.gif";
import imageAwesomeArcadeExtensionsPage from "@/assets/awesome-arcade/extensions page.png";
import imageMakeCodeArcadeGamesThumb from "@/assets/makecode-arcade-games/thumb.png";
import ProjectCard from "@/components/Cards/ProjectCard";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Projects() {
  return (
    <Layout title="Projects | Cyrus Yiu" current="Projects">
      <h2>Projects</h2>
      <p>
        Hello - welcome to my projects! Here, you can find a list of select
        projects that I really enjoyed working on in high school and in college.
      </p>
      <p>
        Consider checking out my{" "}
        <AutoLink href="https://github.com/UnsignedArduino">
          GitHub profile
        </AutoLink>{" "}
        to find the latest things I{"'"}ve been up to!
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {/*<div className="col">*/}
        {/*  <ProjectCard*/}
        {/*    image={imageChessboardRender}*/}
        {/*    imageAlt="A render of the project in Fusion."*/}
        {/*    title="Chessboard"*/}
        {/*    subtitle="Jan 2025 - now"*/}
        {/*    links={[*/}
        {/*      {*/}
        {/*        "GitHub repo for PCB files":*/}
        {/*          "https://github.com/UnsignedArduino/Chessboard-Hardware",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        "GitHub repo for more PCB files":*/}
        {/*          "https://github.com/UnsignedArduino/Chessboard-Hardware-2",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        "GitHub repo for design files":*/}
        {/*          "https://github.com/UnsignedArduino/Chessboard-Design",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        "GitHub repo for code":*/}
        {/*          "https://github.com/UnsignedArduino/Chessboard-Nano",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        "GitHub repo for more code":*/}
        {/*          "https://github.com/UnsignedArduino/Chessboard-Pi",*/}
        {/*      },*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    A digital chessboard that tracks pieces, enforces game rules, and*/}
        {/*    suggests moves! Detailed project write-up coming soon... (You may*/}
        {/*    wonder why I start this when I have the Chessbot - I honestly don*/}
        {/*    {"'"}t know 🤷‍♂ )*/}
        {/*  </ProjectCard>*/}
        {/*</div>*/}
        <div className="col">
          <ProjectCard
            image={imageWeatherStationFinishedFront}
            imageAlt="A picture of the front finished weather station, showing the weather."
            title="Weather Station"
            subtitle="Feb 2024 - Aug 2024"
            links={[
              {
                "GitHub repo for code":
                  "https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station",
              },
              {
                "GitHub repo for hardware":
                  "https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station-Hardware",
              },
              {
                "GitHub repo for design":
                  "https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station-Design",
              },
            ]}
          >
            A multi-lingual low-power IoT 7in weather station that displays the
            current weather and a five day forecast.
          </ProjectCard>
        </div>
        {/*<div className="col">*/}
        {/*  <ProjectCard*/}
        {/*    image={imageChessbotMoveTestWithFoolsMate}*/}
        {/*    imageAlt="A picture of a chessboard, a Raspberry Pi camera, a Raspberry Pi 5, and a monitor showing the fools mate on screen."*/}
        {/*    title="Chessbot"*/}
        {/*    subtitle="Sep 2024 - now"*/}
        {/*    links={[*/}
        {/*      {*/}
        {/*        "GitHub repo": "https://github.com/UnsignedArduino/Chessbot",*/}
        {/*      },*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    A Raspberry Pi uses computer vision to play chess against you! Work*/}
        {/*    in progress...*/}
        {/*  </ProjectCard>*/}
        {/*</div>*/}
        <div className="col">
          <ProjectCard
            image={imageLittleFireplaceFinishedFront}
            imageAlt="An animated picture of an all-black plastic fireplace with a little screen inside playing a fireplace animation."
            title="Little Fireplace"
            subtitle="Nov 2024 - Dec 2024"
            links={[
              {
                "GitHub repo for code":
                  "https://github.com/UnsignedArduino/ESP32-S3-Little-Fireplace",
              },
              {
                "GitHub repo for hardware":
                  "https://github.com/UnsignedArduino/ESP32-S3-Little-Fireplace-Hardware",
              },
            ]}
          >
            A small USB-C-powered 3D-printed fireplace that you can take
            anywhere!
          </ProjectCard>
        </div>
        <div className="col">
          <ProjectCard
            image={imageAwesomeArcadeExtensionsPage}
            imageAlt="A picture of the top of the web page of the Awesome Arcade site of the extensions page."
            title="Awesome Arcade"
            subtitle="April 2023 - now"
            links={[
              {
                "Visit website": "https://awesome-arcade.vercel.app/",
              },
              {
                "GitHub repo":
                  "https://github.com/UnsignedArduino/Awesome-Arcade",
              },
            ]}
          >
            A community-driven site listing the best extensions and tools for
            MakeCode Arcade game development!
          </ProjectCard>
        </div>
        <div className="col">
          <ProjectCard
            image={imageMakeCodeArcadeGamesThumb}
            imageAlt="A selection of my games on MakeCode Arcade."
            title="MakeCode Arcade Games"
            subtitle="2021 - now"
            links={[
              {
                "View games": "/projects/makecode-arcade-games",
              },
            ]}
          >
            A list of MakeCode Arcade games that I have made, including
            game-jam-winning and featured games!
          </ProjectCard>
        </div>
      </div>
    </Layout>
  );
}

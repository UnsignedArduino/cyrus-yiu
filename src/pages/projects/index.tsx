import Layout from "@/components/Layout";
import imageWeatherStationFinishedFront from "@/assets/weather-station/finished front.jpg";
import imageChessbotMoveTestWithFoolsMate from "@/assets/chessbot/move test with fools mate.jpg";
import imageLittleFireplaceFinishedFront from "@/assets/little-fireplace/finished front.gif";
import imageAwesomeArcadeExtensionsPage from "@/assets/awesome-arcade/extensions page.png";
import ProjectCard from "@/components/Cards/ProjectCard";

export default function Projects() {
  return (
    <Layout title="Projects | Cyrus Yiu" current="Projects">
      <h2>Projects</h2>
      <p>
        Hello! Welcome to my projects. Here, you can find a list of select
        projects that I really enjoyed working on in high school.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        <div className="col">
          <ProjectCard
            image={imageWeatherStationFinishedFront}
            imageAlt="A picture of the front finished weather station, showing the weather."
            title="Weather Station"
            subtitle="Feb - Aug 2024"
            links={[
              {
                "GitHub repo for code":
                  "https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station",
              },
              {
                "GitHub repo for hardware":
                  "https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station-Hardware",
              },
            ]}
          >
            A multi-lingual low-power IOT 7in weather station that displays the
            current weather and a five day forecast. Detailed project write-up
            coming soon...
          </ProjectCard>
        </div>
        <div className="col">
          <ProjectCard
            image={imageChessbotMoveTestWithFoolsMate}
            imageAlt="A picture of a chessboard, a Raspberry Pi camera, a Raspberry Pi 5, and a monitor showing the fools mate on screen."
            title="Chessbot"
            subtitle="Sep 2024 - now"
            links={[
              {
                "GitHub repo": "https://github.com/UnsignedArduino/Chessbot",
              },
            ]}
          >
            A Raspberry Pi uses computer vision to play chess against you! Work
            in progress...
          </ProjectCard>
        </div>
        <div className="col">
          <ProjectCard
            image={imageLittleFireplaceFinishedFront}
            imageAlt="An animated picture of an all-black plastic fireplace with a little screen inside playing a fireplace animation."
            title="Little Fireplace"
            subtitle="Nov - Dec 2024"
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
            anywhere! Detailed project write-up coming soon...
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
                Website: "https://awesome-arcade.vercel.app/",
              },
            ]}
          >
            A community-driven site listing the best extensions and tools for
            MakeCode Arcade game development!
          </ProjectCard>
        </div>
        <div className="col">
          <ProjectCard
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

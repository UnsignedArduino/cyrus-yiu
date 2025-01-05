import Layout from "@/components/Layout";
import ExportedImage from "next-image-export-optimizer";
import imageWeatherStationFinishedFront from "@/assets/weather-station/finished front.jpg";
import imageChessbotMoveTestWithFoolsMate from "@/assets/chessbot/move test with fools mate.jpg";
import imageLittleFireplaceFinishedFront from "@/assets/little-fireplace/finished front.gif";
import imageAwesomeArcadeExtensionsPage from "@/assets/awesome-arcade/extensions page.png";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Projects() {
  return (
    <Layout title="Projects | Cyrus Yiu" current="Projects">
      <h2>Projects</h2>
      <p>
        Hello! Welcome to my projects. Here, you can find a list of select
        projects that I really enjoyed working on in high school. Write-ups for
        each project are coming soon!
        {/*Click on one of them to learn more!*/}
      </p>

      <div className="row row-cols-1 row-cols-lg-2 g-4">
        <div className="col">
          <div className="card h-100">
            <ExportedImage
              className="card-img-top"
              src={imageWeatherStationFinishedFront}
              alt="A picture of the front finished weather station, showing the weather."
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Station</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Feb - Aug 2024
              </h6>
              <p className="card-text">
                A multi-lingual low-power IOT 7in weather station that displays
                the current weather and a five day forecast!
              </p>
              <AutoLink
                href="https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station"
                className="card-link"
              >
                GitHub repo for code
              </AutoLink>
              <AutoLink
                href="https://github.com/UnsignedArduino/ESP32-7in-EPaper-Weather-Station-Hardware"
                className="card-link"
              >
                GitHub repo for hardware
              </AutoLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <ExportedImage
              className="card-img-top"
              src={imageChessbotMoveTestWithFoolsMate}
              alt="A picture of a chessboard, a Raspberry Pi camera, a Raspberry Pi 5, and a monitor showing the fools mate on screen."
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Chessbot</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Sep 2024 - now
              </h6>
              <p className="card-text">
                A Raspberry Pi uses computer vision to play chess against you!
                (Work in progress)
              </p>
              <AutoLink
                href="https://github.com/UnsignedArduino/Chessbot"
                className="card-link"
              >
                GitHub repo
              </AutoLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <ExportedImage
              className="card-img-top"
              src={imageLittleFireplaceFinishedFront}
              alt="An animated picture of an all-black plastic fireplace with a little screen inside playing a fireplace animation."
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Little Fireplace</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Nov - Dec 2024
              </h6>
              <p className="card-text">
                A small USB-C-powered 3D-printed fireplace that you can take
                anywhere!
              </p>
              <AutoLink
                href="https://github.com/UnsignedArduino/ESP32-S3-Little-Fireplace"
                className="card-link"
              >
                GitHub repo for code
              </AutoLink>
              <AutoLink
                href="https://github.com/UnsignedArduino/ESP32-S3-Little-Fireplace-Hardware"
                className="card-link"
              >
                GitHub repo for hardware
              </AutoLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <ExportedImage
              className="card-img-top"
              src={imageAwesomeArcadeExtensionsPage}
              alt="A picture of the top of the web page of the Awesome Arcade site of the extensions page."
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Awesome Arcade</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                April 2023 - now
              </h6>
              <p className="card-text">
                A community-driven site listing the best extensions and tools
                for MakeCode Arcade game development!
              </p>
              <AutoLink
                href="https://awesome-arcade.vercel.app/"
                className="card-link"
              >
                Website
              </AutoLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">MakeCode Arcade Games</h5>
              <p className="card-text">
                A list of MakeCode Arcade games that I have made, including
                game-jam-winning and featured games!
              </p>
              <AutoLink
                href="/projects/makecode-arcade-games"
                className="card-link stretched-link"
              >
                View games
              </AutoLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

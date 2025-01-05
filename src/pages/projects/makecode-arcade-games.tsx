import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import image0 from "@/assets/makecode-arcade-games/fossil-clicker/0.png";
import ExportedImage from "next-image-export-optimizer";

export default function MakeCodeArcadeGames() {
  return (
    <Layout
      title="MakeCode Arcade Games | Projects | Cyrus Yiu"
      current="MakeCode Arcade Games | Projects"
      breadCrumbs={[
        { Projects: "/projects" },
        { "MakeCode Arcade Games": "/projects/makecode-arcade-games" },
      ]}
    >
      <h2>MakeCode Arcade Games</h2>
      <p>
        Here are some of the MakeCode Arcade games that I have made, including
        game-jam-winning and featured games!
      </p>
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4 mb-2">
        <div className="col">
          <div className="card border-primary h-100">
            <ExportedImage
              className="card-img-top"
              src={image0}
              alt=""
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">
                Fossil Clicker{" "}
                <small>
                  <span className="badge text-bg-primary">
                    #2 Game Jam winner
                  </span>
                </small>
              </h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Aug 2024
              </h6>
              <p className="card-text">
                Fossil Clicker is an idle game where you click to dig for
                fossils! Click the shovel to dig your own fossils, purchase
                towers to automate the process, and buy upgrades until you have
                more money than the number of atoms in the observable universe!
              </p>
              <p className="card-text">
                Fossil Clicker won{" "}
                <AutoLink href="https://arcade.makecode.com/gamejam/prehistoric">
                  second place in the eighth MakeCode Arcade Game Jam.
                </AutoLink>
              </p>
              <p className="card-text">
                <AutoLink
                  href="https://arcade.makecode.com/71136-20766-59616-73262"
                  className="btn btn-primary card-link"
                >
                  Click to play
                </AutoLink>
              </p>
              <AutoLink
                href="https://forum.makecode.com/t/fossil-clicker-my-prehistoric-game-jam-submission/21524?u=unsignedarduino"
                className="card-link"
              >
                Game forum post
              </AutoLink>
              <AutoLink
                href="https://forum.makecode.com/t/announcement-prehistoric-game-jam-winners/21789?u=unsignedarduino"
                className="card-link"
              >
                Game Jam winners forum post
              </AutoLink>
            </div>
          </div>
        </div>
      </div>
      <p>More of my games will be added...</p>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import image0 from "@/assets/makecode-arcade-games/fossil-clicker/0.png";
import MakeCodeArcadeGameCard from "@/components/Cards/ProjectCard/MakeCodeArcadeGameCard";

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
          <MakeCodeArcadeGameCard
            images={[{ "Fossil Clicker start screen": image0 }]}
            title="Fossil Clicker"
            badge="#2 Game Jam winner"
            date="Aug 2024"
            gameURL="https://arcade.makecode.com/71136-20766-59616-73262"
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/fossil-clicker-my-prehistoric-game-jam-submission/21524?u=unsignedarduino",
              },
              {
                "Game Jam winners forum post":
                  "https://forum.makecode.com/t/announcement-prehistoric-game-jam-winners/21789?u=unsignedarduino",
              },
            ]}
            cardTheme="info"
          >
            Fossil Clicker is an idle game where you click to dig for fossils!
            Click the shovel to dig your own fossils, purchase towers to
            automate the process, and buy upgrades until you have more money
            than the number of atoms in the observable universe!
            <br />
            <br />
            Fossil Clicker won{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/prehistoric">
              second place in the eighth MakeCode Arcade Game Jam.
            </AutoLink>
          </MakeCodeArcadeGameCard>
        </div>
      </div>
      <p>More of my games will be added...</p>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import imageFossilClicker0 from "@/assets/makecode-arcade-games/fossil-clicker/0.png";
import imageThePhoenixsQuest0 from "@/assets/makecode-arcade-games/the-phoenixs-quest/0.gif";
import imageTheAttackOfTheSerpents0 from "@/assets/makecode-arcade-games/the-attack-of-the-serpents/0.gif";
import imageFishyFishyCrossMyOcean0 from "@/assets/makecode-arcade-games/fishy-fishy-cross-my-ocean/0.png";
import imageHonk0 from "@/assets/makecode-arcade-games/honk/0.png";
import MakeCodeArcadeGameCard from "@/components/Cards/ProjectCard/MakeCodeArcadeGameCard";
import React from "react";

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
            images={[{ "Fossil Clicker start screen": imageFossilClicker0 }]}
            title="Fossil Clicker"
            badge="#2 Game Jam winner"
            date="Jul 2023"
            gameLinks={[
              {
                "Play Fossil Clicker":
                  "https://arcade.makecode.com/71136-20766-59616-73262",
              },
            ]}
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
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              { "The Phoenix's Quest start screen": imageThePhoenixsQuest0 },
            ]}
            title="The Phoenix's Quest"
            badge="Featured game"
            date="Dec 2021"
            gameLinks={[
              {
                "Play The Phoenix's Quest":
                  "https://arcade.makecode.com/08184-31648-39354-45691",
              },
              {
                "Play The Phoenix's Quest: The Cloudy Climb DLC":
                  "https://arcade.makecode.com/31393-03412-94227-19662",
              },
            ]}
            links={[
              {
                "The Phoenix's Quest forum post":
                  "https://forum.makecode.com/t/the-phoenixs-quest/11390?u=unsignedarduino",
              },
              {
                "The Phoenix's Quest: The Cloudy Climb DLC forum post":
                  "https://forum.makecode.com/t/the-phoenixs-quest-the-cloudy-climb-dlc-out-now/12915?u=unsignedarduino",
              },
            ]}
            cardTheme="info"
            isFavorite
          >
            The Phoenix{"'"}s Quest, in collaboration with{" "}
            <AutoLink href="https://forum.makecode.com/u/danger_kitty">
              @danger_kitty
            </AutoLink>
            , is a platformer-like game that involves the player fighting
            monsters made out of trash, such as plastic containers in the ocean.
            The dialogue throughout the levels emphasized the climate crisis by
            informing players of how plastics that do not break down would
            greatly harm the environment. Containing over 2.4k blocks, this game
            features a three-slot save system, level selector, a storyline
            consisting of twelve action-packed levels, and an epic (and insanely
            hard by my standards) boss fight!
            <br />
            <br />
            The Phoenix{"'"}s Quest was a{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/global-2021">
              featured submission for the Global 2021 MakeCode Arcade Game Jam.
            </AutoLink>
            <br />
            <br />
            The Cloudy Climb DLC, created by{" "}
            <AutoLink href="https://forum.makecode.com/u/danger_kitty">
              @danger_kitty
            </AutoLink>{" "}
            and released in March 2022, contains ten new levels and a new
            storyline.
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "A scene from the third part of the game The Attack of the Serpents.":
                  imageTheAttackOfTheSerpents0,
              },
            ]}
            title="The Attack of the Serpents"
            badge="Honorable mention"
            date="May 2021"
            gameLinks={[
              {
                "Play The Attack of the Serpents":
                  "https://unsignedarduino.github.io/The-Attack-of-the-Serpents/",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/the-attack-of-the-serpents/7912?u=unsignedarduino",
              },
            ]}
            cardTheme="primary"
          >
            Fight legions of snakes with the power of time at your hand in The
            Attack of the Serpents!
            <br />
            <br />
            The Attack of the Serpents was an{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/time">
              honorable mention in the sixth MakeCode Arcade Game Jam.
            </AutoLink>
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "Fishy Fishy Cross My Ocean start screen":
                  imageFishyFishyCrossMyOcean0,
              },
            ]}
            title="Fishy Fishy Cross My Ocean"
            badge="Honorable mention"
            date="Dec 2020"
            gameLinks={[
              {
                "Play Fishy Fishy Cross My Ocean":
                  "https://unsignedarduino.github.io/Fishy-Fishy-Cross-my-Ocean/",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/fishy-fishy-cross-my-ocean/4769?u=unsignedarduino",
              },
              {
                "Game Jam winners forum post":
                  "https://forum.makecode.com/t/announcement-makecode-arcade-ocean-jam-results/5563?u=unsignedarduino",
              },
            ]}
            cardTheme="primary"
          >
            Fishy Fishy Cross My Ocean is a simple game of crossing the ocean!
            Just make it to the other side, it{"'"}s that easy! Well, just don
            {"'"}t forget to avoid the sharks...
            <br />
            <br />
            Fishy Fishy Cross My Ocean received an{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/ocean">
              honorable mention in the fifth MakeCode Arcade Game Jam.
            </AutoLink>
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[{ "HONK! start screen": imageHonk0 }]}
            title="HONK!"
            badge="#2 Game Jam winner"
            date="Aug 2020"
            gameLinks={[
              {
                "Play HONK!":
                  "https://arcade.makecode.com/97928-66031-26500-83480",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/help-with-tile-centering/3279/5?u=unsignedarduino",
              },
            ]}
            cardTheme="info"
          >
            HONK! other cars out of the way while aiming for power ups - watch
            out, the game gets faster and faster!
            <br />
            <br />
            HONK! won{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/traffic">
              second place in the fourth MakeCode Arcade Game Jam.
            </AutoLink>
          </MakeCodeArcadeGameCard>
        </div>
      </div>
      <p>More of my games will be added...</p>
    </Layout>
  );
}

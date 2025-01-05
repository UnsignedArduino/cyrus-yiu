import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import imageFossilClicker0 from "@/assets/makecode-arcade-games/fossil-clicker/0.png";
import imageThePhoenixsQuest0 from "@/assets/makecode-arcade-games/the-phoenixs-quest/0.gif";
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
      <div className="row row-cols-1 row-cols-lg-2 g-4 mb-2">
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
          >
            The Phoenix{"'"}s Quest, in collaboration with{" "}
            <AutoLink href="https://forum.makecode.com/u/danger_kitty">
              @danger_kitty
            </AutoLink>
            , is a platformer-like game that involves the player fighting
            monsters made out of trash, such as plastic containers in the ocean.
            The dialogue throughout the levels emphasized the climate crisis by
            informing players of how plastics that do not break down would
            greatly harm the environment. This blocks-only game, containing over
            2.4k blocks, features a three-slot save system, level selector, a
            storyline consisting of twelve action-packed levels, and an epic
            (and insanely hard by my standards) boss fight!
            <br />
            <br />
            The Phoenix{"'"}s Quest was a{" "}
            <AutoLink href="https://arcade.makecode.com/gamejam/prehistoric">
              featured submission for the Global 2021 MakeCode Arcade Game Jam.
            </AutoLink>
            <br />
            <br />
            The Cloudy Climb DLC, released in March 2022, contains ten new
            levels and a new storyline.
          </MakeCodeArcadeGameCard>
        </div>
      </div>
      <p>More of my games will be added...</p>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import AutoLink from "@/components/Linkable/AutoLink";
import imageFossilClicker0 from "@/assets/makecode-arcade-games/fossil-clicker/0.png";
import imageMidnight0 from "@/assets/makecode-arcade-games/midnight/0.gif";
import imageRacers0 from "@/assets/makecode-arcade-games/racers/0.gif";
import imageFarmingSimulator0 from "@/assets/makecode-arcade-games/farming-simulator/0.png";
import image40960 from "@/assets/makecode-arcade-games/4096/0.gif";
import imageThePhoenixsQuest0 from "@/assets/makecode-arcade-games/the-phoenixs-quest/0.gif";
import imageCrabRave0 from "@/assets/makecode-arcade-games/crab-rave/0.gif";
import imageBloonsTowerDefensev30 from "@/assets/makecode-arcade-games/bloons-tower-defense-v3/0.gif";
import imageCUPSlol0 from "@/assets/makecode-arcade-games/cups-lol/0.gif";
import imageProcedurallyGeneratedPlatformer0 from "@/assets/makecode-arcade-games/procedurally-generated-platformer/0.gif";
import imageTheAttackOfTheSerpents0 from "@/assets/makecode-arcade-games/the-attack-of-the-serpents/0.gif";
import imageUltimatePlinko0 from "@/assets/makecode-arcade-games/ultimate-plinko/0.gif";
import imageCrossyRoads30 from "@/assets/makecode-arcade-games/crossy-roads-3/0.gif";
import imageJump0 from "@/assets/makecode-arcade-games/jump/0.gif";
import imageCryptoClicker0 from "@/assets/makecode-arcade-games/crypto-clicker/0.gif";
import imageDash0 from "@/assets/makecode-arcade-games/dash/0.png";
import imageProceduralGeneration0 from "@/assets/makecode-arcade-games/procedural-generation/0.gif";
import imageFishyFishyCrossMyOcean0 from "@/assets/makecode-arcade-games/fishy-fishy-cross-my-ocean/0.png";
import imageDeckedOut0 from "@/assets/makecode-arcade-games/decked-out/0.png";
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
      <div className="alert alert-warning" role="alert">
        Due to the age of some of these games, there may be more bugs than
        normal.
      </div>
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
              {
                "Midnight title screen": imageMidnight0,
              },
            ]}
            title="Midnight"
            badge=""
            date="Jan 2023"
            gameLinks={[
              {
                "Play Midnight":
                  "https://arcade.makecode.com/48683-85758-27896-28848",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-7-puzzle-jam/17195/22?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            A monochrome puzzle game. Unfinished and unpolished.
            <br />
            <br />
            Midnight was a submission to the{" "}
            <AutoLink href="https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-7-puzzle-jam/17195?u=unsignedarduino">
              MakeCode Arcade Mini Game Jam #7 - Puzzle Jam
            </AutoLink>
            .
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "Racers title screen": imageRacers0,
              },
            ]}
            title="Racers"
            badge=""
            date="Sep 2022"
            gameLinks={[
              {
                "Play Racers":
                  "https://arcade.makecode.com/84426-33815-03715-00484",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-3-racing-jam/15223/26?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Race other forum members!
            <br />
            <br />
            Racers was a submission to the{" "}
            <AutoLink href="https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-3-racing-jam/15223?u=unsignedarduino">
              MakeCode Arcade Mini Game Jam #3 - Racing Jam
            </AutoLink>
            .
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "Farming Simulator preview": imageFarmingSimulator0,
              },
            ]}
            title="Farming Simulator"
            badge=""
            date="Jul 2022"
            gameLinks={[
              {
                "Play Farming Simulator":
                  "https://arcade.makecode.com/75497-32261-65073-41611",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-2-submission-thread/14534/15?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Farm to pay off your farm by Friday night, or be evicted! Highly
            unpolished, no save mechanic, and untested.
            <br />
            <br />
            Farming Simulator was a submission for the{" "}
            <AutoLink href="https://forum.makecode.com/t/announcement-makecode-arcade-mini-game-jam-2-submission-thread/14534?u=unsignedarduino">
              MakeCode Arcade Mini Game Jam #2 - Simulation Jam
            </AutoLink>
            .
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "4096 preview": image40960,
              },
            ]}
            title="4096"
            badge=""
            date="Mar 2022"
            gameLinks={[
              {
                "Play 4096":
                  "https://arcade.makecode.com/34095-84419-91252-11865",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/4096-2048-spinoff/12565?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            A spinoff of 2048.
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
                "Crab Rave preview": imageCrabRave0,
              },
            ]}
            title="Crab Rave"
            badge=""
            date="Nov 2021"
            gameLinks={[
              {
                "Play Crab Rave":
                  "https://arcade.makecode.com/41555-86772-61712-74189",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/crab-rave/10692?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            A rhythm game to the song Crab Rave by Noisestorm.
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "Bloons Tower Defense v3 preview": imageBloonsTowerDefensev30,
              },
            ]}
            title="Bloons Tower Defense v3"
            badge=""
            date="Aug 2021"
            gameLinks={[
              {
                "Play Bloons Tower Defense v3":
                  "https://arcade.makecode.com/48471-08362-35315-17829",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/bloons-tower-defense-v3/9688?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            A clone of Bloons Tower Defense.
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "CUPS preview": imageCUPSlol0,
              },
            ]}
            title="CUPS"
            badge=""
            date="Jul 2021"
            gameLinks={[
              {
                "Play CUPS":
                  "https://arcade.makecode.com/51983-54802-28425-53222",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/cups-lol/9334?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Follow the coin. Good luck.
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              {
                "Procedurally Generated Platformer preview":
                  imageProcedurallyGeneratedPlatformer0,
              },
            ]}
            title="Procedurally Generated Platformer"
            badge=""
            date="Jun 2021"
            gameLinks={[
              {
                "Play Procedurally Generated Platformer":
                  "https://arcade.makecode.com/14342-23304-08255-39116",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/procedurally-generated-platformer/8500?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Another favorite, it{"'"}s a combination of Procedural Generation
            and Jump! to have a never ending amount of parkour maps! I suggest
            speed-running it!
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
            images={[{ "Ultimate Plinko preview": imageUltimatePlinko0 }]}
            title="Ultimate Plinko"
            badge=""
            date="Apr 2021"
            gameLinks={[
              {
                "Play Ultimate Plinko":
                  "https://arcade.makecode.com/24080-90325-59868-64255",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/ultimate-plinko/7682?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            It{"'"}s plinko! Try the easy mode to see how many coins your
            computer can handle at once!
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[{ "Crossy Roads 3 title screen": imageCrossyRoads30 }]}
            title="Crossy Roads 3"
            badge=""
            date="Apr 2021"
            gameLinks={[
              {
                "Play Crossy Roads 3":
                  "https://arcade.makecode.com/33222-86729-28130-54274",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/crossy-roads-3/7348?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            This is the third iteration of my Crossy Roads clones. Includes
            revamped start and end screens, new animations, settings, and
            localization!
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[{ "Jump! preview": imageJump0 }]}
            title="Jump!"
            badge=""
            date="Mar 2021"
            gameLinks={[
              {
                "Play Jump!":
                  "https://arcade.makecode.com/11023-25955-04223-68407",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/jump/6633?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            An infinite Doodle Jump clone!
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[{ "Crypto Clicker preview": imageCryptoClicker0 }]}
            title="Crypto Clicker"
            badge=""
            date="Feb 2021"
            gameLinks={[
              {
                "Play Crypto Clicker":
                  "https://arcade.makecode.com/99661-26553-72241-57983",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/crypto-clicker/6404?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Mine for the imaginary currency {'"'}MakeCoin{'"'} in this idle
            clicking game!
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[{ "Dash! title screen": imageDash0 }]}
            title="Dash!"
            badge=""
            date="Feb 2021"
            gameLinks={[
              {
                "Play Dash!":
                  "https://arcade.makecode.com/31859-29053-35871-79972",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/dash/6037?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            A minimal Geometry Dash clone.
            <div className="alert alert-warning mt-2" role="alert">
              Flashing lights warning - there are fast palette changes when the
              gravity switches!
            </div>
          </MakeCodeArcadeGameCard>
        </div>
        <div className="col">
          <MakeCodeArcadeGameCard
            images={[
              { "Procedural Generation preview": imageProceduralGeneration0 },
            ]}
            title="Procedural Generation"
            badge=""
            date="Jan 2021"
            gameLinks={[
              {
                "Play Procedural Generation":
                  "https://arcade.makecode.com/96799-49526-13712-58465",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/procedural-generation/5383?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Set a seed to explore a procedurally generated environment!
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
            images={[{ "Decked Out lobby": imageDeckedOut0 }]}
            title="Decked Out"
            badge=""
            date="Nov 2020"
            gameLinks={[
              {
                "Play Decked Out":
                  "https://arcade.makecode.com/10934-69283-59401-53579",
              },
            ]}
            links={[
              {
                "Game forum post":
                  "https://forum.makecode.com/t/decked-out/4266?u=unsignedarduino",
              },
            ]}
            cardTheme="secondary"
          >
            Run through a dungeon to collect sets of artifacts of differing
            rarities, while escaping monsters!
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

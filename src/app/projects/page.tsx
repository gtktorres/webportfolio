"use client"; // this is a client component 👈🏽
import React from "react";
import '../../styles/client.css'
import Link from "next/link";
import Toxic from "../../components/Project-Images/toxic.png";
import Repaycycle from "../../components//Project-Images/repaycycle.png";
import InteractiveStory from "../../components//Project-Images/InteractiveStory.png";
import github from "../../components//Project-Images/github.ico";
import Image from "next/image";

import styles from '../../styles/page.module.css'

const Projects = () => {
    return (
      <main className={styles.main}>
        <div className="Projects">
          <h5>Projects</h5>
        </div>
        <div className="Border">
          <h3>
            Old-School DnD Interactive Story
            <Link href="https://github.com/gtktorres/StoneMarbel-Old-School-MERNG">
              <Image src={github} height="25" alt="old-school DnD" />{" "}
            </Link>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={InteractiveStory}
              width="300"
              height="300"
              alt="old-school DnD"
            />
          </div>
          <ul>
            <li>
              Worked on a team of 2 that provides an interactive fiction
              application that allows a user to make choices that allow for
              treasure and glory.
            </li>
            <li>
              Implemented with Express and GraphQL for the backend and a mix of
              Twine(Snowman) and React for the frontend. MongoDB for the
              database.
            </li>
          </ul>
        </div>

        <div className="Border">
                <h3>
                  Toxic Comment Model
                  <Link href="https://github.com/GueTorres/Toxic-Comment-Model">
                    <Image src={github} height="25" alt="Toxic Model" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Toxic} height="300" alt="Toxic Model" />
                  </div>
                  <ul>
                    <li>
                      Can identify toxicity in online conversations, where
                      toxicity is defined as anything rude, disrespectful or
                      otherwise likely to make someone leave a discussion
                    </li>
                    <li>
                      Implemented with Python and Tensorflow, the English data
                      provided for the competition trained the model in order to
                      predict toxicity from Wikipedia talk page comments in
                      several different languages.
                    </li>
                  </ul>
            </div>
            <div className="Border">
                <h3>
                  Repaycycle
                  <Link href="https://github.com/GueTorres/RePayCycle">
                    <Image src={github} height="25" alt="Repaycycle" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Repaycycle} height="300" alt="Repaycycle" />
                  </div>   
                  <ul>
                    <li>
                      Our application is designed to associate with upgraded
                      versions of reverse vending recycling machines similar to
                      those found at supermarkets as well as a user&#39;s bank
                      account.
                    </li>
                    <li>
                      A user would log into the app, associate with the specific
                      machine they wish to use, effectively creating a situation
                      where recycling is not only convenient, but also
                      profitable.
                    </li>
                  </ul>
            </div>
      </main>
    );
}

export default Projects;

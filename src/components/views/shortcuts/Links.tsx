import React from "react";
import Expander from "../../common/Expander";

export const Links: React.FC = () => {
  return (
    <div>
      <p>
        This page isn't really meant to be public facing... I just use it to
        keep track of links that need often, usually for classes
      </p>
      <Expander
        open={true}
        summary={<h1>Autumn 2022 shortcuts</h1>}
        content={
          <div>
            <h2>CSE 446</h2>
            <ul>
              <li>
                <a
                  href="https://courses.cs.washington.edu/courses/cse446/22au/"
                  target="_blank"
                >
                  website
                </a>
              </li>
            </ul>
            <br /> <hr />
            <h2>ESS 101</h2>
            <ul>
              <li>
                <a href="https://canvas.uw.edu/courses/1546993" target="_blank">
                  canvas
                </a>
              </li>
            </ul>
            <br /> <hr />
            <h2>CSE 474</h2>
            <ul>
              <li>
                <a
                  href="https://courses.cs.washington.edu/courses/cse474/22au/"
                  target="_blank"
                >
                  website
                </a>
              </li>
              <li>
                <a href="https://edstem.org/us/courses/" target="_blank">
                  ed discussion
                </a>
              </li>
              <li>
                <a href="https://www.gradescope.com/courses/" target="_blank">
                  gradescope
                </a>
              </li>
            </ul>
          </div>
        }
      />

      <Expander
        summary={<h1>Spring 2021 shortcuts</h1>}
        content={
          <div>
            <h2>CSE 341 (TA)</h2>
            <ul>
              <li>
                <a
                  href="https://courses.cs.washington.edu/courses/cse341/22sp/"
                  target="_blank"
                >
                  website
                </a>
              </li>
              <li>
                <a
                  href="https://www.gradescope.com/courses/382080"
                  target="_blank"
                >
                  gradescope
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.cs.washington.edu/cse341-22sp"
                  target="_blank"
                >
                  project gitlab
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1TniC9uSaaOVKMAptCZv-9Os5StWTrt3g?usp=sharing"
                  target="_blank"
                >
                  All publicly available Google drive resources (slides, etc.)
                </a>
              </li>
              <li>
                <a
                  href="https://uw.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=47768993-5ff9-4697-989e-adde00f3e8d7"
                  target="_blank"
                >
                  panopto
                </a>
              </li>
              <li>
                <a
                  href="https://edstem.org/us/courses/21011/discussion/"
                  target="_blank"
                >
                  ed discussion
                </a>
              </li>
              <li>
                <a href="https://discord.gg/8QggdQTZEf" target="_blank">
                  discord
                </a>
              </li>
              <li>
                <a
                  href="https://mattermost.cs.washington.edu/cse341-22sp/channels/town-square"
                  target="_blank"
                >
                  mattermost
                </a>
              </li>
              <li>
                <a
                  href="https://wd5.myworkday.com/uw/d/home.htmld"
                  target="_blank"
                >
                  workday
                </a>
              </li>
            </ul>
            <br /> <hr />
            <h2>CSE 403</h2>
            <ul>
              <li>
                <a
                  href="https://courses.cs.washington.edu/courses/cse403/22sp/"
                  target="_blank"
                >
                  website
                </a>
              </li>
              <li>
                <a href="https://canvas.uw.edu/courses/1546993" target="_blank">
                  canvas
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/colehahn/Study-Buddy"
                  target="_blank"
                >
                  github repo
                </a>
              </li>
              <li>
                <a href="https://cse403-sp22.slack.com/" target="_blank">
                  slack
                </a>
              </li>
            </ul>
            <br /> <hr />
            <h2>CSE 444</h2>
            <ul>
              <li>
                <a
                  href="https://courses.cs.washington.edu/courses/cse444/22sp/"
                  target="_blank"
                >
                  website
                </a>
              </li>
              <li>
                <a href="https://edstem.org/us/courses/21016" target="_blank">
                  ed discussion
                </a>
              </li>
              <li>
                <a
                  href="https://www.gradescope.com/courses/380472"
                  target="_blank"
                >
                  gradescope
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.cs.washington.edu/cse444-22sp/simple-db-colehahn"
                  target="_blank"
                >
                  gitlab
                </a>
              </li>
            </ul>
            <br /> <hr />
            <h2>CSE 371</h2>
            <ul>
              <li>
                <a href="https://canvas.uw.edu/courses/1546981" target="_blank">
                  canvas
                </a>
              </li>
              <li>
                <a
                  href="https://edstem.org/us/courses/21037/discussion/"
                  target="_blank"
                >
                  ed discussion
                </a>
              </li>
              <li>
                <a
                  href="https://www.gradescope.com/courses/377411"
                  target="_blank"
                >
                  gradescope
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  gitlab
                </a>
              </li>
              <li>
                <a href="https://uw.labsland.com/" target="_blank">
                  labsland
                </a>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Links;

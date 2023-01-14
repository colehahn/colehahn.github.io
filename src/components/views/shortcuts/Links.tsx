import React from "react";
import styled from "styled-components";
import MainLink from "./MainLink";
import Expander from "../../common/expander/Expander";
import ExpanderList from "../../common/expander/ExpanderList";

const MainLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  // mimic Expander Style...
  background-color: rgba(0, 0, 0, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5em;
`;

export const Links: React.FC = () => {
  return (
    <div>
      <p>
        I use this page to keep track of all the shortcuts I need for school.
      </p>

      <MainLinkContainer>
        <MainLink
          url="http://my.uw.edu/"
          text="MyUW"
          color="rgba(51,0,111, 0.5)"
          imgSrc="https://my.uw.edu/static/images/favicon.ico"
        />
        <MainLink
          url="http://mail.google.com/mail/u/0/#inbox"
          text="Gmail"
          color="rgba(234, 67, 53, 0.7)"
          imgSrc="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
        <MainLink
          url="https://www.hulu.com/my-stuff/"
          text="Hulu"
          color="rgba(28, 231, 131, 0.7)"
          imgSrc="//assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png"
        />
        <MainLink
          url="https://play.google.com/console/u/0/developers/8612040722949104962/app-list?pli=1"
          text="Play Console"
          color="rgba(59, 204, 255, 0.5)"
          imgSrc="https://www.gstatic.com/images/branding/product/1x/play_devconsole_32dp.png"
        />
        <MainLink
          url="https://calendar.google.com/calendar/u/0/r"
          text="Google Calendar"
          color="rgba(251,188,4,0.7)"
          imgSrc="https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_12.ico"
        />
      </MainLinkContainer>

      <ExpanderList defaultOpen={0}>
        <Expander
          summary={<h1>Winter 2023 shortcuts</h1>}
          content={
            <div>
              <h2>CSE 481D: Games Capstone</h2>
              <ul>
                <li>
                  <a
                    href="https://courses.cs.washington.edu/courses/cse481d/23wi/"
                    target="_blank"
                  >
                    course website
                  </a>
                </li>
                <li>
                  <a
                    href="https://edstem.org/us/courses/32314/discussion/"
                    target="_blank"
                  >
                    ed discussion
                  </a>
                </li>
                <li>
                  <a
                    href="https://doordashacademy-cse481d-wi23.github.io/"
                    target="_blank"
                  >
                    Our game's website
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.slack.com/client/T04HS7VPXS4/C04HF618W65"
                    target="_blank"
                  >
                    Slack
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/channels/@me/1059918018894909460"
                    target="_blank"
                  >
                    Discord group chat
                  </a>
                </li>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1612159"
                    target="_blank"
                  >
                    Canvas
                  </a>
                </li>
              </ul>
              <br /> <hr />
              <h2>CSE 452: Distributed Systems</h2>
              <ul>
                <li>
                  <a
                    href="https://courses.cs.washington.edu/courses/cse452/23wi/"
                    target="_blank"
                  >
                    course website
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.cs.washington.edu/cse452-23wi/dslabs/dslabs-colehahn"
                    target="_blank"
                  >
                    gitlab repo
                  </a>
                </li>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1631077"
                    target="_blank"
                  >
                    canvas for panopto
                  </a>
                </li>
                <li>
                  <a
                    href="https://edstem.org/us/courses/32310/discussion/"
                    target="_blank"
                  >
                    ed board
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gradescope.com/courses/480079"
                    target="_blank"
                  >
                    gradescope
                  </a>
                </li>
                <li>
                  <a href="https://md2pdf.netlify.app/" target="_blank">
                    MD to PDF
                  </a>
                </li>
              </ul>
              <br /> <hr />
              <h2>ATM S 111: Global Warming</h2>
              <ul>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1617031"
                    target="_blank"
                  >
                    Canvas
                  </a>
                </li>
              </ul>
            </div>
          }
        />

        <Expander
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
                    course website
                  </a>
                </li>
                <li>
                  <a
                    href="https://edstem.org/us/courses/29842/discussion/"
                    target="_blank"
                  >
                    ed discussion
                  </a>
                </li>
                <li>
                  <a href="https://www.overleaf.com/project" target="_blank">
                    Overleaf
                  </a>
                </li>
                <li>
                  <a
                    href="https://detexify.kirelabs.org/classify.html"
                    target="_blank"
                  >
                    Detexify
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gradescope.com/courses/451141"
                    target="_blank"
                  >
                    Gradescope
                  </a>
                </li>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1579015"
                    target="_blank"
                  >
                    Canvas
                  </a>
                </li>
                <li>
                  <a
                    href="http://noiselab.ucsd.edu/ECE228/Murphy_Machine_Learning.pdf"
                    target="_blank"
                  >
                    Textbook
                  </a>
                </li>
              </ul>
              <br /> <hr />
              <h2>ESS 101</h2>
              <ul>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1580206"
                    target="_blank"
                  >
                    canvas
                  </a>
                </li>
              </ul>
              <br /> <hr />
              <h2>CSE 474</h2>
              <ul>
                <li>
                  <a
                    href="https://canvas.uw.edu/courses/1578928"
                    target="_blank"
                  >
                    Canvas
                  </a>
                </li>
                <li>
                  <a
                    href="https://edstem.org/us/courses/29568/discussion/"
                    target="_blank"
                  >
                    ed discussion
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.zybooks.com/zybook/WASHINGTONCSE474EE474HusseinFall2022"
                    target="_blank"
                  >
                    Zybooks
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
                  <a
                    href="https://canvas.uw.edu/courses/1546993"
                    target="_blank"
                  >
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
                  <a
                    href="https://canvas.uw.edu/courses/1546981"
                    target="_blank"
                  >
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
      </ExpanderList>
    </div>
  );
};

export default Links;

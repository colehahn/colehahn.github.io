import React from "react";
import styled from "styled-components";
const icon = "/assets/images/alarms_shortcut/shortcuts_icon.png";
const dragndrop = "/assets/images/alarms_shortcut/drag_and_drop.png";
const demo = "/assets/images/alarms_shortcut/demo.gif";
import FixedSizeImg from "../../common/FixedSizeImg";

export const ShortParagraphByFloatingImg = styled.div`
  @media screen and (min-width: 720px) {
    min-height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const AlarmShortcut: React.FC = () => {
  return (
    <div>
      <h4>Background--From Android to iPhone:</h4>
      <p>
        Before this week, I had always had an Android phone. Originally the
        reason I liked them better than iPhones was I felt like they were more
        customizable and compatible with other technology, whereas iPhones have
        their special charging cables, you can't take out the batteries, and you
        can't just plug into your computer and transfer files unless you
        download iTunes or iCloud or iSomething on your MacBook. I didn't like
        how it feels like Apple forces you to use all their technology, and how
        iPhone-users act like they're part of some exclusive club that is better
        than all the other clubs.
      </p>
      <p>
        Over time though, my Samsung phones became more and more like the
        iPhones. When I went from an S5 to S8, I lost the super cool IR blaster
        feature that let me use my phone as a universal TV remote. When I
        upgraded to an S8, I could no longer replace the battery once it got
        old, because the back of the phone wasn't detachable. The S10 left
        behind the notification LED that let me see if I had notifications
        without even picking up my phone. And so, after my S10's battery was
        dying extremely fast, due to the pressure of all my Apple-loving
        friends, I got an iPhone 14 Plus.
      </p>
      <p>
        My bias against Apple aside, I went into the big switch with a positive
        mindset, because I know that any new iPhone can probably do everything a
        new Android can do. After about a week though, I thought "No, this new
        phone is strictly worse than my old one". This wasn't true though, and I
        realized that there were just a few small things that I wished my new
        phone could do. My biggest complaints were as follows:
      </p>
      <ul>
        <li>
          I want the home screen to open immediately after using facial
          recognition, without needing to swipe up.
        </li>
        <li>
          I want to be able to change the volume of my alarm (maybe this is
          possible, I just don't know how because there seems to be only one
          volume option, unlike on my old phone where I could set volumes for
          ringtone, notifications, media, and alarms all separately)
        </li>
        <li>
          When setting an alarm, I want my phone to tell me how long until it
          goes off. This was the default on my old phone, and it's nice so that
          I know right away how much sleep I will be able to get
        </li>
        <li>
          No headphone jack, and Apple doesn't send the phone with a USB
          converter
        </li>
      </ul>

      <h4>The solution</h4>
      <FixedSizeImg
        width={100}
        height={100}
        src={icon}
        positionStyle={{ float: "right", margin: "20px" }}
      />
      <p>
        As I was setting up my new phone, I came across an app called Shortcuts,
        which is for automating tasks! I was super excited about this, because I
        had used automation with my old phones to do things like turn off WiFi
        when leaving home, send reminders for certain notifications, and so on.
        I realized that I could use these shortcuts to fix some of the problems
        I had with the default Clock app. (Alternatively, I could have
        downloaded a separate alarm app from the App Store, but I thought it
        would be nice to have a solution catered to my exact needs, and it would
        serve as a good introduction to automation on my new phone!)
      </p>
      <h4>Overview of writing shortcuts:</h4>
      <FixedSizeImg
        width={139}
        height={300}
        src={dragndrop}
        positionStyle={{ float: "right", margin: "20px" }}
      />
      <ShortParagraphByFloatingImg>
        <p>
          The shortcuts app offers a drag-and-drop technique of programming your
          own shortcuts, building with a fairly large library of actions. 3rd
          party apps can also add their own actions (Instagram has an action to
          make a post, Lyft has an action to request a ride, etc), which is
          super great for developers. Apple allows you to run your shortcuts
          manually, add shortcuts to your home screen, or have them triggered
          automatically on certain events, like opening a certain app, time of
          day, etc.
        </p>
      </ShortParagraphByFloatingImg>
      <h4 style={{ clear: "both" }}>Final result:</h4>
      <FixedSizeImg
        width={139}
        height={300}
        src={demo}
        positionStyle={{ float: "right", margin: "20px" }}
      />
      <ShortParagraphByFloatingImg>
        <p>
          What I ended up doing was creating an Alarms shortcut that essentially
          takes the place of the default Clock app. When you click it you are
          prompted to choose what alarm you want to turn on, and when you select
          one, it sets your alarm and displays how many hours and minutes until
          the alarm goes off. It also allows you to create a new alarm if you
          don't have one for the time you want.
        </p>
        <p>
          If you'd like to use the shortcut, or just look at it for inspiration,
          feel free to download it from{" "}
          <a
            href="https://www.icloud.com/shortcuts/8cbf711741c4411499906f6b6ae3ea38"
            target="_blank"
          >
            here
          </a>
          ! (link for iPhone/iPad/MacOS? only, sorry non-Apple people)
        </p>
      </ShortParagraphByFloatingImg>
      <h4 style={{ clear: "both" }}>Limitations:</h4>
      <p>
        Originally, I didn't want to create a whole new interface for setting
        alarms, but just add the bit that says how long until the alarm goes
        off. Unfortunately, due to limitations of the Apple-provided shortcut
        actions, it isn't possible. (You can get a list of all of your alarms,
        but there is no way to see whether an alarm is on or not, so the only
        way my shortcut can know is if I also set the alarms through the
        shortcut.)
      </p>
    </div>
  );
};

export default AlarmShortcut;

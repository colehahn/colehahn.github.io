import React from "react";
import { StyledImg } from "../../../pages/projects";
const acrylic = "/assets/images/keyboard/acrylic.jpg";
const cut_fail = "/assets/images/keyboard/cut_fail.jpg";
const cutting = "/assets/images/keyboard/cutting.gif";
const cutout = "/assets/images/keyboard/cutout.jpg";
const print_fail = "/assets/images/keyboard/print_fail.jpg";
const print = "/assets/images/keyboard/3d_print.jpg";
const keycaps = "/assets/images/keyboard/keycaps.jpg";
const painted = "/assets/images/keyboard/painted.jpg";
const solder = "/assets/images/keyboard/solder.jpg";
const finished = "/assets/images/keyboard/finished.jpg";

export const Keyboard: React.FC = () => {
  return (
    <div>
      <h4>Motivation</h4>
      <p>
        For a long time, I was frustrated with the arbitrary-ness of the
        standard keyboard layout. Why do we need two thumbs for the spacebar?
        Why aren't the most commonly used letters in the home row so that we
        don't need to move our fingers as much? Can I reprogram my keyboard to
        make certain characters easier to reach?
      </p>
      <p>
        Researching this only made me more frustrated. The QWERTY layout was
        first used on typewriters, and apparently the most commonly used letters
        were spaced out strategically to prevent the typewriter from jamming.
        Clearly, this is not an issue that we need to worry about any more, but
        since everyone is so used to the layout, there isn't enough reason to
        change the way keyboards are made.
      </p>
      <p>
        There are some alternative keyboard layouts, like Colemak and Dvorak, so
        of course I wanted to try something new. Unfortunately, I couldn't find
        an easy way to just reprogram my laptop keyboard, so I would need to buy
        a new one. When researching keyboards, I discovered split keyboards and
        knew I needed to get one. It makes no sense to have our hands so
        restricted when we type! Surely this would help relieve pains from
        awkward angles. I also discovered the mechanical keyboard community,
        where lots of people like me wanted more ergonomic solutions, but most
        people just seemed to care about the "thonk" that a keyboard makes when
        you type.
      </p>
      <p>
        Finally, I found a great ergonomic split keyboard. The{" "}
        <a href="https://www.zsa.io/moonlander/">ZSA Moonlander</a>. It was
        everything I wanted--only problem? I was a broke college kid, and did
        not have $350 to drop on a new keyboard that I didn't need. Before long,
        I realized that it would be much cheaper to make my own keyboard, which
        I had seen many other people on the internet do. I decided to go with a{" "}
        <a href="https://keeb.io/collections/iris-split-ergonomic-keyboard">
          Keebio Iris
        </a>
        : I would buy the circuit board, and make the rest of the keyboard on my
        own.
      </p>
      <h4>Laser cutting</h4>
      <p>
        The first step was to make a case for the keyboard (the housing that
        holds together the circuit board and keys). Since the PCB I got had
        lights, I wanted it to be somewhat translucent. I ended up going with
        3mm smokey-colored acrylic.
      </p>
      <StyledImg src={acrylic} />
      <p>
        Once I had this, I had to figure out how to cut it to perfectly match
        the PCB size and shape. Keebio publishes all of their drawings and files
        for 3-D printing and laser cutting, so that was no problem. What was a
        problem is that I had never used a laser cutter before. I had access to
        some through school though, so I decided to give it a go!
      </p>
      <StyledImg src={cutting} />
      <p>
        I arranged the drawings onto a sheet the size of the acrylic that I had
        using a technical drawing software called AutoCad, which I had never
        used before. (I beleive Adobe Illustrator might have been a better
        choice since that's what the laser cutters wanted, but I was able to
        convert the files so that it worked.) Unfortunately, the cutting didn't
        go as smoothly as I hoped. The keyboard outline didn't cut all the way
        through the acrylic (always do thorough test cuts, people). At first, I
        thought I would be able to just pop it out, but acrylic is hard stuff,
        and wouldn't break how I wanted it to, even after scoring it with a
        razor blade. Eventually, I decided it was easiest to just try cutting it
        out again, but this time I boosted the power on the laser cutter so that
        I wouldn't make the same mistake again.
      </p>
      <StyledImg src={cutout} />
      <p>
        Now that I had my case complete, I needed to add switches to my keyboard
        and put it together!
      </p>
      <h4>Switches</h4>
      <p>
        Switches are the physical buttons that are depressed in order to
        complete a circuit under the hood in your keyboard. The type of switches
        used for a keyboard is a hot topic amungst mechanical keyboarders. They
        are categorized by there color, and each color has a different feel to
        it. Blue switches are notoriously "clicky", red switches are "linear",
        meaning they depress smoothly. Some people compromise with brown
        switches, which are described as "tactile"--somewhere between clicky and
        linear. As many videos I watched and reviews I read, I felt like I
        couldn't make this decision until I had actually felt what they feel
        like. I went to my local Best Buy, and as it happened, they had a
        plethora of keyboards, and even a tester with a few different switches
        on it. I tried each one, and my thoughts were as follows.
      </p>
      <ul>
        <li>
          <span style={{ color: "blue" }}>Blue:</span> wow that is super loud,
          why would I want to hear that noise multiple times a second.
        </li>
        <li>
          <span style={{ color: "brown" }}>Brown:</span> this one just feels
          loose and sloppy, like that slight bump doesn't belong.
        </li>
        <li>
          <span style={{ color: "red" }}>Red:</span> wow this presses down
          really easily.
        </li>
        <li>
          <span style={{ color: "gray" }}>Silver:</span> I can't tell the
          difference between this and the red.
        </li>
      </ul>
      <p>
        Since I discovered linear switches are superior, I decided to buy
        yellows, as they have a higher actuation force than reds and silvers.
        Once my{" "}
        <a href="https://kbdfans.com/products/gateron-yellow-switches">
          Gateron Yellows
        </a>{" "}
        came in the mail, I was super excited to get them on my keyboard so that
        I could start typing!
      </p>
      <h4>Soldering</h4>
      <p>
        The switches have to be soldered onto the PCB so that they are connected
        electrically. Since the Iris has 56 keys and each has two contacts, that
        is 112 points that needed to be soldered! I hadn't soldered much before,
        so this made for some great practice for me. After this, it was finally
        starting to look like a keyboard, and I just needed keycaps!
      </p>
      <StyledImg src={solder} />

      <h4>Keycaps</h4>
      <p>
        I decided to 3-D print my keycaps instead of buying them for a few
        reasons: first, since they are easily replacable (unlike switches), the
        decision wouldn't be permanent and I could always upgrade later. Second,
        for the sake of making this a true DIY project (and save more money), I
        decided to learn how to use 3-D printers as well.
      </p>
      <StyledImg src={print_fail} />
      <p>
        Most of the time, when you 3-D print somehting, it is not as small and
        intricate as a single keycap. I had some troubles getting them to print
        right and fit on the stems of the switches, but eventually, I came up
        with a technique that worked: I printed the keycaps as empty shells, and
        separately printed tiny connectors that I glued into each keycap so that
        they could connect to the stem on the switches.
      </p>
      <StyledImg src={print} />
      {/*TODO:  GIVE CREDIT TO THINGIVERSE GUY*/}
      <p>
        As if that wasn't tedious enough though, I also decided to label each
        keycap with its letter/character, which required me to create a separate
        3-D model with each letter engraved, and print all of them. I later
        filled these engravings with white paint, which was EXTREMELY tedious
        work.
      </p>
      <StyledImg src={painted} />

      <h4>Final product</h4>
      <StyledImg src={finished} />
      <p>
        With the keycaps complete, I finally had a usable keyboard!! So much
        work went into it, and it is far from perfect, but I learned a lot in
        the process. The layout of the keyboard took some getting used to, since
        it is both split and ortholinear (keys aren't staggered). After a bit of
        practice, I'm able to type much more quickly on it, and my favorite part
        is that I am free to reprogram it, moving around different characters as
        I desire :)
      </p>
      <h4>QMK and layout</h4>
      <p>
        This keyboard came pre-flashed so that it was compatible with VIA, which
        allows you to easily reprogram different keys through the VIA
        application. I used this for a year or two, and it was nice because it
        was super easy to use. However, I eventually decided that it was not
        enough for me, because I wanted more specific customizations. For this,
        I needed to use QMK, which would allow me to write code to run on each
        keypress, and customize functions and my layout. I thought QMK would be
        difficult to use, but their documentation is really nice and it was easy
        to get started! My current keymap can be found{" "}
        <a href="https://github.com/colehahn/colehahn-iris-keymap">here</a>.
      </p>
    </div>
  );
};

export default Keyboard;

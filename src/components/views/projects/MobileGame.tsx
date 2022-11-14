import React from "react";
import { StyledImg } from "./Projects";

export const MobileGame: React.FC = () => {
  return (
    <div>
      <h4>Why make a game?</h4>
      <p>
        I wanted to make a game, mostly just to get practice in an area that I
        wansn't familiar with and hopefully be able to have people download my
        App. Notably, the idea to make a game came before the game idea, which
        in general is not a good strategy.
      </p>
      <h4>original idea:</h4>
      <p>
        I wanted to allow users to mix paints in order to match a certain color,
        as if they were painting. Once I got started, this idea evolved so that
        users would be attempting to create different paintings, and as they mix
        each color, it is added onto their painting.
      </p>
      <h4>The challenges of subtractive color mixing:</h4>
      <p>
        At first, I just had colors mixing additively, by adjusting the reg,
        green, and blue values that make up the color. When I set out to
        research how paint mixes together, I realized that it was much more
        complex, and I wasn't sure how to model it. Fortunately, after quite a
        bit of research into color modeling, I found <a href="">this</a>{" "}
        website, created by Steve Burns. This website had all of the information
        I needed, condensed into one place. It allowed me to model mixing colors
        subtractively like paint, instead of additively, like light. Steve also
        linked to some resources to the data for a wide variety of paint colors,
        which gave me the idea to have different paints as unlockables in the
        game, so that users could change their palette, just like in real life.
      </p>
      <h4>unity</h4>
      <p>
        When deciding on a way to develop my app, I found that Unity was one of
        the most commonly used and versatile game engines. It took a bit to
        learn it at first, but after several tutorials and many youtube videos
        (my favorite series was from <a href="">Brackeys</a>), I was able to get
        the hang of it, and get a simple app with some buttons working, and run
        it on my phone. After that, I continued to add features, and I had to do
        lots and lots of bug fixes along the way.
      </p>
      <h4>implementation, challenges</h4>
      <p>...</p>
      <h4>Level creation, Gimp, and Scheme</h4>
      <p>
        In order to create the paintings to use as levels for the game, I had to
        start with an image, split it into some number of discrete regions of
        colors, and then save each of these regions as a separat image. This was
        a very tedious manual process, and I knew it wasn't reasonable to make
        all of the levels by hand. Fortunately, Gimp, the open-source image
        manipulation program that I was using, makes it super easy to create
        your own plugins that can script tasks in order to automate your
        workflow. I was hesitant to jump into this at first, but once I actually
        read the documentation for <a href="">script-fu</a>, I was very excited
        to learn that I could write scripts using Scheme, a Lisp-like
        programming language. While this might not be exciting to most people,
        it just so happens that one of my favorite classes that I had taken was
        Programming Languages, where we used a similar language, called Racket.
        (Thank you James!) Before long, all the nested parentheses became very
        comforting, and I was able to create a relatively powerful{" "}
        <a href="">script</a>, so that my entire level-creation process was just
        running one or two commands.
      </p>
      <h4>publishing, google play vs apple</h4>
      <p>
        I was very eager to get my game published so that it was available for
        anybody to download, even if it wasn't totally well-polished and
        complete. I found that in order to publish on the Google Play Store, I
        needed only to pay a $20 or so developer registration fee, but on the
        Apple App Store, I would need to pay a monthly fee. Since I don't expect
        to make money off of this game, I didn't want to start paying a monthly
        subscription, so I stuck with only Google Play. Learning to use the
        Google Play Developer Console was a whole new thing, and I had to do
        lots of setup, keep information up to date, and publish releases when I
        wanted to update my app.
      </p>
      <h4>current version</h4>
      <p>...</p>
      <h4>overall learnings and reflection</h4>
      <p>
        My game is certainly still a work in progress, but I have learned lots
        of things by working on it. Specifically, I had to jump into new
        software like Unity, I got practice working on a medium/large-scale
        software project for the first time, got lots of practice reading
        documentation for Unity and script-fu, outlined the user-experience and
        designed a user-interface (something I still need to work on), and got
        my code published so that it is actually user-facing!
      </p>
    </div>
  );
};

export default MobileGame;

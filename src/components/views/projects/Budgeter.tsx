import React from "react";
import FixedSizeImg from "../../common/FixedSizeImg";

const sampleplot = "/assets/images/budgeter/sample-plot.png";

export const Budgeter: React.FC = () => {
  return (
    <div>
      <p>
        I have always been a frugal person, and I think it's important to keep
        track of your finances. When I searched for budgetting tools online, I
        found that they just weren't exactly what I was looking for. And so, I
        set out to make my own.
      </p>
      <p>
        At first, I thought I would write this in VBA. I suppose finances made
        me think of excel sheets and it would make sense to do it that way.
        However, after trying to figure out how to get started, I decided that
        VBA is dead, and python is today's go-to for simple projects for a
        reason.
      </p>
      <p>
        I made a simple tool that allows you to enter your sources of income as
        well as your recurring costs, and plots the amount of money you have
        over time. Here is a sample output plot:
      </p>
      <FixedSizeImg
        positionStyle={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        width={500}
        height={375}
        src={sampleplot}
      />
      <p>
        Ideally I would embed this tool in the website here, but because of
        limitations of matplotlib and pyscript, I recommend you just{" "}
        <a href="/assets/python/budgeter.py" download>
          download it
        </a>{" "}
        and run it locally. (Porting it to js will probably be pretty simple, if
        I ever get around to it in the future.)
      </p>
    </div>
  );
};

export default Budgeter;

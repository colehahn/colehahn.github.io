import React from "react";
import FixedSizeImg from "../../common/FixedSizeImg";
const sqlphoto = "/assets/images/gmail_sql/sqlite-screenshot.png";
const codephoto = "/assets/images/gmail_sql/python_script.png";

export const GmailSQL: React.FC = () => {
  return (
    <div>
      <p>
        Ever since Google put a cap on free cloud storage, I knew the day would
        come when I have to back up my photos elsewhere. That day is quickly
        approaching, but before I move all of my photos off of the cloud, I
        decided I should go through and delete my emails first, since I had over
        12,000 unopened emails and 2.5GB of data in my inbox.
      </p>
      <p>
        Before I went crazy and deleted all my emails though, I wanted to do
        some analysis. I wanted to see where all these emails are coming from!
        For example, I wanted to be able to see a breakdown of the top 10
        senders in my inbox along with how many emails I have from them.
      </p>
      <p>
        I found that Google lets you export your data, and I was able to obtain
        all of my emails in a .mbox file format. From there, I was planning on
        converting it to a csv or something else that I could open in excel, but
        there weren't really any easy-to-use file converters that would do the
        conversion for me. Fortunately, I stumbled on a{" "}
        <a href="https://stackoverflow.com/questions/65717822/how-to-convert-mbox-into-csv-format-using-python">
          stackoverflow post
        </a>{" "}
        that had some python code that was supposed to read in a .mbox file and
        output a .csv.
      </p>
      <p>
        I took that code, made some changes so that it worked, and added a
        progress bar because it was taking a long time for me to run my script.
      </p>
      <FixedSizeImg width={550} height={489} src={codephoto} />
      <p>
        Once I had my email data in comma-separated-value format, I could have
        just opened it in excel and used a few functions to sort, group, and
        count emails. Instead, I downloaded SQLite so that I could easily make
        queries on the data.
      </p>
      <FixedSizeImg width={400} height={163} src={sqlphoto} />
      <p>
        Finally, I was able to answer the simple question of "who is sending me
        the most emails?". That way, I could easily bulk-delete by sender, and
        also unsubscribe from unwanted emails.
      </p>
    </div>
  );
};

export default GmailSQL;

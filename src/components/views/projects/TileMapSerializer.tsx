import React from "react";
import CopyCode from "../../common/CopyCode";
import TilemapSerializer from "../../../formattedCode/TilemapSerializer/TilemapSerializer";
import TilemapSerializerInspector from "../../../formattedCode/TilemapSerializer/TilemapSerializerInspector";
import OnEditorSave from "../../../formattedCode/TilemapSerializer/OnEditorSave";
import CustomBuildProcessor from "../../../formattedCode/TilemapSerializer/CustomBuildProcessor";
import RemoveUnusedTiles from "../../../formattedCode/TilemapSerializer/removeUnusedTiles";
import styled from "styled-components";
import { colors } from "../../../color-theme";

const StyledTable = styled.table`
  margin: 1em 0;
  border: 1px solid;
  background-color: ${colors["background"]};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors["background-dark"]};
  }
  text-align: center;
  & thead tr th {
    border-left: 1px solid;
    border-right: 1px solid;
  }
  & thead {
    outline: 2px solid;
  }
  & tbody tr td {
    border-bottom: 1px dashed;
  }
`;

export const TileMapSerializer: React.FC = () => {
  return (
    <div>
      <p>
        A while ago, I was working on a 2D game in Unity, and we were using
        Tilemaps to create the world. Tilemaps work very well and are great for
        designing maps. However, the problem we ran into was once we made our
        full map, the the scene file was very large (over 100mb, which meant we
        would have to use GitHub's Large File Storage, which seemed
        unnecessary).
      </p>
      <p>
        To resolve this, I decided to make a Tilemap serializer, which would
        process the Tilemap data and save it more efficiently in a separate
        file. My solution involved writing a few different scripts, each of
        which I will briefly explain, followed by a few examples to consider how
        effectively it worked.
      </p>
      <p>
        The first is the main serializer code. It is not overly complex, and
        could definitely be optimized, but it worked well enough for our
        project. To use it, it needs to be added the the Grid that is the parent
        of the Tilemaps. It has public methods ClearTileMaps(), LoadTilemap(),
        and SaveChanges(), which are all pretty self explanatory. To actually
        save the data, it loops over a Tilemap, and saves the name of the tile
        in each grid space. This list of names is then writted to a file.
      </p>
      <CopyCode content={TilemapSerializer} title="TilemapSerializer.cs" />
      <p>
        Next, I needed a way to actually call these functions from the Unity
        Editor. I wasn't sure how to do this at first, but after a quick search
        I found that you can override the default script view in the editor.
        With this, I was able to add buttons that let you directly save/load the
        Tilemap into the scene.
      </p>
      <CopyCode
        content={TilemapSerializerInspector}
        title="TilemapSerializerInspector.cs"
      />
      <p>
        At first, I had a button to save the Tilemap in the previous script. I
        wasn't fully satisfied with this though, because then anybody on my team
        that worked on the Tilemap had to remember to click the extra save
        button, and we would like to be as developer-friendly as possible.
        However, I found that you can override Unity's default save behavior, so
        I added an extra script that runs automatically whenever you save.
      </p>
      <CopyCode content={OnEditorSave} title="OnEditorSave.cs" />
      <p>
        At this point, my solution seemed pretty complete. It is easy to use,
        and effectively reduces file size when using large Tilemaps. There was
        just one issue, which arose when it came time to actually build our
        game. Since we were using Github Actions to create our builds, we needed
        the scene files to include the Tilemap data at build time. Similar to
        the previous script, I wrote a script that runs at build time, which
        automatically calls the LoadTilemap() function so that our builds don't
        have empty Tilemaps.
      </p>
      <CopyCode
        content={CustomBuildProcessor}
        title="CustomBuildProcessor.cs"
      />
      <p>
        Finally, we should look at how well this technique actually worked. In
        the following table, I recorded some statistics from two different
        tilemaps. For both of them, you can see that we had about 80% storage
        savings, which is very significant, especially for the larger Tilemap.
      </p>
      <p>
        There is really just one major drawback though, and that is the time
        that it took to load the Tilemaps in. Whether this is acceptable really
        depends on your usage. For us, we didn't need to edit the Tilemap often,
        so it was very rare that anyone actually needed to wait for it to load.
      </p>
      <StyledTable>
        <thead>
          <tr>
            <th>Tilemap grid size</th>
            <th>Scene size before</th>
            <th>Scene size after</th>
            <th>Size of serialized file</th>
            <th>Percent storage savings</th>
            <th>Time to load Tilemap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>146 x 104</td>
            <td>7.8 mb</td>
            <td>910 kb</td>
            <td>804 kb</td>
            <td>77.9 %</td>
            <td>
              <s>1 min</s>12 sec
            </td>
          </tr>
          <tr>
            <td>593 x 498</td>
            <td>140.4 mb</td>
            <td>1.4 mb</td>
            <td>15.1 mb</td>
            <td>88.2 %</td>
            <td>
              <s>14 min</s>3 min
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <p>
        Since the script has to look through all of the Tiles in your Resource
        folder, it goes slower the more tiles you have in your project. In our
        case, we had a whopping 1818 Tiles! 😬 (We imported a very large asset
        pack, and somehow all the tiles got added a second time, and nobody
        bothered to fix it.)
      </p>
      <p>
        After running a quick python script (provided below) to delete all of
        the tiles that were unused (this left us with only 412 Tiles), the load
        times were DRASTICALLY decreased. The smaller Tilemap took only 12
        seconds to load, and the larger one took 3 minutes instead of 14.
      </p>
      <CopyCode content={RemoveUnusedTiles} />
    </div>
  );
};

export default TileMapSerializer;

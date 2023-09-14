export const RemoveUnusedTiles = (
  <div>
    import&nbsp;os
    <br />
    import&nbsp;json
    <br />
    <br />
    files&nbsp;=&nbsp;[]
    <br />
    path&nbsp;=&nbsp;"C:\\path\\to\\Assets\\Resources\\TilemapData"
    <br />
    for&nbsp;r,&nbsp;d,&nbsp;f&nbsp;in&nbsp;os.walk(path):
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;file&nbsp;in&nbsp;f:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;file.endswith(".txt"):
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;files.append(os.path.join(r,&nbsp;file))
    <br />
    <br />
    usedTiles&nbsp;=&nbsp;set()
    <br />
    for&nbsp;filename&nbsp;in&nbsp;files:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;=&nbsp;open(filename)
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;parsed&nbsp;=&nbsp;json.load(f)
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;tiles&nbsp;=&nbsp;parsed["data"]
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;tile&nbsp;in&nbsp;tiles:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;tile&nbsp;!=&nbsp;"":
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usedTiles.add(tile)
    <br />
    #&nbsp;print(usedTiles)
    <br />
    <br />
    tilepath&nbsp;=&nbsp;"C:\\path\\to\\Assets\\Resources\\Tiles"
    <br />
    for&nbsp;r,&nbsp;d,&nbsp;f&nbsp;in&nbsp;os.walk(tilepath):
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;file&nbsp;in&nbsp;f:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;file.split(".")[0]&nbsp;not&nbsp;in&nbsp;usedTiles:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.remove(os.path.join(r,&nbsp;file))
    <br />
  </div>
);

export default RemoveUnusedTiles;

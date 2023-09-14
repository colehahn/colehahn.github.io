export const TilemapSerializer = (
  <div>
    #if&nbsp;UNITY_EDITOR
    <br />
    using&nbsp;System.Collections;
    <br />
    using&nbsp;System.Collections.Generic;
    <br />
    using&nbsp;UnityEngine;
    <br />
    using&nbsp;UnityEngine.Tilemaps;
    <br />
    using&nbsp;System.IO;
    <br />
    using&nbsp;UnityEngine.SceneManagement;
    <br />
    using&nbsp;UnityEditor;
    <br />
    using&nbsp;UnityEditor.SceneManagement;
    <br />
    <br />
    {"/"}
    *&nbsp;The&nbsp;purpose&nbsp;of&nbsp;this&nbsp;script&nbsp;is&nbsp;to&nbsp;allow&nbsp;us&nbsp;to&nbsp;use&nbsp;very&nbsp;large&nbsp;tilemaps&nbsp;without&nbsp;having&nbsp;very&nbsp;large&nbsp;scene&nbsp;files.
    <br />
    &nbsp;*&nbsp;It&nbsp;saves&nbsp;the&nbsp;tilemap&nbsp;data&nbsp;in&nbsp;a&nbsp;more&nbsp;space-efficient&nbsp;way&nbsp;in&nbsp;a&nbsp;separate&nbsp;file,&nbsp;instead&nbsp;of&nbsp;saving&nbsp;many&nbsp;objects
    <br />
    &nbsp;*&nbsp;in&nbsp;the&nbsp;scene.&nbsp;It&nbsp;should&nbsp;be&nbsp;attached&nbsp;to&nbsp;the&nbsp;Grid&nbsp;object&nbsp;that&nbsp;is&nbsp;the&nbsp;parent&nbsp;of&nbsp;the&nbsp;tilemaps.
    <br />
    &nbsp;*{"/"}
    <br />
    public&nbsp;class&nbsp;TilemapSerializer&nbsp;:&nbsp;MonoBehaviour
    <br />
    {"{"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;ClearTileMaps()&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach(Transform&nbsp;child&nbsp;in&nbsp;gameObject.transform)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tilemap&nbsp;tileMap&nbsp;=&nbsp;child.GetComponent
    {"<"}Tilemap{">"}();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(tileMap&nbsp;==&nbsp;null)&nbsp;continue;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tileMap.ClearAllTiles();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"/"}
    {"/"}
    &nbsp;load&nbsp;in&nbsp;the&nbsp;tilemap&nbsp;data&nbsp;from&nbsp;save&nbsp;file&nbsp;so&nbsp;that&nbsp;it&nbsp;can&nbsp;be&nbsp;edited
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;LoadTilemap()
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;path&nbsp;=&nbsp;"TilemapData
    {"/"}"&nbsp;+&nbsp;SceneManager.GetActiveScene().name;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TextAsset[]&nbsp;JsonFiles&nbsp;=&nbsp;Resources.LoadAll
    {"<"}TextAsset{">"}(path);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debug.Log("tried&nbsp;path&nbsp;"&nbsp;+&nbsp;path&nbsp;+&nbsp;".&nbsp;found&nbsp;"+&nbsp;JsonFiles.Length);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tile[]&nbsp;tiles&nbsp;=&nbsp;Resources.LoadAll
    {"<"}Tile{">"}("Tiles");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dictionary{"<"}
    string,&nbsp;Tile{">"}&nbsp;tileCache&nbsp;=&nbsp;new&nbsp;Dictionary{"<"}
    string,&nbsp;Tile{">"}();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;
    {"<"}&nbsp;JsonFiles.Length;&nbsp;i++)&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debug.Log("processing&nbsp;file&nbsp;"+&nbsp;JsonFiles[i].name);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tilemap&nbsp;tileMap&nbsp;=&nbsp;GameObject.Find(JsonFiles[i].name).GetComponent
    {"<"}Tilemap{">"}();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TileMapData&nbsp;mapData&nbsp;=&nbsp;JsonUtility.FromJson
    {"<"}TileMapData{">"}(JsonFiles[i].text);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minX&nbsp;=&nbsp;mapData.minX;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxX&nbsp;=&nbsp;mapData.maxX;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minY&nbsp;=&nbsp;mapData.minY;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxY&nbsp;=&nbsp;mapData.maxY;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minZ&nbsp;=&nbsp;mapData.minZ;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxZ&nbsp;=&nbsp;mapData.maxZ;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;x&nbsp;=&nbsp;minX;&nbsp;x&nbsp;
    {"<"}&nbsp;maxX;&nbsp;x++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;y&nbsp;=&nbsp;minY;&nbsp;y
    {"<"}&nbsp;maxY;&nbsp;y++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;z&nbsp;=&nbsp;minZ;&nbsp;z&nbsp;
    {"<"}&nbsp;maxZ;&nbsp;z++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;neededTile&nbsp;=&nbsp;mapData.data[(x-minX)&nbsp;+&nbsp;(maxX-minX+1)&nbsp;*&nbsp;((y-minY)&nbsp;+&nbsp;(maxY-minY+1)&nbsp;*&nbsp;z)];
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(tileCache.ContainsKey(neededTile))&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tileMap.SetTile(new&nbsp;Vector3Int(x,y,z),&nbsp;tileCache[neededTile]);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}&nbsp;else&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;
    {"<"}&nbsp;tiles.Length;&nbsp;j++)&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(tiles[j].name&nbsp;==&nbsp;neededTile)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tileMap.SetTile(new&nbsp;Vector3Int(x,y,z),&nbsp;tiles[j]);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tileCache[neededTile]&nbsp;=&nbsp;tiles[j];
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j&nbsp;=&nbsp;tiles.Length;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"/"}
    {"/"}
    &nbsp;save&nbsp;the&nbsp;current&nbsp;state&nbsp;of&nbsp;the&nbsp;tilemaps&nbsp;to&nbsp;the&nbsp;save&nbsp;file,&nbsp;overwriting&nbsp;anything&nbsp;there
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;SaveChanges()
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;path&nbsp;=&nbsp;Path.Combine(Application.dataPath,&nbsp;"Resources");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path&nbsp;=&nbsp;Path.Combine(path,&nbsp;"TilemapData");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path&nbsp;=&nbsp;Path.Combine(path,&nbsp;SceneManager.GetActiveScene().name);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(!Directory.Exists(path))
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Directory.CreateDirectory(path);&nbsp;
    {"/"}
    {"/"}
    &nbsp;Create&nbsp;the&nbsp;directory&nbsp;if&nbsp;it&nbsp;doesn't&nbsp;exist
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debug.Log("Created&nbsp;directory:&nbsp;"&nbsp;+&nbsp;path);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bool&nbsp;didSave&nbsp;=&nbsp;false;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach(Transform&nbsp;child&nbsp;in&nbsp;gameObject.transform)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;didSave&nbsp;|=&nbsp;saveTileMap(child.gameObject,&nbsp;path);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(didSave)&nbsp;Debug.Log("saved&nbsp;contents&nbsp;of&nbsp;tilemap&nbsp;into&nbsp;TilemapData&nbsp;folder");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AssetDatabase.Refresh();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"/"}
    {"/"}
    &nbsp;returns&nbsp;whether&nbsp;the&nbsp;tilemap&nbsp;was&nbsp;actually&nbsp;saved
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;bool&nbsp;saveTileMap(GameObject&nbsp;obj,&nbsp;string&nbsp;path)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tilemap&nbsp;tileMap&nbsp;=&nbsp;obj.GetComponent
    {"<"}Tilemap{">"}();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(tileMap&nbsp;==&nbsp;null)&nbsp;return&nbsp;false;
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"/"}
    {"/"}
    &nbsp;Debug.Log("tilemap&nbsp;"&nbsp;+&nbsp;obj.name&nbsp;+&nbsp;"&nbsp;has&nbsp;size&nbsp;"&nbsp;+&nbsp;tileMap.size&nbsp;+&nbsp;"&nbsp;and&nbsp;cellBounds&nbsp;"&nbsp;+&nbsp;tileMap.cellBounds&nbsp;+&nbsp;"&nbsp;and&nbsp;localBounds&nbsp;"+&nbsp;tileMap.localBounds);
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path&nbsp;=&nbsp;Path.Combine(path,&nbsp;obj.name&nbsp;+&nbsp;".txt");
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minX&nbsp;=&nbsp;tileMap.cellBounds.min.x;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxX&nbsp;=&nbsp;tileMap.cellBounds.max.x;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minY&nbsp;=&nbsp;tileMap.cellBounds.min.y;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxY&nbsp;=&nbsp;tileMap.cellBounds.max.y;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;minZ&nbsp;=&nbsp;tileMap.cellBounds.min.z;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;maxZ&nbsp;=&nbsp;tileMap.cellBounds.max.z;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string[]&nbsp;data&nbsp;=&nbsp;new&nbsp;string[(maxX-minX&nbsp;+&nbsp;1)*(maxY-minY&nbsp;+&nbsp;1)*(maxZ-minZ&nbsp;+&nbsp;1)];
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bool&nbsp;shouldSave&nbsp;=&nbsp;false;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;x&nbsp;=&nbsp;minX;&nbsp;x&nbsp;
    {"<"}&nbsp;maxX;&nbsp;x++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;y&nbsp;=&nbsp;minY;&nbsp;y
    {"<"}&nbsp;maxY;&nbsp;y++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;z&nbsp;=&nbsp;minZ;&nbsp;z&nbsp;
    {"<"}&nbsp;maxZ;&nbsp;z++){"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TileBase&nbsp;tile&nbsp;=&nbsp;tileMap.GetTile(new&nbsp;Vector3Int(x,y,z));
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(tile&nbsp;==&nbsp;null)&nbsp;continue;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shouldSave&nbsp;=&nbsp;true;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[(x-minX)&nbsp;+&nbsp;(maxX-minX+1)&nbsp;*&nbsp;((y-minY)&nbsp;+&nbsp;(maxY-minY+1)&nbsp;*&nbsp;z)]&nbsp;=&nbsp;tile.name;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(shouldSave)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File.WriteAllText(path,&nbsp;JsonUtility.ToJson(new&nbsp;TileMapData(tileMap,&nbsp;data)));
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;shouldSave;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;class&nbsp;TileMapData
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;minX;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;maxX;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;minY;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;maxY;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;minZ;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;maxZ;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;string[]&nbsp;data;
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;TileMapData(Tilemap&nbsp;_tm,&nbsp;string[]&nbsp;_data)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minX&nbsp;=&nbsp;_tm.cellBounds.min.x;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxX&nbsp;=&nbsp;_tm.cellBounds.max.x;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minY&nbsp;=&nbsp;_tm.cellBounds.min.y;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxY&nbsp;=&nbsp;_tm.cellBounds.max.y;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minZ&nbsp;=&nbsp;_tm.cellBounds.min.z;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxZ&nbsp;=&nbsp;_tm.cellBounds.max.z;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data&nbsp;=&nbsp;_data;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    {"}"}
    <br />
    #endif
  </div>
);

export default TilemapSerializer;

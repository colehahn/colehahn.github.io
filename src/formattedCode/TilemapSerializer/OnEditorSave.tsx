export const OnEditorSave = (
  <div>
    #if&nbsp;UNITY_EDITOR
    <br />
    using&nbsp;System.Collections;
    <br />
    using&nbsp;System.Collections.Generic;
    <br />
    using&nbsp;UnityEngine;
    <br />
    using&nbsp;UnityEditor;
    <br />
    <br />
    public&nbsp;class&nbsp;OnEditorSave&nbsp;:&nbsp;AssetModificationProcessor
    <br />
    {"{"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;static&nbsp;string[]&nbsp;OnWillSaveAssets(string[]&nbsp;paths)
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TilemapSerializer&nbsp;serializer&nbsp;=&nbsp;GameObject.FindObjectOfType
    {"<"}TilemapSerializer{">"}();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(serializer&nbsp;!=&nbsp;null)&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serializer.SaveChanges();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;paths;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    <br />
    {"}"}
    <br />
    #endif
    <br />
  </div>
);

export default OnEditorSave;

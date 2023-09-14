export const OnEditorSave = (
  <div>
    #if&nbsp;UNITY_EDITOR
    <br />
    using&nbsp;UnityEngine;
    <br />
    using&nbsp;UnityEditor;
    <br />
    <br />
    [CustomEditor(typeof(TilemapSerializer))]
    <br />
    public&nbsp;class&nbsp;TilemapSerializerInspector&nbsp;:&nbsp;Editor
    <br />
    {"{"}
    <br />
    &nbsp;&nbsp;public&nbsp;override&nbsp;void&nbsp;OnInspectorGUI()
    <br />
    &nbsp;&nbsp;{"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;DrawDefaultInspector();
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;TilemapSerializer&nbsp;grid&nbsp;=&nbsp;(TilemapSerializer)target;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(GUILayout.Button("Load&nbsp;Tilemap&nbsp;(might&nbsp;take&nbsp;a&nbsp;minute)"))&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid.LoadTilemap();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(GUILayout.Button("Clear&nbsp;Scene&nbsp;for&nbsp;commiting&nbsp;to&nbsp;GitHub"))&nbsp;
    {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid.SaveChanges();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid.ClearTileMaps();
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
    <br />
    #endif
    <br />
  </div>
);

export default OnEditorSave;

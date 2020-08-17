gdjs.OpcionesCode = {};
gdjs.OpcionesCode.GDopcionescardioObjects1= [];
gdjs.OpcionesCode.GDopcionescardioObjects2= [];
gdjs.OpcionesCode.GDNewObjectObjects1= [];
gdjs.OpcionesCode.GDNewObjectObjects2= [];

gdjs.OpcionesCode.conditionTrue_0 = {val:false};
gdjs.OpcionesCode.condition0IsTrue_0 = {val:false};
gdjs.OpcionesCode.condition1IsTrue_0 = {val:false};
gdjs.OpcionesCode.condition2IsTrue_0 = {val:false};


gdjs.OpcionesCode.mapOfGDgdjs_46OpcionesCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.OpcionesCode.GDNewObjectObjects1});gdjs.OpcionesCode.eventsList0 = function(runtimeScene) {

{

gdjs.OpcionesCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.OpcionesCode.condition0IsTrue_0.val = false;
gdjs.OpcionesCode.condition1IsTrue_0.val = false;
{
gdjs.OpcionesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpcionesCode.mapOfGDgdjs_46OpcionesCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OpcionesCode.condition0IsTrue_0.val ) {
{
gdjs.OpcionesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.OpcionesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};

gdjs.OpcionesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpcionesCode.GDopcionescardioObjects1.length = 0;
gdjs.OpcionesCode.GDopcionescardioObjects2.length = 0;
gdjs.OpcionesCode.GDNewObjectObjects1.length = 0;
gdjs.OpcionesCode.GDNewObjectObjects2.length = 0;

gdjs.OpcionesCode.eventsList0(runtimeScene);
return;

}

gdjs['OpcionesCode'] = gdjs.OpcionesCode;

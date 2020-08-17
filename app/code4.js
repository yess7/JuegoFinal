gdjs.elegir_32personajeCode = {};
gdjs.elegir_32personajeCode.GDNewObjectObjects1= [];
gdjs.elegir_32personajeCode.GDNewObjectObjects2= [];
gdjs.elegir_32personajeCode.GDNewObject2Objects1= [];
gdjs.elegir_32personajeCode.GDNewObject2Objects2= [];

gdjs.elegir_32personajeCode.conditionTrue_0 = {val:false};
gdjs.elegir_32personajeCode.condition0IsTrue_0 = {val:false};
gdjs.elegir_32personajeCode.condition1IsTrue_0 = {val:false};
gdjs.elegir_32personajeCode.condition2IsTrue_0 = {val:false};


gdjs.elegir_32personajeCode.mapOfGDgdjs_46elegir_9532personajeCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.elegir_32personajeCode.GDNewObject2Objects1});gdjs.elegir_32personajeCode.eventsList0 = function(runtimeScene) {

{

gdjs.elegir_32personajeCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.elegir_32personajeCode.condition0IsTrue_0.val = false;
gdjs.elegir_32personajeCode.condition1IsTrue_0.val = false;
{
gdjs.elegir_32personajeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.elegir_32personajeCode.mapOfGDgdjs_46elegir_9532personajeCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.elegir_32personajeCode.condition0IsTrue_0.val ) {
{
gdjs.elegir_32personajeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.elegir_32personajeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};

gdjs.elegir_32personajeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.elegir_32personajeCode.GDNewObjectObjects1.length = 0;
gdjs.elegir_32personajeCode.GDNewObjectObjects2.length = 0;
gdjs.elegir_32personajeCode.GDNewObject2Objects1.length = 0;
gdjs.elegir_32personajeCode.GDNewObject2Objects2.length = 0;

gdjs.elegir_32personajeCode.eventsList0(runtimeScene);
return;

}

gdjs['elegir_32personajeCode'] = gdjs.elegir_32personajeCode;

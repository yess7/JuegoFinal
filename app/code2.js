gdjs.habilidadesCode = {};
gdjs.habilidadesCode.GDopcionejugadorObjects1= [];
gdjs.habilidadesCode.GDopcionejugadorObjects2= [];
gdjs.habilidadesCode.GDsalirObjects1= [];
gdjs.habilidadesCode.GDsalirObjects2= [];

gdjs.habilidadesCode.conditionTrue_0 = {val:false};
gdjs.habilidadesCode.condition0IsTrue_0 = {val:false};
gdjs.habilidadesCode.condition1IsTrue_0 = {val:false};
gdjs.habilidadesCode.condition2IsTrue_0 = {val:false};


gdjs.habilidadesCode.mapOfGDgdjs_46habilidadesCode_46GDsalirObjects1Objects = Hashtable.newFrom({"salir": gdjs.habilidadesCode.GDsalirObjects1});gdjs.habilidadesCode.eventsList0 = function(runtimeScene) {

{

gdjs.habilidadesCode.GDsalirObjects1.createFrom(runtimeScene.getObjects("salir"));

gdjs.habilidadesCode.condition0IsTrue_0.val = false;
gdjs.habilidadesCode.condition1IsTrue_0.val = false;
{
gdjs.habilidadesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.habilidadesCode.mapOfGDgdjs_46habilidadesCode_46GDsalirObjects1Objects, runtimeScene, true, false);
}if ( gdjs.habilidadesCode.condition0IsTrue_0.val ) {
{
gdjs.habilidadesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.habilidadesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};

gdjs.habilidadesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.habilidadesCode.GDopcionejugadorObjects1.length = 0;
gdjs.habilidadesCode.GDopcionejugadorObjects2.length = 0;
gdjs.habilidadesCode.GDsalirObjects1.length = 0;
gdjs.habilidadesCode.GDsalirObjects2.length = 0;

gdjs.habilidadesCode.eventsList0(runtimeScene);
return;

}

gdjs['habilidadesCode'] = gdjs.habilidadesCode;

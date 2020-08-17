gdjs.menuCode = {};
gdjs.menuCode.GDmenuObjects1= [];
gdjs.menuCode.GDmenuObjects2= [];
gdjs.menuCode.GDjugarObjects1= [];
gdjs.menuCode.GDjugarObjects2= [];
gdjs.menuCode.GDelegirpersonajeObjects1= [];
gdjs.menuCode.GDelegirpersonajeObjects2= [];
gdjs.menuCode.GDhabilidadesObjects1= [];
gdjs.menuCode.GDhabilidadesObjects2= [];
gdjs.menuCode.GDopcionesObjects1= [];
gdjs.menuCode.GDopcionesObjects2= [];
gdjs.menuCode.GDNewObject5Objects1= [];
gdjs.menuCode.GDNewObject5Objects2= [];
gdjs.menuCode.GDsalirObjects1= [];
gdjs.menuCode.GDsalirObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDjugarObjects1Objects = Hashtable.newFrom({"jugar": gdjs.menuCode.GDjugarObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDelegirpersonajeObjects1Objects = Hashtable.newFrom({"elegirpersonaje": gdjs.menuCode.GDelegirpersonajeObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhabilidadesObjects1Objects = Hashtable.newFrom({"habilidades": gdjs.menuCode.GDhabilidadesObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDopcionesObjects1Objects = Hashtable.newFrom({"opciones": gdjs.menuCode.GDopcionesObjects1});gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.menuCode.GDjugarObjects1.createFrom(runtimeScene.getObjects("jugar"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDjugarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDjugarObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDjugarObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDjugarObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", true);
}}

}


{

gdjs.menuCode.GDelegirpersonajeObjects1.createFrom(runtimeScene.getObjects("elegirpersonaje"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDelegirpersonajeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "elegir personaje", false);
}}

}


{

gdjs.menuCode.GDhabilidadesObjects1.createFrom(runtimeScene.getObjects("habilidades"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhabilidadesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "habilidades", false);
}}

}


{

gdjs.menuCode.GDopcionesObjects1.createFrom(runtimeScene.getObjects("opciones"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDopcionesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opciones", false);
}}

}


{


{
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDmenuObjects1.length = 0;
gdjs.menuCode.GDmenuObjects2.length = 0;
gdjs.menuCode.GDjugarObjects1.length = 0;
gdjs.menuCode.GDjugarObjects2.length = 0;
gdjs.menuCode.GDelegirpersonajeObjects1.length = 0;
gdjs.menuCode.GDelegirpersonajeObjects2.length = 0;
gdjs.menuCode.GDhabilidadesObjects1.length = 0;
gdjs.menuCode.GDhabilidadesObjects2.length = 0;
gdjs.menuCode.GDopcionesObjects1.length = 0;
gdjs.menuCode.GDopcionesObjects2.length = 0;
gdjs.menuCode.GDNewObject5Objects1.length = 0;
gdjs.menuCode.GDNewObject5Objects2.length = 0;
gdjs.menuCode.GDsalirObjects1.length = 0;
gdjs.menuCode.GDsalirObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;

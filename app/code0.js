gdjs.juegoCode = {};
gdjs.juegoCode.GDJUGADORObjects1_1final = [];

gdjs.juegoCode.GDJUGADORObjects1= [];
gdjs.juegoCode.GDJUGADORObjects2= [];
gdjs.juegoCode.GDJUGADORObjects3= [];
gdjs.juegoCode.GDPLATAFORMAObjects1= [];
gdjs.juegoCode.GDPLATAFORMAObjects2= [];
gdjs.juegoCode.GDPLATAFORMAObjects3= [];
gdjs.juegoCode.GDESCENAObjects1= [];
gdjs.juegoCode.GDESCENAObjects2= [];
gdjs.juegoCode.GDESCENAObjects3= [];
gdjs.juegoCode.GDTIEMPOObjects1= [];
gdjs.juegoCode.GDTIEMPOObjects2= [];
gdjs.juegoCode.GDTIEMPOObjects3= [];
gdjs.juegoCode.GDGameObjects1= [];
gdjs.juegoCode.GDGameObjects2= [];
gdjs.juegoCode.GDGameObjects3= [];
gdjs.juegoCode.GDINICIOObjects1= [];
gdjs.juegoCode.GDINICIOObjects2= [];
gdjs.juegoCode.GDINICIOObjects3= [];
gdjs.juegoCode.GDReinicioObjects1= [];
gdjs.juegoCode.GDReinicioObjects2= [];
gdjs.juegoCode.GDReinicioObjects3= [];

gdjs.juegoCode.conditionTrue_0 = {val:false};
gdjs.juegoCode.condition0IsTrue_0 = {val:false};
gdjs.juegoCode.condition1IsTrue_0 = {val:false};
gdjs.juegoCode.condition2IsTrue_0 = {val:false};
gdjs.juegoCode.conditionTrue_1 = {val:false};
gdjs.juegoCode.condition0IsTrue_1 = {val:false};
gdjs.juegoCode.condition1IsTrue_1 = {val:false};
gdjs.juegoCode.condition2IsTrue_1 = {val:false};


gdjs.juegoCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDJUGADORObjects2.createFrom(gdjs.juegoCode.GDJUGADORObjects1);

{for(var i = 0, len = gdjs.juegoCode.GDJUGADORObjects2.length ;i < len;++i) {
    gdjs.juegoCode.GDJUGADORObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.juegoCode.GDJUGADORObjects2.length ;i < len;++i) {
    gdjs.juegoCode.GDJUGADORObjects2[i].setAnimation(1);
}
}}

}


{

/* Reuse gdjs.juegoCode.GDJUGADORObjects1 */

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDJUGADORObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDJUGADORObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDJUGADORObjects1[k] = gdjs.juegoCode.GDJUGADORObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDJUGADORObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDJUGADORObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDJUGADORObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDJUGADORObjects1[i].addPolarForce(0, 200, 0);
}
}}

}


};gdjs.juegoCode.eventsList1 = function(runtimeScene) {

{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("a")) == 1;
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDINICIOObjects1.createFrom(runtimeScene.getObjects("INICIO"));
gdjs.juegoCode.GDJUGADORObjects1.createFrom(runtimeScene.getObjects("JUGADOR"));
gdjs.juegoCode.GDPLATAFORMAObjects1.createFrom(runtimeScene.getObjects("PLATAFORMA"));
gdjs.juegoCode.GDTIEMPOObjects1.createFrom(runtimeScene.getObjects("TIEMPO"));
{for(var i = 0, len = gdjs.juegoCode.GDPLATAFORMAObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDPLATAFORMAObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.juegoCode.GDJUGADORObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDJUGADORObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.juegoCode.GDPLATAFORMAObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDPLATAFORMAObjects1[i].returnVariable(gdjs.juegoCode.GDPLATAFORMAObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.juegoCode.GDTIEMPOObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDTIEMPOObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.juegoCode.GDINICIOObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDINICIOObjects1[i].hide();
}
}
{ //Subevents
gdjs.juegoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.juegoCode.GDPLATAFORMAObjects1.createFrom(runtimeScene.getObjects("PLATAFORMA"));

gdjs.juegoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.juegoCode.GDPLATAFORMAObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDPLATAFORMAObjects1[i].getX() <= -(200) ) {
        gdjs.juegoCode.condition0IsTrue_0.val = true;
        gdjs.juegoCode.GDPLATAFORMAObjects1[k] = gdjs.juegoCode.GDPLATAFORMAObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDPLATAFORMAObjects1.length = k;}if (gdjs.juegoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.juegoCode.GDPLATAFORMAObjects1 */
{for(var i = 0, len = gdjs.juegoCode.GDPLATAFORMAObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDPLATAFORMAObjects1[i].setX(1367);
}
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("a").setNumber(0);
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
gdjs.juegoCode.condition1IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("a")) == 0;
}if ( gdjs.juegoCode.condition0IsTrue_0.val ) {
{
gdjs.juegoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}}
if (gdjs.juegoCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("a").setNumber(1);
}}

}


{

gdjs.juegoCode.GDJUGADORObjects1.length = 0;


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
{gdjs.juegoCode.conditionTrue_1 = gdjs.juegoCode.condition0IsTrue_0;
gdjs.juegoCode.GDJUGADORObjects1_1final.length = 0;gdjs.juegoCode.condition0IsTrue_1.val = false;
gdjs.juegoCode.condition1IsTrue_1.val = false;
{
gdjs.juegoCode.GDJUGADORObjects2.createFrom(runtimeScene.getObjects("JUGADOR"));
for(var i = 0, k = 0, l = gdjs.juegoCode.GDJUGADORObjects2.length;i<l;++i) {
    if ( gdjs.juegoCode.GDJUGADORObjects2[i].getX() <= -(50) ) {
        gdjs.juegoCode.condition0IsTrue_1.val = true;
        gdjs.juegoCode.GDJUGADORObjects2[k] = gdjs.juegoCode.GDJUGADORObjects2[i];
        ++k;
    }
}
gdjs.juegoCode.GDJUGADORObjects2.length = k;if( gdjs.juegoCode.condition0IsTrue_1.val ) {
    gdjs.juegoCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.juegoCode.GDJUGADORObjects2.length;j<jLen;++j) {
        if ( gdjs.juegoCode.GDJUGADORObjects1_1final.indexOf(gdjs.juegoCode.GDJUGADORObjects2[j]) === -1 )
            gdjs.juegoCode.GDJUGADORObjects1_1final.push(gdjs.juegoCode.GDJUGADORObjects2[j]);
    }
}
}
{
gdjs.juegoCode.GDJUGADORObjects2.createFrom(runtimeScene.getObjects("JUGADOR"));
for(var i = 0, k = 0, l = gdjs.juegoCode.GDJUGADORObjects2.length;i<l;++i) {
    if ( gdjs.juegoCode.GDJUGADORObjects2[i].getY() >= 600 ) {
        gdjs.juegoCode.condition1IsTrue_1.val = true;
        gdjs.juegoCode.GDJUGADORObjects2[k] = gdjs.juegoCode.GDJUGADORObjects2[i];
        ++k;
    }
}
gdjs.juegoCode.GDJUGADORObjects2.length = k;if( gdjs.juegoCode.condition1IsTrue_1.val ) {
    gdjs.juegoCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.juegoCode.GDJUGADORObjects2.length;j<jLen;++j) {
        if ( gdjs.juegoCode.GDJUGADORObjects1_1final.indexOf(gdjs.juegoCode.GDJUGADORObjects2[j]) === -1 )
            gdjs.juegoCode.GDJUGADORObjects1_1final.push(gdjs.juegoCode.GDJUGADORObjects2[j]);
    }
}
}
{
gdjs.juegoCode.GDJUGADORObjects1.createFrom(gdjs.juegoCode.GDJUGADORObjects1_1final);
}
}
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
gdjs.juegoCode.GDGameObjects1.createFrom(runtimeScene.getObjects("Game"));
gdjs.juegoCode.GDReinicioObjects1.createFrom(runtimeScene.getObjects("Reinicio"));
{runtimeScene.getVariables().get("a").setNumber(2);
}{for(var i = 0, len = gdjs.juegoCode.GDReinicioObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDReinicioObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.juegoCode.GDGameObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDGameObjects1[i].hide(false);
}
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
gdjs.juegoCode.condition1IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("a")) == 2;
}if ( gdjs.juegoCode.condition0IsTrue_0.val ) {
{
gdjs.juegoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}}
if (gdjs.juegoCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", true);
}}

}


{


gdjs.juegoCode.condition0IsTrue_0.val = false;
{
gdjs.juegoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.juegoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};

gdjs.juegoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.juegoCode.GDJUGADORObjects1.length = 0;
gdjs.juegoCode.GDJUGADORObjects2.length = 0;
gdjs.juegoCode.GDJUGADORObjects3.length = 0;
gdjs.juegoCode.GDPLATAFORMAObjects1.length = 0;
gdjs.juegoCode.GDPLATAFORMAObjects2.length = 0;
gdjs.juegoCode.GDPLATAFORMAObjects3.length = 0;
gdjs.juegoCode.GDESCENAObjects1.length = 0;
gdjs.juegoCode.GDESCENAObjects2.length = 0;
gdjs.juegoCode.GDESCENAObjects3.length = 0;
gdjs.juegoCode.GDTIEMPOObjects1.length = 0;
gdjs.juegoCode.GDTIEMPOObjects2.length = 0;
gdjs.juegoCode.GDTIEMPOObjects3.length = 0;
gdjs.juegoCode.GDGameObjects1.length = 0;
gdjs.juegoCode.GDGameObjects2.length = 0;
gdjs.juegoCode.GDGameObjects3.length = 0;
gdjs.juegoCode.GDINICIOObjects1.length = 0;
gdjs.juegoCode.GDINICIOObjects2.length = 0;
gdjs.juegoCode.GDINICIOObjects3.length = 0;
gdjs.juegoCode.GDReinicioObjects1.length = 0;
gdjs.juegoCode.GDReinicioObjects2.length = 0;
gdjs.juegoCode.GDReinicioObjects3.length = 0;

gdjs.juegoCode.eventsList1(runtimeScene);
return;

}

gdjs['juegoCode'] = gdjs.juegoCode;

#pragma strict
//Indicates to user that their inputs are being made 
var button : int;
var pressed1 : Transform;
var pressed2 : Transform;
var pressed3 : Transform;
var pressed4 : Transform;
function Start(){
    pressed1 = GameObject.Find("Pressed 1").transform;
    pressed2 = GameObject.Find("Pressed 2").transform;
    pressed3 = GameObject.Find("Pressed 3").transform;
    pressed4 = GameObject.Find("Pressed 4").transform;
}

function Update(){
    //Shows user input through if and else statements
    //Detects is button is pressed and changes position to pressed position
    //Otherwise leaves position as out of the camera
    if (Input.GetButton ("1"))
    {pressed1.position= new Vector3 (-1.5,-3.5,0);}
    else 
    {pressed1.position= new Vector3 (25,0,0);}
    if (Input.GetButton ("2"))
    {pressed2.position= new Vector3 (-0.5,-3.5,0);}
    else 
    {pressed2.position= new Vector3 (25,0,0);}
    if (Input.GetButton ("3"))
    {pressed3.position= new Vector3 (0.5,-3.5,0);}
    else 
    {pressed3.position= new Vector3 (25,0, 0);}
    if (Input.GetButton ("4"))
    {pressed4.position= new Vector3 (1.5,-3.5,0);}
    else
    {pressed4.position= new Vector3 (25,0,0);}
    
}
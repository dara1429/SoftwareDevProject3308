#pragma strict
//This file will make the pause menu appear
 
private var paused: boolean = false;


function Update(){
    //Looks for Input P to toggle pause, pausing when unpaused and unpaussing when paused
    if (Input.GetKeyDown(KeyCode.P)){
        if (paused){
            Time.timeScale = 1;
            paused = false;
        }
        else {
            Time.timeScale = 0;
            paused = true;
        }
    //Same as above, but this one triggers if one presses the button to continue
    }
    if (!paused){
        Time.timeScale = 1;
    }
    else {
        Time.timeScale = 0;
    }
}

function OnGUI()
{
    //Shows continue button once paused
    if (paused){
        if (GUI.Button (Rect(150,100,600,100), "Continue") )
        {
            paused= false;
        }
    }
}

//function Start(){
  //  menuscreen = GameObject.Find("Pause Screen");
    //menuscreen.SetActive(false);
//}
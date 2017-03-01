#pragma strict
//This file takes all notes generated on screen and makes them travel
//down the screen to the hit area.
function Start () {
	
}

function Update () {
	//transform notes so they move towards the buttons
	transform.position.z = 0;
    //move notes down at a speed of -5
    transform.Translate(Vector3(0,-5,0) * Time.deltaTime);

    if (!GetComponent.<Renderer>().isVisible)
    {
        Destroy(gameObject);
    }
}

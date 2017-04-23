#pragma strict
//This file takes all notes generated on screen and makes them travel down the screen.
function Start () {
	
}

function Update () {
	transform.position.z = 0;
    //move notes down at a speed of -5
    transform.Translate(Vector3(0,-5,0) * Time.deltaTime);

    if (!GetComponent.<Renderer>().isVisible)
    {
        Destroy(gameObject);
    }
}

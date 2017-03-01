#pragma strict
//This file detects button presses and checks to see if the note pressed
//exists within the hitbox of the area where they need to hit it.
var whatButton: int = 1;
var object : Transform;

function Start () {
	if (whatButton == 1) {
		object = GameObject.Find("note1pressed").transform;
	}
	if (whatButton == 2) {
		object = GameObject.Find("note2pressed").transform;
	}
	if (whatButton == 3) {
		object = GameObject.Find("note3pressed").transform;
	}
	if (whatButton == 4) {
		object = GameObject.Find("note4pressed").transform;
	}
}

function Update () {

	if (Input.GetButtonDown ("1"))
	{
	if ( whatButton == 1 )
	{
	    //If note1 and note1 pressed collide. Count as hit.
		if (transform.position.y <= object.position.y)
		{
		Destroy(gameObject);
		//Main.score = Main.score + 1;
		}
	}
	}
	if (Input.GetButtonDown ("2"))
	{
	if ( whatButton == 2 )
	{
		if (transform.position.y <= object.position.y)
		{
		Destroy(gameObject);
		//Main.score = Main.score + 1;
		}
	}
	}	
	if (Input.GetButtonDown ("3"))
	{
	if ( whatButton == 3 )
	{
		if (transform.position.y <= object.position.y)
		{
		Destroy(gameObject);
		//Main.score = Main.score + 1;
		}
	}
	}	
	if (Input.GetButtonDown ("4"))
	{
	if ( whatButton == 4 )
	{
		if (transform.position.y <= object.position.y)
		{
		Destroy(gameObject);
		//Main.score = Main.score + 1;
		}
	}
	}

}

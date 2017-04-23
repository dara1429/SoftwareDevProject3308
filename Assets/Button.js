#pragma strict
//This file detects button presses and checks to see if the note pressed
//exists within the hitbox of the area where they need to hit it.
var whatButton: int = 1;
var object : Transform;
private var currentScore : Score;

//Looks for the note in the correct lane based on key input.
function Start () {

	var scoreObj : GameObject = GameObject.Find("Camera");
	currentScore = scoreObj.GetComponent(Score);

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

//Checks the position of the falling notes in relation to the hit area note.
function Update () {
	if (Input.GetButtonDown ("1"))
	{
	if ( whatButton == 1 )
	{
	    if (transform.position.y <= -3 && transform.position.y >= -4)
		{
			Destroy(gameObject);
			currentScore.AddScore();
	    }
	    else 
	    {
	        currentScore.SubtractScore();
	    }
	}
	}
	if (Input.GetButtonDown ("2"))
	{
	if ( whatButton == 2 )
	{
	    if (transform.position.y <= -3 && transform.position.y >= -4)
		{
			Destroy(gameObject);
			currentScore.AddScore();
	    }
	    else 
	    {
	        currentScore.SubtractScore();
	    }
	}
	}	
	if (Input.GetButtonDown ("3"))
	{
	if ( whatButton == 3 )
	{
	    if (transform.position.y <= -3 && transform.position.y >= -4)
		{
			Destroy(gameObject);
			currentScore.AddScore();
	    }
	    else 
	    {
	        currentScore.SubtractScore();
	    }
	}
	}	
	if (Input.GetButtonDown ("4"))
	{
	if ( whatButton == 4 )
	{
	    if (transform.position.y <= -3 && transform.position.y >= -4)
		{
			Destroy(gameObject);
			currentScore.AddScore();
	    }
	    else 
	    {
	        currentScore.SubtractScore();
	    }
	}
	}

}



#pragma strict

function Start () {

	var total : float = Stats.totalNotes;
	var hits : float = Stats.notesHit;
	var percentage = Mathf.RoundToInt((hits / total) * 100);

	var grade = "";

	if (percentage == 100) 
	{
		grade = "S";
	}
	else if (percentage >= 90 && percentage < 100) 
	{
		grade = "A";
	}
	else if (percentage >= 80 && percentage < 90) 
	{
		grade = "B";
	}
	else if (percentage >= 70 && percentage < 80) 
	{
		grade = "C";
	}
	else
	{
		grade = "D";
	}

}



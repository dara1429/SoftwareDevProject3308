#pragma strict
import UnityEngine.UI;

var gui_NotesHit : UI.Text;
var gui_NotesMissed : UI.Text;
var gui_Percentage : UI.Text;
var gui_Grade : GameObject;
public var sprender : Renderer;


function Start () {

	var total : float = Stats.totalNotes;
	var hits : float = Stats.notesHit;
	var misses : float = Stats.totalNotes - Stats.notesHit;
	var percentage : int = 0;
	if (total != 0) 
	{
		percentage = Mathf.RoundToInt((hits / total) * 100);
	}


	if (percentage == 100) 
	{
		gui_Grade = GameObject.Find("S");
		sprender = gui_Grade.GetComponent(Renderer);
		sprender.enabled = true;
	}
	else if (percentage >= 90 && percentage < 100) 
	{
		gui_Grade = GameObject.Find("A");
		sprender = gui_Grade.GetComponent(Renderer);
		sprender.enabled = true;
	}
	else if (percentage >= 80 && percentage < 90) 
	{
		gui_Grade = GameObject.Find("B");
		sprender = gui_Grade.GetComponent(Renderer);
		sprender.enabled = true;
	}
	else if (percentage >= 70 && percentage < 80) 
	{
		gui_Grade = GameObject.Find("C");
		sprender = gui_Grade.GetComponent(Renderer);
		sprender.enabled = true;
	}
	else
	{
		gui_Grade = GameObject.Find("D");
		sprender = gui_Grade.GetComponent(Renderer);
		sprender.enabled = true;	
	}

	gui_NotesHit.text = hits.ToString();
	gui_NotesMissed.text = misses.ToString();
	gui_Percentage.text = percentage.ToString() + " % ";
}



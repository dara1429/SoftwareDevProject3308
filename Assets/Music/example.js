#pragma strict
//This file plays the song, reads in the chart file, and generates notes 
import System.IO;
var note1_object : GameObject;
var note2_object : GameObject;
var note3_object : GameObject;
var note4_object : GameObject;

var songTime : int = 0;
private var songDelay : float = 1.7;
private var noteDelay : float = .0625;

function Start () {
//Start Song on a delay so that the notes sync up correctly. can be adjusted per song.
  var song : AudioSource = GetComponent.<AudioSource>(); 
  song.PlayDelayed(songDelay);
  playChart();
  return;
}

function playChart()
{
    var note1 = "1000";
    var note2 = "0100";
    var note3 = "0010";
    var note4 = "0001";
    var chart = new File.OpenText("Assets/Music/example.txt");
    var line = "";
    line = chart.ReadLine();
    while (line != null)
    {
    	if (line == note1)
    	{
    	  Instantiate(note1_object, transform.position + Vector3(-1.5,4.50,0), Quaternion.Euler(0,0,0));
    	  Stats.totalNotes = Stats.totalNotes + 1;
    	}
    	if (line == note2)
    	{
    	  Instantiate(note2_object, transform.position + Vector3(-0.5,4.50,0), Quaternion.Euler(0,0,0));
    	  Stats.totalNotes = Stats.totalNotes + 1;
    	}
    	if (line == note3)
    	{
    	  Instantiate(note3_object, transform.position + Vector3(0.5,4.50,0), Quaternion.Euler(0,0,0));
    	  Stats.totalNotes = Stats.totalNotes + 1;
    	}
    	if (line == note4)
    	{
    	  Instantiate(note4_object, transform.position + Vector3(1.5,4.50,0), Quaternion.Euler(0,0,0));
    	  Stats.totalNotes = Stats.totalNotes + 1;
    	}
    	yield WaitForSecondsRealtime(noteDelay);
    	line = chart.ReadLine();
    }
    chart.Close();
    songEnd();
    return;
}

function songEnd()
{
	var waitseconds : int = 3;
	yield WaitForSeconds(waitseconds);
	SceneManagement.SceneManager.LoadScene("MainMenu");
	//SceneManagement.SceneManager.LoadScene("Results Screen");
}

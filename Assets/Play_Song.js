#pragma strict
//This file plays the song, reads in the chart file, and generates notes 
import System.IO;
var note1_object : GameObject;
var note2_object : GameObject;
var note3_object : GameObject;
var note4_object : GameObject;

var songTime : int = 0;

function Start () {
//Start Song
  var song : AudioSource = GetComponent.<AudioSource>(); 
  song.PlayDelayed(1.7);
  playChart();
  return;
}

function playChart()
{
    var note1 = "1000";
    var note2 = "0100";
    var note3 = "0010";
    var note4 = "0001";
    var chart = new File.OpenText("Assets/Music/old_example.txt");
    var line = "";
    line = chart.ReadLine();
    while (line != null)
    {
    	if (line == note1)
    	{
    	  Instantiate(note1_object, transform.position + Vector3(-1.5,4.50,0), Quaternion.Euler(0,0,0));
    	}
    	if (line == note2)
    	{
    	  Instantiate(note2_object, transform.position + Vector3(-0.5,4.50,0), Quaternion.Euler(0,0,0));
    	}
    	if (line == note3)
    	{
    	  Instantiate(note3_object, transform.position + Vector3(0.5,4.50,0), Quaternion.Euler(0,0,0));
    	}
    	if (line == note4)
    	{
    	  Instantiate(note4_object, transform.position + Vector3(1.5,4.50,0), Quaternion.Euler(0,0,0));
    	}
    	yield WaitForSecondsRealtime(.0625);
    	line = chart.ReadLine();
    }
    chart.Close();
    songEnd();
    return;
}

function songEnd()
{
	yield WaitForSeconds(3);
	SceneManagement.SceneManager.LoadScene("MainMenu");
}

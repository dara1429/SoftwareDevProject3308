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
  song.PlayDelayed(2.0);
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
    	yield WaitForSeconds(.0625);
    	line = chart.ReadLine();
    }
    chart.Close();

    //Instantiate(note1_object, transform.position + Vector3(-1.5,4.50,0), Quaternion.Euler(0,0,0));
    //Instantiate(note2_object, transform.position + Vector3(-0.5,4.50,0), Quaternion.Euler(0,0,0));
    //Instantiate(note3_object, transform.position + Vector3(0.5,4.50,0), Quaternion.Euler(0,0,0));
    //Instantiate(note4_object, transform.position + Vector3(1.5,4.50,0), Quaternion.Euler(0,0,0));
    return;
}

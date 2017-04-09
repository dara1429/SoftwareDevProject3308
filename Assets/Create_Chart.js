#pragma strict
import System.IO;
//This file will create a new chart (text) file in Assets/Music/ 

function Start () {
	if (File.Exists("Assets/Music/custom.txt"))
	{
	Debug.Log("Chart already exists.");
	//Display Error Message and exit to main menu.
	//Application.LoadLevel("MainMenu");
	}

	var song : AudioSource = GetComponent.<AudioSource>(); 
  	var time : int = Mathf.Round(song.clip.length);
	var timing : int = time * 16;
	chartNotes(timing);
}

function chartNotes (timing : int) 
{
	var counter : int = 0;
	var chart = new StreamWriter("Assets/Music/custom.txt");
	while(counter < timing)
	{
		if (Input.GetButtonDown ("1"))
		{
	 		chart.WriteLine("1000");
		}
		if (Input.GetButtonDown ("2"))
		{
			chart.WriteLine("0100");
		}	
		if (Input.GetButtonDown ("3"))
		{
			chart.WriteLine("0010");
		}	
		if (Input.GetButtonDown ("4"))
		{
			chart.WriteLine("0001");
		}
		else
		{
			if (counter != 0)
			{
			chart.WriteLine("0000");
			}
		}
		yield WaitForSeconds(.0625);
		counter = counter + 1;
	}
	chart.Close();
	yield WaitForSeconds(2);
	Application.LoadLevel("MainMenu");
}


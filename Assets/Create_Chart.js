#pragma strict
import System.IO;
//This file will create a new chart (text) file in Assets/Music/ 

function Start () {
	if (File.Exists("Assets/Music/example2.txt"))
	{
	Debug.Log("Chart already exists.");
	//Application.LoadLevel("MainMenu");
	}
	var chart = new StreamWriter("Assets/Music/example2.txt");
	chart.WriteLine("Test");
	chart.Close();

}

function Update () {

	if (Input.GetButtonDown ("1"))
	{
	 
	}
	if (Input.GetButtonDown ("2"))
	{

	}	
	if (Input.GetButtonDown ("3"))
	{

	}	
	if (Input.GetButtonDown ("4"))
	{

	}

}
#pragma strict
import System.IO;
var note1_object : GameObject;
var note2_object : GameObject;
var note3_object : GameObject;
var note4_object : GameObject;
private var error: boolean = false;

//This file will create a new chart (example.txt) file in Assets/Music/ 

function Start () {

	var song : AudioSource = GetComponent.<AudioSource>(); 

	if (File.Exists("Assets/Music/example.txt"))
	{
		//Display Error Message and exit to main menu if chart file already exists.
		//error = true;
		//Time.timeScale = 0;
		//song.Pause();
	}

	//Get the length of the song and calculate the correct timing so that we can accurately make charts.
  	var time : int = Mathf.Round(song.clip.length);
	var timing : int = time * 16;

	if (error != true)
	{
	createChart(timing);
	}
}

function createChart (timing : int) 
{
	//create a new chart file (example.txt) then detect and write user inputs into that file.
	var counter : int = 0;
	var flag1 : int = 0;
	var flag2 : int = 0;
	var flag3 : int = 0;
	var flag4 : int = 0;

	var chart = new StreamWriter("Assets/Music/example.txt");
	while(counter < timing)
	{
		flag1 = counter - flag1;
		flag2 = counter - flag2;
		flag3 = counter - flag3;
		flag4 = counter - flag4;

		if (Input.GetKey ("1") && flag1 > 1)
		{
			Debug.Log("lul");
	 		chart.WriteLine("1000");
	 		Instantiate(note1_object, transform.position + Vector3(-3,2.5,0), Quaternion.Euler(0,0,0));
	 		flag1 = counter;
	 		yield WaitForSecondsRealtime(.0625);
		counter = counter + 1;
		}
		if (Input.GetKey ("2") && flag2 > 1)
		{
			chart.WriteLine("0100");
			Instantiate(note2_object, transform.position + Vector3(-1,2.5,0), Quaternion.Euler(0,0,0));
	 		flag2 = counter;
	 		yield WaitForSecondsRealtime(.0625);
		counter = counter + 1;
		}	
		if (Input.GetKey ("3") && flag3 > 1)
		{
			chart.WriteLine("0010");
			Instantiate(note3_object, transform.position + Vector3(1,2.5,0), Quaternion.Euler(0,0,0));
	 		flag3 = counter;
	 		yield WaitForSecondsRealtime(.0625);
		counter = counter + 1;
		}	
		if (Input.GetKey ("4") && flag4 > 1)
		{
			chart.WriteLine("0001");
			Instantiate(note4_object, transform.position + Vector3(3,2.5,0), Quaternion.Euler(0,0,0));
	 		flag4 = counter;
	 		yield WaitForSecondsRealtime(.0625);
		counter = counter + 1;
		}
		else
		{
			if (counter != 0)
			{
			chart.WriteLine("0000");
					yield WaitForSecondsRealtime(.0625);
		counter = counter + 1;
			}
			else
			{
			yield WaitForSecondsRealtime(.0625);
			counter = counter + 1;
			}
		}
	}
	chart.Close();
	songEnd();
}

function songEnd()
{
	yield WaitForSeconds(2);
	SceneManagement.SceneManager.LoadScene("MainMenu");
}

function OnBecameInvisible() 
{
	Destroy(gameObject);
}

function OnGUI()
{
	// Display error message and confirm box if chart exists already.
    if (error){
    	GUI.Box(new Rect(140,150,500,25), "Error, chart file already exists. Please move/rename/delete it before creating another.");
        if (GUI.Button (Rect(280,200,200,50), "Ok") )
        {
           SceneManagement.SceneManager.LoadScene("MainMenu");
        }
    }
}

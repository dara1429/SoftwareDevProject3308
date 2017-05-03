#pragma strict
import System.IO;

//This file will create a new chart (customsong.txt) file in Assets/Music/ 

var note1_object : GameObject;
var note2_object : GameObject;
var note3_object : GameObject;
var note4_object : GameObject;
private var error: boolean = false;
private var timing : float = .0625;
private var greenNotes : int = 0;
private var redNotes : int = 0;
private var yellowNotes : int = 0;
private var blueNotes : int = 0;

// Used to stop player from accidently putting down many of the same note with only 1 button press.
private var noteDelay : float = .1;

function Start () {

	var song : AudioSource = GetComponent.<AudioSource>(); 

	if (File.Exists("Assets/Music/customsong.txt"))
	{
		//Display Error Message and exit to main menu if chart file already exists.
		//error = true;
		//Time.timeScale = 0;
		//song.Pause();
	}

	if (error != true)
	{
		createChart(song);
	}
}


function createChart (song : AudioSource) 
{
	var time : int = Mathf.Round(song.clip.length);
	var flag1 : float = 0;
	var flag2 : float = 0;
	var flag3 : float = 0;
	var flag4 : float = 0;

	var chart = new StreamWriter("Assets/Music/customsong.txt");

	//We need to wait .0625 seconds so that only one line is written to the text (chart) file 
	//every .0625 seconds. This is so we the chart syncs up when we play the song and read the chart.

	while(song.time <= time)
	{
		flag1 = song.time - flag1;
		flag2 = song.time - flag2;
		flag3 = song.time - flag3;
		flag4 = song.time - flag4;
		if (Input.GetKey ("1") && flag1 > noteDelay)
		{
	 		chart.WriteLine("1000");
	 		Instantiate(note1_object, transform.position + Vector3(-3,2.5,0), Quaternion.Euler(0,0,0));
	 		greenNotes += 1;
	 		flag1 = song.time;
	 		yield WaitForSecondsRealtime(timing);
		}
		if (Input.GetKey ("2") && flag2 > noteDelay)
		{
			chart.WriteLine("0100");
			Instantiate(note2_object, transform.position + Vector3(-1,2.5,0), Quaternion.Euler(0,0,0));
			redNotes += 1;
	 		flag2 = song.time;
	 		yield WaitForSecondsRealtime(timing);
		}	
		if (Input.GetKey ("3") && flag3 > noteDelay)
		{
			chart.WriteLine("0010");
			Instantiate(note3_object, transform.position + Vector3(1,2.5,0), Quaternion.Euler(0,0,0));
			yellowNotes += 1;
	 		flag3 = song.time;
	 		yield WaitForSecondsRealtime(timing);
		}	
		if (Input.GetKey ("4") && flag4 > noteDelay)
		{
			chart.WriteLine("0001");
			Instantiate(note4_object, transform.position + Vector3(3,2.5,0), Quaternion.Euler(0,0,0));
			blueNotes += 1;
	 		flag4 = song.time;
	 		yield WaitForSecondsRealtime(timing);
		}
		else
		{
				if (Time.timeScale == 1) { chart.WriteLine("0000"); }
				yield WaitForSecondsRealtime(timing);
		}
	}
	chart.Close();
	songEnd();
}

function songEnd()
{
	var waittwoseconds : int = 2;
	yield WaitForSeconds(waittwoseconds);
	SceneManagement.SceneManager.LoadScene("MainMenu");
}

function OnBecameInvisible() 
{
	Destroy(gameObject);
}

function OnGUI()
{

	var song : AudioSource = GetComponent.<AudioSource>(); 
	var totalTime : int = Mathf.Round(song.clip.length);

	// Display error message and confirm box if chart file exists already.
    if (error){
    	GUI.Box(new Rect(140,150,500,25), "Error, chart file already exists. Please move/rename/delete it before creating another.");
        if (GUI.Button (Rect(3280,200,200,50), "Ok") )
        {
           SceneManagement.SceneManager.LoadScene("MainMenu");
        }
    }

    GUI.Label(new Rect(340,35,500,25), "Time : " + Mathf.Round(song.time) + " Sec /  " + totalTime + " Sec ");
    GUI.Label(new Rect(340,50,500,25), "Green Notes : " + greenNotes);
    GUI.Label(new Rect(340,65,500,25), "Red Notes : " + redNotes);
    GUI.Label(new Rect(340,80,500,25), "Yellow Notes : " + yellowNotes);
    GUI.Label(new Rect(340,95,500,25), "Blue Notes : " + blueNotes);
}

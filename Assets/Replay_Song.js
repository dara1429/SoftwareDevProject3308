#pragma strict

function Replay () 
{
	var Scene : String = Last_Scene.previousScene;
	SceneManagement.SceneManager.LoadScene(Scene);
}

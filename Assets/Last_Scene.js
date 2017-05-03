#pragma strict

public static var previousScene = "";

function Start () {
	previousScene = SceneManagement.SceneManager.GetActiveScene().name;
}


#pragma strict

public static var PreviousScene = "";

function Start () {
	PreviousScene = SceneManagement.SceneManager.GetActiveScene().name;
}


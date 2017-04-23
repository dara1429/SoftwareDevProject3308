using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

// Loads in the correct scene (used in song select scene)

public class Song_Select : MonoBehaviour 
{
	public void LoadbyName(string sceneName)
	{
		SceneManager.LoadScene (sceneName);
	}
}
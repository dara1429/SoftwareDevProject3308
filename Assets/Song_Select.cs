using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Song_Select : MonoBehaviour {

	public void LoadbyName(string sceneName)
	{
		SceneManager.LoadScene (sceneName);
	}
}
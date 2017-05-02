using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MusicManager : MonoBehaviour {

    public AudioClip mainTheme;

    void Start()
    {
        audioManager.instance.PlayMusic(mainTheme, 2);
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            audioManager.instance.PlayMusic(mainTheme,3);
        }
    }
}

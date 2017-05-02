using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class menu : MonoBehaviour {

    public GameObject mainMenuHolder;
    public GameObject optionsMenu;

    public Slider[] volSliders;

    public void Start()
    {
        volSliders[0].value = audioManager.instance.masterVolPerc;
        volSliders[1].value = audioManager.instance.musicVolPerc;
    }
    public void Play()
    {

    }

    public void Quit()
    {

    }

    public void OptionsMenu()
    {

    }

    public void MainMenu()
    {

    }

    public void SetMasterVolume(float value)
    {
        audioManager.instance.setVolume(value, audioManager.audioChannel.master);
    }

    public void SetMusicVolume(float value)
    {
        audioManager.instance.setVolume(value, audioManager.audioChannel.music);
    }
}


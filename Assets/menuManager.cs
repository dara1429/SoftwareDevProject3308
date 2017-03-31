using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class menuManager : MonoBehaviour {

    public GameObject audioMenu;
    public Slider[] volumeSliders;

	public void masterVolume(float val)
    {
        AudioManager.instance.SetVolume (val, AudioManager.AudioChannel.Master);
    }

    public void musicVolume(float val)
    {
        AudioManager.instance.SetVolume(val, AudioManager.AudioChannel.Music);
    }

    public void sfxVolume(float val)
    {
        AudioManager.instance.SetVolume(val, AudioManager.AudioChannel.Sfx);
    }
}

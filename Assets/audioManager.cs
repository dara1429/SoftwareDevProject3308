using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class audioManager : MonoBehaviour {

    public enum audioChannel { master, music };
    public float masterVolPerc { get; private set; }
    public float musicVolPerc { get; private set; }

    AudioSource[] musicSources;
    int activeSource;

    public static audioManager instance;

    Transform audioListener;

    SoundLibrary library;

    void Awake()
    {

        if (instance != null)
        {
            Destroy(gameObject);
        }
        else
        {
            instance = this;
            DontDestroyOnLoad(gameObject);

            musicSources = new AudioSource[2];
            for (int i = 0; i < 2; i++)
            {
                GameObject newMusicSource = new GameObject("Music source " + (i + 1));
                musicSources[i] = newMusicSource.AddComponent<AudioSource>();
                newMusicSource.transform.parent = transform;
            }

            audioListener = FindObjectOfType<AudioListener>().transform;

            masterVolPerc = 0.8f;
            musicVolPerc = 1f;
        }
    }

    public void setVolume(float volPerc, audioChannel channel)
    {
        switch (channel)
        {
            case audioChannel.master:
                masterVolPerc = volPerc;
                break;
            case audioChannel.music:
                musicVolPerc = volPerc;
                break;
        }

        musicSources[0].volume = musicVolPerc * masterVolPerc;
    }

    public void PlayMusic(AudioClip clip, float fade = 1)
    {
        activeSource = 1 - activeSource;
        musicSources[activeSource].clip = clip;
        musicSources[activeSource].Play();

        StartCoroutine(AnimateMusicCrossfade(fade));
    }

    public void PlaySound(AudioClip clip, Vector3 pos)
    {
        if(clip!=null)
            AudioSource.PlayClipAtPoint(clip, pos, musicVolPerc*masterVolPerc);
    }

    public void PlaySound(string soundName, Vector3 pos)
    {
        PlaySound(library.GetClipFromName(soundName), pos);
    }

    IEnumerator AnimateMusicCrossfade(float dura)
    {
        float perc = 0;
        while (perc < 1)
        {
            perc = perc + Time.deltaTime * 1 / dura;
            musicSources[activeSource].volume = Mathf.Lerp(0, musicVolPerc * masterVolPerc, perc);
            musicSources[1-activeSource].volume = Mathf.Lerp(musicVolPerc * masterVolPerc, 0, perc);
            yield return null;
        }
    }
}

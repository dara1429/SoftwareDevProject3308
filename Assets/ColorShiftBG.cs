using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColorShiftBG : MonoBehaviour {

    private Color colOne = Color.yellow;//yellow   
    private Color colTwo = Color.blue;//blue
    private float dura = 2.0F;//time between shifting intervals
    SpriteRenderer image;//used to grab the blot image

    void Start()//gets the camera component to apply changes on
    {
        image = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        //shifts the colors as needed
        float length = Mathf.PingPong(Time.time, dura) / dura;
        image.color = Color.Lerp(colOne, colTwo, length);
    }
}

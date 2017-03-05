using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//animate the backround colors to shift between multiple different colors
public class shiftColors : MonoBehaviour {

    public Color colOne = new Color(190,74,178);
    public Color colTwo = Color.blue;

    public float dura = 4.0F;

    Camera cam;
	// Use this for initialization
    void Start () {
        cam = GetComponent<Camera>();
        cam.clearFlags = CameraClearFlags.SolidColor;
	}
	
	// Update is called once per frame
	void Update () {
        float length = Mathf.PingPong(Time.time, dura) / dura;
        cam.backgroundColor = Color.Lerp(colOne, colTwo, length);
    }
}

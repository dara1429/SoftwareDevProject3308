using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

//animate the backround colors to shift between multiple different colors
public class shiftColorBlot : MonoBehaviour
{

    public Color colOne = new Color(121, 219, 82);
    public Color colTwo = Color.red;

    public float dura = 5.0F;
    Image image;

    // Use this for initialization
    void Start()
    {
        image = GetComponent<Image>();

    }

    // Update is called once per frame
    void Update()
    {
        float length = Mathf.PingPong(Time.time, dura) / dura;
        image.color = Color.Lerp(colOne, colTwo, length);
    }
}
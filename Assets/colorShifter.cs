using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class colorShifter : MonoBehaviour
{

	//shifts between 2 colors on an image
	private Color colOne = Color.yellow;   
	private Color colTwo = Color.blue;
	private float dura = 2.0F;
	SpriteRenderer image;

	void Start()
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
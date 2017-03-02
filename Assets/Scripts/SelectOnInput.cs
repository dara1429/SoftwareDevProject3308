using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectOnInput : MonoBehaviour {

	public UnityEventQueueSystem eventSystem;
	public GameObject selectedObject;

	private bool buttonSelected;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () 
	{
		if (Input.GetAxisRax ("Vertical") ! = 0 && buttonSelected == false)
			{
			eventSystem.SetSelectedGameObject(selectedObject);
			buttonSelected = true;
			}
	}

	private void OnDisable ()
	{
		buttonSelected = false;
	}
}

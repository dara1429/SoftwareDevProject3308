#pragma strict

var comboText : UnityEngine.UI.Text;
static var combo = 0;
static var largestCombo = 0;

function Start () {
	combo = 0;
	largestCombo = 0;
}

function Update () {

	if(combo >= 3) 
	{
		comboText.text = "Combo : " + combo;
	}
	else
	{
		comboText.text = "";
	}

	if(combo > largestCombo)
	{
		largestCombo = combo;
	}
}



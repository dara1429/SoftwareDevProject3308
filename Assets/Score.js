#pragma strict

//This file keeps track of the score.

var scoreText : UnityEngine.UI.Text;
private var score : int;

function Start () 
{
	score = 0;
	scoreText.text = "Score: " + score;
}

function AddScore()
{
	score += 100;
	UpdateScore();
}

function UpdateScore()
{
	scoreText.text = "Score: " + score;
}

function SubtractScore()
{
	if (score != 0)
    {
        score -=100;
        UpdateScore();
    }

}


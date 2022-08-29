function GetRating(Note, Arrow) {
    var Ratings = ["Perfect!!", "Sick!", "Good", "Ok", "Bad", "Trash!", "???"];
    // the ??? rating is really rare. its when the timings are weird, basically
    // ??? gives the same rewards as a Perfect!!, but, it doesnt give a Perfect!!, if you know what i mean...
    // it doesnt (Perfects += 1;) when you get a ???, but it does give 500 score!

    // Timings:
    // Trash = 50;
    // Bad = 35;
    // Ok = 20;
    // Good = 10;
    // Sick = 5;
    // Perfect = 0;

    // Ratings:

    if (Note.y >= (Arrow.y + 50) || Note.y <= (Arrow.y - 50)) {
        Misses += 1;
        Score -= 100;
        Trashes += 1;
        return Ratings[5]; // returns a trash rating ):
        // u got skill issued
    } else if (Note.y >= (Arrow.y + 35) || Note.y <= (Arrow.y - 35)) {
        Score -= 25;
        Bads += 1;
        return Ratings[4]; // bad rating ):
    } else if (Note.y >= (Arrow.y + 20) || Note.y <= (Arrow.y - 20)) {
        Score += 20;
        Oks += 1;
        return Ratings[3]; // its an ok rating... but its not okay
    } else if (Note.y >= (Arrow.y + 10) || Note.y <= (Arrow.y - 10)) {
        Score += 100;
        Goods += 1;
        return Ratings[2]; // Now, were talking!
        // returns a good rating!
    } else if ((Note.y >= (Arrow.y - 5) || Note.y <= (Arrow.y + 5)) && Note.y != Arrow.y) {
        Score += 250;
        Sicks += 1;
        return Ratings[1]; // Returns a "Sick!" Rating
    } else if (Note.y == Arrow.y) {
        Score += 500;
        Perfects += 1;
        return Ratings[0]; // Returns a "Perfect!!" Rating
        // Pitch Perfect!
    } else {
        // if you manage to somehow get this rating, you will get a reward of 500 score (the same as a Perfect!!)
        // good job..?
        Score += 500;
        return Ratings[6]; // the forgotten rating
    }
}
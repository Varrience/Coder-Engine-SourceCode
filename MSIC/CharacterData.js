function LoadCharacterAnims(IdleAnim, LeftAnim, DownAnim, UpAnim, RightAnim, SpecialAnim, AnimTime) {
    this.IdleAnim = IdleAnim;

    this.LeftAnim = LeftAnim;
    this.DownAnim = DownAnim;
    this.UpAnim = UpAnim;
    this.RightAnim = RightAnim;

    this.SpecialAnim = SpecialAnim;

    this.AnimTime = AnimTime;
}

let LoadBoyfriend = new LoadCharacterAnims("Boyfriend_Idle", "Boyfriend_Left", "Boyfriend_Down", "Boyfriend_Up", "Boyfriend_Right", "Boyfriend_Hey", 550)
let LoadDaddyDearest = new LoadCharacterAnims("Dad_Idle", "Dad_Down", "Dad_Up", "Dad_Right", "Dad_Idle", 425)


console.log(LoadBoyfriend);
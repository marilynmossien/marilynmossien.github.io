document.getElementById('prefix').src = "prefix.png"
document.getElementById('suffix').src = "suffix.png"

var prefix = new Array() 
prefix[0] = new Image()
prefix[0].src = "hetero.png"
prefix[1] = new Image()
prefix[1].src = "homo.png"
prefix[2] = new Image()
prefix[2].src = "bi.png"
prefix[3] = new Image()
prefix[3].src = "a.png"
prefix[4] = new Image()
prefix[4].src = "pan.png"
prefix[5] = new Image();
prefix[5].src = "demi.png"

var suffix = new Array()
suffix[0] = new Image()
suffix[0].src = "sexual.png"
suffix[1] = new Image()
suffix[1].src = "romantic.png"

var description = new Array()
description[0] = "This is the medical definition of someone who is sexually attracted to someone of another gender. A more common, day-to-day word is straight."
description[1] = 'Homosexual is a medical definition for someone who is sexually attracted to someone of the same gender or biological sex. It should be noted that some people find this term offensive because "homosexual" has been used as a slur and by anti-gay extremists. Some people prefer to be labeled as "gay" or "lesbian" instead.'
description[2] = "Someone who identifies bisexual is sexually attracted to someone of his/her/their own gender, and another gender, possibly to different degrees. Note: bisexuality is not the same thing as pansexuality."
description[3] = "Asexual people typically do not experience sexual attraction. Asexual is a broad term because sexual desire is typically not black or white. Asexuality is also not the same thing as celibacy, as celibacy is a willful decision, not a sexuality."
description[4] = "Sexual attraction to all genders and identities. While bisexuality means attraction to two different genders, pansexuality refers to sexual attraction to all genders, including non-binary genders."
description[5] = "The term demisexual was originally coined because it can be considered halfway between sexual and asexual. A demisexual person generally does not experience sexual attraction to a person until he/she/they have formed an emotional bond with that person. "
description[6] = "Heteroromantic refers to a person who is romantically attracted to someone of another gender. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective."
description[7] = "Homoromantic refers to someone who is romantically attracted to someone of the same gender or biological sex. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective."
description[8] = "Biromantic means romantic attraction to two genders. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective." 
description[9] = "Someone who is aromantic typically does not experience (or experiences very little) romanti attraction. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective. "
description[10] = "Panromantic refers to romantic attraction to all genders. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective. "
description[11] = "Demiromantic falls under the umbrella of gray-romantic (someone somewhere between aromantic and romantic). Someone considered demiromantic generally does not feel romantic attraction with someone until he/she/they have experienced an emotional bond with that person. Romantic attraction is usually defined as having an emotional desire to have a romantic (though not necessarily sexual) relationship with a person. This often includes intimacy, affection, and companionship. The line between a romantic and sexual relationship is often blurry and subjective."

function discoversexuality(){

	var imagenum = Math.floor(Math.random()*6);
	document.getElementById('prefix').src = prefix[imagenum].src
	var imagenum2 = Math.floor(Math.random()*2);
	document.getElementById('suffix').src = suffix[imagenum2].src
	
	document.getElementById('disclaimer').innerHTML = "Note: Sexuality and attraction are very subjective terms, and such definitions often change person per person. These definitions are only our understanding of the terms."
	
	if (imagenum == 0 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[0]
	}else if (imagenum == 1 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[1]
	}else if (imagenum == 2 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[2]
	}else if (imagenum == 3 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[3]
	}else if (imagenum == 4 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[4]
	}else if (imagenum == 5 && imagenum2 == 0){
		document.getElementById('description').innerHTML = description[5]
	}else if (imagenum == 0 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[6]
	}else if (imagenum == 1 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[7]
	}else if (imagenum == 2 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[8]
	}else if (imagenum == 3 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[9]
	}else if (imagenum == 4 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[10]
	}else if (imagenum == 5 && imagenum2 == 1){
		document.getElementById('description').innerHTML = description[11]
	}
} 

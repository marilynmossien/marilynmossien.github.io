//var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var memory_array = new Array()
memory_array[0] = new Image()
memory_array[0].src = "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMDU4NTc3NDIy.jpg"
memory_array[1] = new Image()
memory_array[1].src = "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMDU4NTc3NDIy.jpg"
memory_array[2] = new Image()
memory_array[2].src = "http://i.onionstatic.com/onion/2921/8/original/1200.jpg"
memory_array[3] = new Image()
memory_array[3].src = "http://i.onionstatic.com/onion/2921/8/original/1200.jpg"
memory_array[4] = new Image()
memory_array[4].src = "http://uaposition.com/file/2015/04/Joe-Biden_0.jpg"
memory_array[5] = new Image()
memory_array[5].src = "http://uaposition.com/file/2015/04/Joe-Biden_0.jpg"
memory_array[6] = new Image()
memory_array[6].src = "https://cmgajcjaybookman.files.wordpress.com/2014/12/jeb-bush-20119761jpg-a137a6bdd738a087.jpg"
memory_array[7] = new Image()
memory_array[7].src = "https://cmgajcjaybookman.files.wordpress.com/2014/12/jeb-bush-20119761jpg-a137a6bdd738a087.jpg"
memory_array[8] = new Image()
memory_array[8].src = "http://a3.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MTUyNzIzNDcx.jpg"
memory_array[9] = new Image()
memory_array[9].src = "http://a3.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MTUyNzIzNDcx.jpg"
memory_array[10] = new Image()
memory_array[10].src = "http://waow.images.worldnow.com/images/6683015_G.jpg"
memory_array[11] = new Image()
memory_array[11].src = "http://waow.images.worldnow.com/images/6683015_G.jpg"
memory_array[12] = new Image()
memory_array[12].src = "https://pbs.twimg.com/profile_images/572756176442388480/che-Fiex.jpeg"
memory_array[13] = new Image()
memory_array[13].src = "https://pbs.twimg.com/profile_images/572756176442388480/che-Fiex.jpeg"
memory_array[14] = new Image()
memory_array[14].src = "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2015/04/13/rubio.jpg"
memory_array[15] = new Image()
memory_array[15].src = "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2015/04/13/rubio.jpg"


var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i].src+'\')"></div>';
	}
	document.getElementById('memory_board').src = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		//tile.style.background = '#FFF';
		tile.src = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(http://img2.findthebest.com/sites/default/files/2307/media/images/t2/Safety_Orange_Blaze_Orange_429976_i0.png) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(http://img2.findthebest.com/sites/default/files/2307/media/images/t2/Safety_Orange_Blaze_Orange_429976_i0.png) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
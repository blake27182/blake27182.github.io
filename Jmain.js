var mlinks = [ //global
'https://open.spotify.com/track/2nNtzvg3ZybWW1Tjqi4NFf',
'https://open.spotify.com/track/5vDX38WbPNbgSELSzrYQgT',
'https://open.spotify.com/track/1aiDlPLPljMFUylWjMZras',
'https://open.spotify.com/track/6eIygPhGcBFKKcxlGTJlY0',
'https://open.spotify.com/track/2NM15QecEF0GKHwQwvRQnR',
'https://open.spotify.com/track/2yXSduJwEJH0HpyVMavzus',
'https://open.spotify.com/track/6Rt6KwuF7I8ZkdZG2G0bYr',
'https://open.spotify.com/track/4fpEuKIzTLmMJnYwFU0oqr',
'https://open.spotify.com/track/1vyrrrnb7182SL6iOMor3O',
'https://open.spotify.com/track/1v0JeWn88JGmETJGVKVpcY',
'https://open.spotify.com/track/6gREYnl1rgTBE06YIDZheT',
'https://open.spotify.com/track/4n3kD4h1k57h0obdRBChZL',
'https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo',
'https://open.spotify.com/track/5By7Pzgl6TMuVJG168VWzS',
'https://open.spotify.com/track/75AGjlw4OcPqI7E0mZTZF7',
'https://open.spotify.com/track/77Y57qRJBvkGCUw9qs0qMg',
'https://open.spotify.com/track/1EZJBB6bvCcrvYRlOyoHuf',
'https://open.spotify.com/track/6AWF5c78vckdtK0COaAXBY',
'https://open.spotify.com/track/2jdAk8ATWIL3dwT47XpRfu',
'https://open.spotify.com/track/3kZC0ZmFWrEHdUCmUqlvgZ',
'https://open.spotify.com/track/51lPx6ZCSalL2kvSrDUyJc',
'https://open.spotify.com/track/1TrGdXSgiBm8W68D2K1COG',
'https://open.spotify.com/track/2dcoDVcOc9hGPbtZFtpcw3',
'https://open.spotify.com/track/0xHFiCfx8l1tTuoPahkVWD',
'https://open.spotify.com/track/38zsOOcu31XbbYj9BIPUF1',
'https://open.spotify.com/track/4IRHwIZHzlHT1FQpRa5RdE',
'https://open.spotify.com/track/7sGL3k2M6FiWFP9x83wiLA',
'https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ',
'https://open.spotify.com/track/6HSXNV0b4M4cLJ7ljgVVeh',
'https://open.spotify.com/track/2pTZsG61UdgMK24OLa3ofa',
'https://open.spotify.com/track/35CsqcashydwdRlL27kRBt',
'https://open.spotify.com/track/3lAGRvn4W1oIFlThBaiNEZ',
'https://open.spotify.com/track/0Gu3ftWoA5mdwcAjMvLFG9',
'https://open.spotify.com/track/5xJII9WBtF4YwKeTsymO6P',
'https://open.spotify.com/track/5EYi2rH4LYs6M21ZLOyQTx',
];

var plinks = [ //global
'http://woodygooch.com/wp-content/uploads/2017/07/WG_2017001-copy.jpg',
'http://woodygooch.com/wp-content/uploads/2017/06/WGP_8058-1400x932.jpg',
'https://momentumdash.com/backgrounds/01.jpg',
'https://momentumdash.com/backgrounds/02.jpg',
'https://momentumdash.com/backgrounds/03.jpg',
'https://momentumdash.com/backgrounds/04.jpg',
'https://momentumdash.com/backgrounds/05.jpg',
'https://momentumdash.com/backgrounds/06.jpg',
'https://momentumdash.com/backgrounds/07.jpg',
'https://momentumdash.com/backgrounds/08.jpg',
'https://momentumdash.com/backgrounds/09.jpg',
'https://momentumdash.com/backgrounds/10.jpg',
'https://momentumdash.com/backgrounds/11.jpg',
'https://momentumdash.com/backgrounds/12.jpg',
'https://momentumdash.com/backgrounds/13.jpg',
'https://momentumdash.com/backgrounds/14.jpg',
'https://image.vsco.co/1/563504e49cb529933003/56f8d160b5917769089d27ab/1136x757/vsco_032716.jpg',
'https://image.vsco.co/1/56c7ee9aa805715509765/56ed7eac4d5908023061b96a/1024x768/vsco_031916.jpg',
'https://image.vsco.co/1/53ecd29e4d403892011/594c40cce13e321d22a54173/1136x758/vsco_062217.jpg',
'https://image.vsco.co/1/53ecd29e4d403892011/571023b4132b9864335a2d7c/960x769/vsco_041416.jpg',
'https://c1.staticflickr.com/8/7690/16498707754_950b34d8e2_b.jpg',
'pics/v1.jpg',
'https://c1.staticflickr.com/8/7690/16498707754_950b34d8e2_b.jpg',
'pics/v2.jpg',
'pics/v3.jpg',
'pics/v4.jpg',
'pics/v5.jpg',
'pics/v6.jpg',
'pics/SF1.png',
'pics/SF2.png',
'pics/SF3.png',
'pics/SF4.png',
'pics/SF5.png',
'pics/SF6.png',
'https://c1.staticflickr.com/8/7690/16498707754_950b34d8e2_b.jpg',
];

var last_music = -1;
var this_music = -1;
var last_pic = -1;
var this_pic = -1;

function openInNewTab(url) {
	// window.name = 'parent';
	var win = window.open(url, '_blank');
	// win.blur();
	// window.open('','parent').focus();
}

function changeB(piclink){
	document.documentElement.style.backgroundImage = "url("+piclink+")";
}

function randLink(){
	var mdiv = 1000/mlinks.length;
	var pdiv = 1000/plinks.length;
	while (last_music == this_music) {
		var d = new Date();
		this_music = Math.floor(d.getMilliseconds()/mdiv);
	}
	last_music = this_music;
	while (last_pic == this_pic) {
		this_pic = Math.floor(Math.random()*plinks.length);
	}
	last_pic = this_pic;
	openInNewTab(mlinks[this_music]);
	changeB(plinks[this_pic]);
}

function displayInfo(){
	var panel = document.getElementById("infoPanel");
	if (panel.style.display === 'block'){
		panel.style.display = 'none';
	} else {
		panel.style.display = 'block';
	}
}


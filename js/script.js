// JavaScript Document
var coin1 = new Coin();
var coin2 = new Coin();
var coin3 = new Coin();
var coin4 = new Coin();
var coin5 = new Coin();

function Coin() {
	this.x = 50; // position on page; left to right
	this.y = 60; // position on page; top to bottom
	this.item_on_page;
	
	this.create = function() {
		// create a tag on the page
		this.item_on_page = document.createElement('img');
		this.item_on_page.style.position = 'absolute';
		// assume the game area is 800x600
		this.x = Math.floor(Math.random() * 800);
		this.y = Math.floor(Math.random() * 600);
		// use random # to assign items left css property
		this.item_on_page.style.left = this.x + 'px';
		this.item_on_page.style.top = this.y + 'px';
		// set attributes
		this.item_on_page.src = 'img/coin.png';
		document.body.appendChild(this.item_on_page);
	};
}
onload = init;
function init() {
	coin1.create();
	coin2.create();
	coin3.create();
	coin4.create();
	coin5.create();
}
/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-14.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	var imgElement = "";
	var fileName = "";
	//create a loop to go through the pictures
	for (var i = 0; i< imageArray.length; i++) {
		fileName = imageArray[i].substring(imageArray[i].lastIndexOf("/")+1);
		//create the elements needed for each picture, store the elements in variable
		imgElement = '<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(' + imageArray[i] + ');"><figcaption>' + fileName +'</figcaption></figure>';
		//attach a click handler to the figure you create.  call the "displayImage" function.
		$('figure').attr('onclick','displayImage(this)');
		//append the element to the #gallery section
		$("#gallery").append(imgElement);
	}

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$("#galleryModal").click(function(){$("#galleryModal").modal("hide");});
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(img){
	//find the url of the image by grabbing the background-image source, sto3re it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need
	var bg = $(img).css('background-image');
	bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
	bg = bg.substring(bg.lastIndexOf("images"), bg.length);

	var fileName = bg.substring(bg.lastIndexOf("/")+1,bg.lastIndexOf("."));
	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	$('.modal-title').text(fileName);
	$('img').attr('src', bg);
	$('#galleryModal').modal('show');
	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}






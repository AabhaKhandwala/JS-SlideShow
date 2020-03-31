
var slideShow={
	photoList:['photo1','photo2','photo3'],
	currentPhotoIndex: 0,
	getCurrentPhoto: function(){
		console.log("Current photo is: "+this.photoList[this.currentPhotoIndex]);
	},
	nextPhoto:function(){
		if(this.currentPhotoIndex < (this.photoList.length-1)){
		this.currentPhotoIndex++;
		console.log("next photo is: "+this.photoList[this.currentPhotoIndex]);
		}else
		console.log("End of slideshow");
	},
	previousPhoto:function(){
		if(this.currentPhotoIndex!=0){
		this.currentPhotoIndex--;
		console.log("Previous photo is: "+this.photoList[this.currentPhotoIndex]);
		}else
		console.log("Start of slideshow");
	}

}
	
slideShow.getCurrentPhoto();

slideShow.previousPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();

slideShow.nextPhoto();

slideShow.nextPhoto();



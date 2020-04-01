var slideShow = {
	photoList:['photo1','photo2','photo3'],
	currentPhotoIndex: 0,
	getCurrentPhoto: function(){
		console.log("Current photo is: "+this.photoList[this.currentPhotoIndex]);
	},
	nextPhoto:function(){
		if(this.currentPhotoIndex < (this.photoList.length-1)){
			if(this.currentPhotoIndex==0){
				console.log("first slide is: "+this.photoList[this.currentPhotoIndex]);
			}
		this.currentPhotoIndex++;
		console.log("next slide is: "+this.photoList[this.currentPhotoIndex]);
		}else{
		console.log("End of slideshow");
		this.pause();
	   }
	},
	previousPhoto:function(){
		if(this.currentPhotoIndex!=0){
		this.currentPhotoIndex--;
		console.log("Previous photo is: "+this.photoList[this.currentPhotoIndex]);
		}else
		console.log("Start of slideshow");
	},
	playInterval:null,
	play: function(){
		//var self=this;
		  this.playInterval=setInterval(function(){slideShow.nextPhoto()},2000)

	},
	pause: function(){
		clearInterval(this.playInterval);
	 }
}	




slideShow.play();




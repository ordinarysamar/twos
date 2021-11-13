var nxtlinkvalue = document.querySelector(".scroll-button--next").getAttribute("href");
const nxtlink = document.querySelector(".scroll-button--next");
const prevlink = document.querySelector(".scroll-button--previous");
var prevlinkvalue = document.querySelector(".scroll-button--previous").getAttribute("href");


// ele.getAtrribute("href")



list = ["#1" , "#2" , "#3"]
currentid = ""


nxtlink.addEventListener( "click" , e =>{
	for (i = 0; i in list; i++) {
		if ((window.location.href).slice(-2) == list[i]) {
			switch(i){
				case 0:
					console.log("value #1")
					document.querySelector(".scroll-button--next").href = "#2";
					break;
				case 1:
					console.log("value #2")
					document.querySelector(".scroll-button--next").href = "#3";
					break;
				case 2:
					console.log("value #3")
					document.querySelector(".scroll-button--next").href = "#1";
					break;
			};

		}
	}
})


prevlink.addEventListener("click" , e => {

	for (i = 0; i in list ; i++) {

		if ((window.location.href).slice(-2) == list[i]) {

			switch(i){
				case 0:
					console.log("value #1")
					document.querySelector(".scroll-button--previous").href = "#3";
					break;
				case 1:
					console.log("value #2")
					document.querySelector(".scroll-button--previous").href = "#1";
					break;
				case 2:
					console.log("value #3")
					document.querySelector(".scroll-button--previous").href = "#2";
					break;
			};

		}
	}
})

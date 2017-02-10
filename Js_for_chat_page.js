function postComment() {
	var post = prompt("Please type your comment below:");

	var commentContainer = document.getElementById("commentContainer");
	commentContainer.innerHTML += "<p>" + post +"</p>";
}
//window.setTimeout(postComment, 10000);
window.setTimeout(signIn, 10000);

function signIn() {
	var unm = prompt("USERNAME:");
	if (unm === "24zoe") {
		var pswd = prompt("PASSWORD:");
		if (pswd === "basket23ball") {
			alert("You are now signed in as 'ZOE'");
			var user = "Zoe"
		}
		else {
			alert("Wrong 'PASSWORD'")
			signIn()
		}
	}
	else if (unm === "24bella") {
		var pswd = prompt("PASSWORD:");
		if (pswd === "dance2girl") {
			alert("You are now signed in as 'BELLA'");
		}
		else {
			alert("Wrong 'PASSWORD'")
			signIn()
		}
	}
	else if (unm === "24amelia") {
		var pswd = prompt("PASSWORD:");
		if (pswd === "cheer1leading") {
			alert("You are now signed in as 'AMELIA'");
		}
		else {
			alert("Wrong 'PASSWORD'")
			signIn()
		}
	}
	else if (unm === "24cam") {
		var pswd = prompt("PASSWORD:");
		if (pswd === "basket3ball") {
			alert("You are now signed in as 'CAM'");
		}
		else {
			alert("Wrong 'PASSWORD'")
			signIn()
		}
	}
	else {
		signIn()
	}
}
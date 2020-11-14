import {split_hash} from "./utils.js";


function redraw() { 

    let content = "<h2>API Test</h2><ul>";
    content += "<li><a href='/api/observations'>List of Observations</a></li>";
    content += "<li><a href='/api/users'>List of Users</a></li>"; 
    content += "<li><a href='/api/users/1'>Detail of one user</a></li>"; 
    content += "<li><a href='/api/observations/1'>Detail of one observation</a></li>"; 
    content += "</ul>";
	
	let hash = split_hash(window.location.hash);
	console.log(hash);
	
	if (hash.path == "") {
	
	}
	else if(hash.path == "submit") {
		
	}
	else if(hash.path == "/#!/users/<id>") {
		
	}
	else if(hash.path == "/#!/observations/<id>") {
		
	}
	else if(hash.path == "observations") {
		
	}
	else if(hash.path == "users") {
		
	}
	

    // update the page
    document.getElementById("target").innerHTML = content;
}

/*
Main Page (/)
Observation Form (/#!/submit)
User Profile View (/#!/users/<id>)
Observation Detail View (/#!/observations/<id>)
Observation List View (/#!/observations)
Leaderboard View (/#!/users)
*/



window.onload = function() {
    redraw();
};

// Redraws the screen after changing hashes
window.onhashchange = redraw();


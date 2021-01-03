/** Use Icon Url https://feathericons.com/ */
feather.replace();

function dropdownMenu() {
	var containerID = document.getElementById("dropdownContainer"),
		btnSigninID = document.getElementById("btnSignin"),
		menuRightIcon = document.getElementsByClassName("menu-right-icon");

	/** Show/Hide dropdown menu */
	containerID.classList.toggle("show");

	/** Show/Hide Signin button */
	btnSigninID.classList.toggle("show");

	/** Show/Hide icon Search and Shopping cart */
	for (var i = 0; i < menuRightIcon.length; i++) {
		menuRightIcon[i].classList.toggle("hide");
	}
}

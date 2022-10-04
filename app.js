$(document).ready(() => {
	$("#ministry").hide();
	$("#Ministries").on("mouseenter", () => {
		$("#ministry").slideToggle();
	});
	$("#ministry").on("mouseleave", () => {
		$("#ministry").slideToggle();
	});
});

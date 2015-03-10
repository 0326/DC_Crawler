$("#tab-normal, #tab-company").bind("click", function(){
	var id = this.id.replace("tab", "content");
	$(".tab-select-container").css({"display":"none"});
	$("#"+id).css({"display":"block"});
});
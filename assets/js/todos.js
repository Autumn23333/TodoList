//change the li when click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if (event.which === 13) {
		//grab new input
		var newTodo = $(this).val();
		//clean the input
		$(this).val("");
		//creat new todos
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");
	}
});
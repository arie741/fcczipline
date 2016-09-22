//Wikipedia Viewer

var url = "https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	function testResults (form) {
		$("#results").html("loading....");
		var sval = form.inputbox.value;
		$.getJSON( url + sval, function(data){
			
			var results = data.query.pages;
			results = $.map(results, function (value, key){
				return {id: key, title: value.title, thumb: value.extract};
			});
			$("#results").html("");
			$.each(results, function(i, val){
				$("#results").append("<li class='sresults'><a href=https://en.wikipedia.org/?curid="+ val.id + ">" + "<h3>" + val.title + "</h3>"+ val.thumb + "</a></li>");
			});
			console.log(JSON.stringify(data.query.pages));
		});
	};
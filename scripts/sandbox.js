// JavaScript Document
$(document).ready(function(){
	
	var allTitles = [];
	var firstRecipeUrl = "/recipes?format=json";
	var currentRecipeUrl = firstRecipeUrl;
	var fetchMore = true;
	
	fetchUrlData(currentRecipeUrl);
	
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	
	var myContent = `<div id="options">
  <div class="option-set" data-group="brand">
    <input type="checkbox" value=""        id="brand-all" class="all" checked /><label for="brand-all">clear all</label>
    <input type="checkbox" value=".gluten-free" id="gluten-free" /><label for="gluten-free">gluten-free</label>
    <input type="checkbox" value=".cookbook" id="cookbook" /><label for="cookbook">cookbook</label>
    <input type="checkbox" value=".clean-eating" id="clean-eating" /><label for="clean-eating">clean-eating</label>
  </div></div>`;
	myContent += '<div id="recipesWrapper">';
	
	allTitles.forEach((recipe, index) => {
		var tagClasses = " ";
		if ( Array.isArray(recipe.tags) && recipe.tags.length ) {
			recipe.tags.forEach((tag,index) => {
				var tagHandle = tag.replace(/\s/g , "-");
				tagClasses += " " + tagHandle;
			});
		}
		
		
		myContent += '<h2 class="recipe-item-isotope ' + tagClasses + '">' + recipe.title + '</h2>';
	});
	
	myContent += '</div>';

	$('#contentContainer').html(myContent);
	
	$container = $('#recipesWrapper');
  $container.isotope();
	
	function fetchUrlData(theUrl) {
		$.ajax({
			url: theUrl,
			dataType: 'json',
			async: false,
			success: function(data) {
				$.each( data.items, function( key, val ) {
					var obj = {};
					obj["assetUrl"] = val.assetUrl;
					obj["body"] = val.body;
					obj["categories"] = val.categories;
					obj["customContent"] = val.customContent;
					obj["excerpt"] = val.excerpt;
					obj["fullUrl"] = val.fullUrl;
					obj["tags"] = val.tags;
					obj["title"] = val.title;
					obj["mediaFocalPoint"] = val.mediaFocalPoint;
					allTitles.push(obj);
				});
				fetchMore = data.pagination.nextPage;
				currentRecipeUrl = data.pagination.nextPageUrl + "&format=json";
			}
		});
	}
	
	function manageCheckbox( $checkbox ) {
		var checkbox = $checkbox[0];

		var group = $checkbox.parents('.option-set').attr('data-group');
		// create array for filter group, if not there yet
		var filterGroup = filters[ group ];
		if ( !filterGroup ) {
			filterGroup = filters[ group ] = [];
		}

		var isAll = $checkbox.hasClass('all');
		// reset filter group if the all box was checked
		if ( isAll ) {
			delete filters[ group ];
			if ( !checkbox.checked ) {
				checkbox.checked = 'checked';
			}
		}
		// index of
		var index = $.inArray( checkbox.value, filterGroup );

		if ( checkbox.checked ) {
			var selector = isAll ? 'input' : 'input.all';
			$checkbox.siblings( selector ).removeAttr('checked');


			if ( !isAll && index === -1 ) {
				// add filter to group
				filters[ group ].push( checkbox.value );
			}

		} else if ( !isAll ) {
			// remove filter from group
			filters[ group ].splice( index, 1 );
			// if unchecked the last box, check the all
			if ( !$checkbox.siblings('[checked]').length ) {
				$checkbox.siblings('input.all').attr('checked', 'checked');
			}
		}

	}
	
});
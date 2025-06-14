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
  <div class="option-set" data-group="tag">
    <input type="checkbox" value=""        id="brand-all" class="all" checked /><label for="brand-all">clear all</label>
    <input type="checkbox" value=".gluten-free" id="gluten-free" /><label for="gluten-free">gluten-free</label>
    <input type="checkbox" value=".cookbook" id="cookbook" /><label for="cookbook">cookbook</label>
    <input type="checkbox" value=".clean-eating" id="clean-eating" /><label for="clean-eating">clean-eating</label>
    <input type="checkbox" value=".sushi" id="sushi" /><label for="sushi">sushi</label>
    <input type="checkbox" value=".salmon" id="salmon" /><label for="salmon">salmon</label>
  </div></div><br/><br/><br/>`;
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
	
	var filters = {};
  $container.isotope();
  
	$('#options').on( 'change', function( jQEvent ) {
    var $checkbox = $( jQEvent.target );
    manageCheckbox( $checkbox );

    var comboFilter = getComboFilter( filters );

    $container.isotope({ filter: comboFilter });

    //$filterDisplay.text( comboFilter );
  });
	
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
	
	function getComboFilter( filters ) {
		var i = 0;
		var comboFilters = [];
		var message = [];

		for ( var prop in filters ) {
			message.push( filters[ prop ].join(' ') );
			var filterGroup = filters[ prop ];
			// skip to next filter group if it doesn't have any values
			if ( !filterGroup.length ) {
				continue;
			}
			if ( i === 0 ) {
				// copy to new array
				comboFilters = filterGroup.slice(0);
			} else {
				var filterSelectors = [];
				// copy to fresh array
				var groupCombo = comboFilters.slice(0); // [ A, B ]
				// merge filter Groups
				for (var k=0, len3 = filterGroup.length; k < len3; k++) {
					for (var j=0, len2 = groupCombo.length; j < len2; j++) {
						filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
					}

				}
				// apply filter selectors to combo filters for next group
				comboFilters = filterSelectors;
			}
			i++;
		}

		var comboFilter = comboFilters.join(', ');
		return comboFilter;
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
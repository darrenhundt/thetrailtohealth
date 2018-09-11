// JavaScript Document
console.log('hello from customboxhundt.js');


$(document).ready(function(){

	
	var categoryCount = 0;
	
	$('.category-cookbook').each(function(i){
		var currentRecipe = $(this);
		var newID = 'shopify-modal-launcher-' + i;
		currentRecipe.find('.modal-button').attr('id',newID);
		var imgURL = $(this).find('.popup-top img').first().attr('src');
		$(this).find('.popup-top').css('background-image','url("' + imgURL + '")');
		var newTriggerClass= 'modal-launcher-' + i;
		var newTargetClass = 'recipe-modal-' + i;
		var newTrigger = $(this).find('.content-wrapper').first();
		var newTarget = $(this).find('.popup-content').first();
		newTrigger.addClass(newTriggerClass);
		newTarget.addClass(newTargetClass);
		
		categoryCount++;
	});
	

	(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

})();
/*]]>*//* end shopify code */


	for(let i = 0; i < categoryCount; i++) {
		$('.modal-launcher-' + i).click( function(e){
			e.preventDefault();
			new Custombox.modal({
				content: {
					target: '.recipe-modal-' + i
				},
				overlay: {
					active: true,
					opacity: 0.65
				}
			}).open();
		});
		
		var shopifyButtonId = 'shopify-modal-launcher-' + i;
		
			function ShopifyBuyInit() {
				var client = ShopifyBuy.buildClient({
					domain: 'the-trail-to-health.myshopify.com',
					apiKey: '54c4cc8de04d9d83a97dbab092662aa9',
					appId: '6',
				});

				ShopifyBuy.UI.onReady(client).then(function (ui) {
					ui.createComponent('product', {
						id: [1319374094424],
						node: document.getElementById(shopifyButtonId),
						moneyFormat: '%24%7B%7Bamount%7D%7D',
						options: {
			"product": {
				"variantId": "all",
				"width": "240px",
				"contents": {
					"img": false,
					"imgWithCarousel": false,
					"title": false,
					"variantTitle": false,
					"price": false,
					"description": false,
					"buttonWithQuantity": false,
					"quantity": false
				},
				"text": {
					"button": "PRE-ORDER NOW"
				},
				"styles": {
					"product": {
						"text-align": "left",
						"@media (min-width: 601px)": {
							"max-width": "100%",
							"margin-left": "0",
							"margin-bottom": "50px"
						}
					},
					"button": {
						"background-color": "#e5e5e5",
						"color": "#000000",
						"padding-left": "px",
						"padding-right": "px",
						":hover": {
							"background-color": "#cecece",
							"color": "#000000"
						},
						"border-radius": "0px",
						":focus": {
							"background-color": "#cecece"
						},
						"font-weight": "bold"
					},
					"title": {
						"font-size": "26px"
					},
					"price": {
						"font-size": "18px"
					},
					"compareAt": {
						"font-size": "15px"
					}
				}
			},
			"cart": {
				"contents": {
					"button": true
				},
				"styles": {
					"button": {
						"background-color": "#e5e5e5",
						"color": "#000000",
						":hover": {
							"background-color": "#cecece",
							"color": "#000000"
						},
						"border-radius": "0px",
						":focus": {
							"background-color": "#cecece"
						},
						"font-weight": "bold"
					},
					"footer": {
						"background-color": "#ffffff"
					}
				}
			},
			"modalProduct": {
				"contents": {
					"img": false,
					"imgWithCarousel": true,
					"variantTitle": false,
					"buttonWithQuantity": true,
					"button": false,
					"quantity": false
				},
				"styles": {
					"product": {
						"@media (min-width: 601px)": {
							"max-width": "100%",
							"margin-left": "0px",
							"margin-bottom": "0px"
						}
					},
					"button": {
						"background-color": "#e5e5e5",
						"color": "#000000",
						"padding-left": "px",
						"padding-right": "px",
						":hover": {
							"background-color": "#cecece",
							"color": "#000000"
						},
						"border-radius": "0px",
						":focus": {
							"background-color": "#cecece"
						},
						"font-weight": "bold"
					}
				}
			},
			"toggle": {
				"styles": {
					"toggle": {
						"background-color": "#e5e5e5",
						":hover": {
							"background-color": "#cecece"
						},
						":focus": {
							"background-color": "#cecece"
						},
						"font-weight": "bold"
					},
					"count": {
						"color": "#000000",
						":hover": {
							"color": "#000000"
						}
					},
					"iconPath": {
						"fill": "#000000"
					}
				}
			},
			"productSet": {
				"styles": {
					"products": {
						"@media (min-width: 601px)": {
							"margin-left": "-20px"
						}
					}
				}
			}
		}
					});
				});
			}
		
		
		
		
	}	
	
	
});



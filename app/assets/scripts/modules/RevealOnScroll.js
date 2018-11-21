import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elementClass,offsetVal) {
		this.itemsToReveal = elementClass;
		this.offsetValue = offsetVal;
		this.hideInitially();		
		this.createWaypoints();		
	}
	
	
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,    /*DOM element*/
				handler: function() {    /*Action*/
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetValue
			});								
		});		
	}
}

export default RevealOnScroll;


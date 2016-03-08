define('omni-sale-order-model', [
	'omni',
	'omni-timeslot-model'
], function(
	omni,
    TimeSlot
) {

	"use strict";

	function SaleOrder(data) {
		this.data = data;
	}

	SaleOrder.prototype = {
		orderNumber: function(){ return this.data.order_number; },		
		timezoneOffset: function() {
			if (this.data.timezone_offset == null)
				this.data.timezone_offset = 0;
			var offsetHours = this.data.timezone_offset / 36;
			var prefix = offsetHours > 0 ? '+' : '-';
			var absOffsetHours = Math.abs(offsetHours);
			var repeat = 4 - absOffsetHours.toString().length;
			while(repeat-- > 0) prefix += '0';
			return prefix + absOffsetHours.toString();
		},
		scheduledDate: function(){ 
			var formatted = this.data.scheduled_date;
			var offset = this.timezoneOffset();
			return new Date([formatted, offset].join(' ')); 
		},
		timeSlot: function(){
			return new TimeSlot({ start: this.scheduledDate().getTime() });
		}
	};

	omni.models.SaleOrder = SaleOrder;
	return SaleOrder;

});
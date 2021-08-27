// Ext.define('MyApp.view.main.center.CenterView', {
// 	extend: 'Ext.Container',
// 	xtype: 'centerview',
// 	cls: 'centerview',
// 	layout: 'card'
// });

// Ext.define('MyApp.view.main.center.CenterView', {
// 	extend: 'Ext.grid.Grid',
// 	title: 'Reykjavik Flight Departures',
// 	items: [{
// 		docked: 'top',
// 		xtype: 'toolbar',
// 		items: [{
// 			text: 'Sort on destination',
// 			handler: function(button){
// 				// Sort under program control
// 				button.up('grid').getStore().sort('to');
// 			}
// 		}]
// 	}],
// 	store: {
	 
// 		// Sort via store configuration
// 		sorters: [{
// 			property: 'airline'
// 		}],
	 
// 		type: 'store',
// 		autoLoad: true,
// 		fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
// 		proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
// 	},
	 
// 	columns: [{
// 		xtype: 'datecolumn',
// 		text: 'Date',
// 		dataIndex: 'date',
// 		format: 'M j',
// 		width: 60
// 	}, {
// 		xtype: 'column', // This is the default column xtype
// 		text: 'Airline',
// 		dataIndex: 'airline'
// 	}, {
// 		text: 'To',
// 		dataIndex: 'to'
// 	}, {
// 		text: 'Scheduled',
// 		dataIndex: 'plannedDeparture',
// 		align: 'center'
// 	}, {
// 		text: 'Status',
// 		dataIndex: 'realDeparture',
// 		flex: 1
// 	}],
	 
// 	});
	 
	// Ext.application({
	// name: 'MyApp',
	// mainView: 'MyApp.view.Main'
	// });

	Ext.define('MyApp.view.main.center.CenterView', {
		extend: 'Ext.grid.Grid',
		title: 'AIR INDIA Flight Departures',
		 
		plugins: {
			gridfilters: true
		},
		 
		onClearFilters: function(){
			this.getStore().clearFilter();
		},
		columns: [{
			xtype: 'datecolumn',
			text: 'Date',
			dataIndex: 'date',
			format: 'M j, Y',
			filter: true,
			width: 120
		}, {
			xtype: 'column', // This is the default column xtype
			text: 'Airline',
			dataIndex: 'airline',
			width: 200,
			filter: 'string'
		}, {
			text: 'To',
			dataIndex: 'to',
			width: 200,
			filter: 'string'
		}, {
			text: 'Scheduled',
			dataIndex: 'plannedDeparture',
			align: 'center'
		}, {
			text: 'Status',
			dataIndex: 'realDeparture',
			flex: 1
		}],
		 
		store: {
			type: 'store',
			autoLoad: true,
			fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
			proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
		}
		 
		});
		// Ext.application({
		// name: 'MyApp',
		// mainView: 'MyApp.view.Main'
		// });
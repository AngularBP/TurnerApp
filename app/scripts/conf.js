//e2e mock and live
//if there is no mock url, then live will be used for mock.
Neo.e2e = {
	config: {
		path: {
			'Base':{
				mock: './mock',
				live: './api'
			}
		}
	},
	url: {
		'SignIn': {
			live: 'SignIn',//./api/SignIn, mock:./api/SignIn.json
		},
		'SignUp': {
			live: 'SignUp'
		}
	}
};
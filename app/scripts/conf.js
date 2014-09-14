//e2e mock and live
//if there is no mock url, then live will be used for mock.
Neo.Endpoint = {
	config: {
		path: {
			base:{
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
//e2e mock and live
//if there is no mock url, then live will be used for mock.
PT.Endpoint = {
	config: {
		path: {
			base:{
				mock: './mock',
				live: './api'
			}
		}
	},
	url: {
		'signIn': {
			live: 'signIn',//./api/SignIn, mock:./api/SignIn.json
		},
		'signUp': {
			live: 'signUp'
		}
	}
};
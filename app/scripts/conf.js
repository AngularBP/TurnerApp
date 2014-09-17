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
		'signOut': {
			live: 'signOut',
		},
		'signUp': {
			live: 'signUp'
		}
	}
};

PT.I18n = {
	'signIn.fail':'Error: Invalid user or password',
	'signUp.fail':'Error: Sign up error'
};
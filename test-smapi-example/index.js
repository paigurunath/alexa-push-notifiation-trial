
const mySmapiClient = require('node-alexa-smapi')();
const mySecrets = require('./secrets.json');
const myManifest = require('./skill.json');

/*
mySmapiClient.tokens.refresh({
  refreshToken: mySecrets.refreshToken,
  clientId: mySecrets.clientId,
  clientSecret: mySecrets.clientSecret,
})
.then(() => mySmapiClient.skills.getManifest('amzn1.ask.skill.9a7b5c52-404e-4936-8bf5-9cc7b5134e07', 'development'))
.then(data => console.log(JSON.stringify(data)))
.catch(error => {
	console.log('------------------------------------------------------------------')
	console.log(error)
	});
*/


mySmapiClient.tokens.refresh({
  refreshToken: mySecrets.refreshToken,
  clientId: mySecrets.clientId,
  clientSecret: mySecrets.clientSecret,
})
.then(() => mySmapiClient.skills.update('amzn1.ask.skill.9a7b5c52-404e-4936-8bf5-9cc7b5134e07', 'development', myManifest))
.then(data => console.log(JSON.stringify(data)))
.catch(error => {
	console.log('---------------------------------------------------------------------');
	console.log(error)
});

//.then(() => {
//  mySmapiClient.vendors.list().then(result => {
//    console.log(`My vendor list: ${JSON.stringify(result, null, ' ')}`);
//  })
//});
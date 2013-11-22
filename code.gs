/**
 * Special function that handles HTTP GET requests to the published web app.
 * @return {HtmlOutput} The HTML page to be served.
 */
function doGet() {
	return HtmlService.createTemplateFromFile('index').evaluate()
	.setTitle('Storage Test')
	.setSandboxMode(HtmlService.SandboxMode.NATIVE);
}

/**
 * Sets the value of the given key.
 * Returns the key-value pair
 */
function setKey(key, value) {
	return ScriptProperties.setProperty(key, value);
}

/**
 * Return the value of the given key.
 * Returns the value
 */
function getKey(key, value) {
	return ScriptProperties.getProperty(key);
}
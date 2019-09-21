exports.getItemFromLocalStorage = key => {
	return localStorage.getItem(key);
};

exports.setItemToLocalStorage = (key, value) => {
	localStorage.setItem(key, value);
};

exports.removeItemFromLocalStorage = key => {
	localStorage.removeItem(key);
};

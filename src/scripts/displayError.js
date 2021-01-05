export const displayError = (type) => {
	const error = document.createElement('div');
	error.id = 'error';

	switch (type) {
		case 'invalid':
			error.innerHTML = 'Please enter a valid city.';
			break;
		case 'duplicate':
			error.innerHTML = 'Please enter a different city.';
	}

	if (!document.querySelector('#error')) document.querySelector('header').appendChild(error);

	setTimeout(() => {
		if (document.querySelector('#error')) document.querySelector('header').removeChild(error);
	}, 2500);
};

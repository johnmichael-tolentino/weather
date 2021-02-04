// Helper funciton that renders the appropriate error.
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

	// Prevents errors from being duplicated on the page.
	if (!document.querySelector('#error')) document.querySelector('header').appendChild(error);

	// Clears error after 2.5 seconds.
	setTimeout(() => {
		if (document.querySelector('#error')) document.querySelector('header').removeChild(error);
	}, 2500);
};

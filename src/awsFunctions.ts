export type FormData = {
	email: string;
	message: string;
	name: string;
};

const API_URL =
	'https://hub8olesd9.execute-api.us-east-1.amazonaws.com/default';

export async function sendMessage(data: FormData) {
	const url = `${API_URL}/sendContactEmail`;

	const body = JSON.stringify(data);
	const requestOptions = {
		method: 'POST',
		body
	};

	await fetch(url, requestOptions)
		.then((response) => {
			if (!response.ok) throw new Error('Error in fetch');
			return response.json();
		})
		.then((response) => {
			console.log('Email sent successfully!');
		})
		.catch((error) => {
			throw new Error('An unkown error occured.');
		});
}

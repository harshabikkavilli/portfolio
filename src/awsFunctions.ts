import AWS from 'aws-sdk';

export type FormData = {
	email: string;
	message: string;
	name: string;
};

export async function sendMessage(data: FormData) {
	const ses = new AWS.SES({
		region: 'us-east-1',
		credentials: {
			accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
			secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || ''
		}
	});
	console.log('data: ', data);
	const params: AWS.SES.Types.SendEmailRequest = {
		Destination: {
			ToAddresses: ['harshabikkavilli@gmail.com']
		},
		Message: {
			Body: {
				Text: {
					Data: data.message
				}
			},
			Subject: {
				Data: `${data.name} contacted from Portfolio - ${data.email}`
			}
		},
		Source: `${data.name.replace(/ /g, '')}@harshabikkavilli.com`
	};

	return ses.sendEmail(params).promise();
}

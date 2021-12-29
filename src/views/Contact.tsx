import classNames from 'classnames';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Divider} from 'primereact/divider';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import styled, {css} from 'styled-components';
import {FormData, sendMessage} from '../awsFunctions';
import BaseView from './BaseView';

export default function Contact() {
	const [showMessage, setShowMessage] = useState(false);

	const defaultValues: FormData = {
		email: '',
		message: '',
		name: ''
	};
	const [formData, setFormData] = useState<FormData>(defaultValues);
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const {
		control,
		formState: {errors},
		handleSubmit,
		reset
	} = useForm({defaultValues});

	const getFormErrorMessage = (name: 'email' | 'message' | 'name') => {
		return (
			errors[name] && <small className='p-error'>{errors[name]?.message}</small>
		);
	};

	const dialogFooter = (
		<div className='p-d-flex p-jc-center'>
			<Button
				label='OK'
				className='p-button-text'
				autoFocus
				onClick={() => setShowMessage(false)}
			/>
		</div>
	);

	async function onSubmit(data: FormData) {
		setLoading(true);
		setFormData(data);
		try {
			await sendMessage(data);
			setShowMessage(true);
			setSuccess(true);
		} catch (err) {
			console.log(err);
			setShowMessage(true);
			setSuccess(false);
		} finally {
			reset();
			setLoading(false);
		}
	}

	return (
		<BaseView>
			<Wrapper>
				<div className='form'>
					<Dialog
						visible={showMessage}
						onHide={() => setShowMessage(false)}
						position='top'
						footer={dialogFooter}
						showHeader={false}
						breakpoints={{'960px': '80vw'}}
						style={{width: '50vw'}}>
						{success ? (
							<div className='p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3'>
								<i
									className='pi pi-check-circle'
									style={{fontSize: '5rem', color: 'var(--green-500)'}}></i>
								<h5>Message Sent!</h5>
								<p style={{lineHeight: 1.5, textIndent: '1rem'}}>
									Thank you, <b>{formData.name}</b> for reaching out.
								</p>
								<p style={{lineHeight: 1.5, textIndent: '1rem'}}>
									I will contact you within the next <strong>48hrs</strong>.
								</p>
							</div>
						) : (
							<div className='p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3'>
								<i
									className='pi pi-times-circle'
									style={{fontSize: '5rem', color: 'var(--pink-500)'}}></i>
								<h5>Message Failed!</h5>
								<p style={{lineHeight: 1.5, textIndent: '1rem'}}>
									Thank you, <b>{formData.name}</b> for reaching out.
								</p>
								<p style={{lineHeight: 1.5, textIndent: '1rem'}}>
									Something went wrong submitting your message. Please try other
									contact options or check again after sometime.
								</p>
							</div>
						)}
					</Dialog>

					<div className='p-d-flex p-jc-center'>
						<div className='card'>
							<form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
								<div className='p-field'>
									<span className='p-float-label'>
										<Controller
											name='name'
											control={control}
											rules={{required: 'Name is required.'}}
											render={({field, fieldState}) => (
												<InputText
													id={field.name}
													{...field}
													autoFocus
													className={classNames({
														'p-invalid': fieldState.invalid
													})}
												/>
											)}
										/>
										<label
											htmlFor='name'
											className={classNames({'p-error': errors.name})}>
											Name*
										</label>
									</span>
									{getFormErrorMessage('name')}
								</div>
								<div className='p-field'>
									<span className='p-float-label p-input-icon-right'>
										<i className='pi pi-envelope' />
										<Controller
											name='email'
											control={control}
											rules={{
												required: 'Email is required.',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													message:
														'Invalid email address. E.g. example@email.com'
												}
											}}
											render={({field, fieldState}) => (
												<InputText
													id={field.name}
													{...field}
													className={classNames({
														'p-invalid': fieldState.invalid
													})}
												/>
											)}
										/>
										<label
											htmlFor='email'
											className={classNames({'p-error': !!errors.email})}>
											Email*
										</label>
									</span>
									{getFormErrorMessage('email')}
								</div>
								<div className='p-field'>
									<span className='p-float-label'>
										<Controller
											name='message'
											control={control}
											rules={{required: 'Message is required.'}}
											render={({field, fieldState}) => (
												<InputTextarea
													id={field.name}
													{...field}
													className={classNames({
														'p-invalid': fieldState.invalid
													})}
													rows={5}
													cols={30}
													// autoResize
												/>
											)}
										/>
										<label
											htmlFor='message'
											className={classNames({'p-error': errors.message})}>
											Message*
										</label>
									</span>
									{getFormErrorMessage('message')}
								</div>
								<Button
									type='submit'
									label='Submit'
									loading={loading}
									className='p-mt-2'
									icon='pi pi-send'
								/>
							</form>
							<Divider
								layout='horizontal'
								align='center'
								style={{color: 'white'}}>
								<b>OR</b>
							</Divider>
							<ContactsGroup>
								<Button
									className='p-button-rounded p-0 mx-2'
									icon='pi pi-twitter'
									onClick={() => {
										window.open('https://twitter.com/harshabvns', '_blank');
									}}
									style={{backgroundColor: 'var(--blue-500)', color: '#fff'}}
								/>
								<Button
									className='p-button-rounded p-0 mx-2'
									icon='pi pi-linkedin'
									onClick={() => {
										window.open(
											'https://www.linkedin.com/in/harsha-bikkavilli-0382051b/',
											'_blank'
										);
									}}
									style={{backgroundColor: '#055a9b', color: '#fff'}}
								/>
								<Button
									className='p-button-rounded p-0 mx-2'
									icon='pi pi-github'
									onClick={() => {
										window.open(
											'https://github.com/harshabikkavilli',
											'_blank'
										);
									}}
									style={{
										backgroundColor: 'var(--bluegray-800)',
										color: '#fff'
									}}
								/>
							</ContactsGroup>
						</div>
					</div>
				</div>
			</Wrapper>
		</BaseView>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) =>
		props.theme.isBigScreen
			? css`
					width: calc(100% - 4rem);
					margin: auto;
			  `
			: css`
					flex-direction: column;
					width: calc(100% - 2rem);
					margin: 1rem;
			  `};
`;

const ContactsGroup = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

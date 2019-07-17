import React from 'react';
import { Layout } from '../components/Layout';
import { useForm } from '../hooks/useForm';

export default () => {

	const [ feedbackForm, change ] = useForm({
		formName: '',
		formEmail: '',
		formMessage: '',
	});

	const sendFeedback = () => {

	}

	return <Layout subTitle="Feedback">
			<form>
				<div>
					<label>Name</label>
					<input type="text" name="formName" value={feedbackForm.formName} onChange={change}/>
				</div>
				<div>
					<label>Email</label>
					<input type="email" name="formEmail" value={feedbackForm.formEmail} onChange={change}/>
				</div>
				<div>
					<label>Message</label>
					<textarea name="formMessage" onChange={change} value={feedbackForm.formMessage}></textarea>
				</div>
				<button onClick={sendFeedback}>Send Feedback</button>
			</form>
		</Layout>;
};
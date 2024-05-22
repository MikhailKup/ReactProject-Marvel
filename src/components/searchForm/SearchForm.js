import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import CriticalErrorMessage from '../errors/ErrorMessage';

import './SearchForm.scss'

const SearchForm = () => {
	const [char, setChar] = useState(null);
  const { error, getCharacterByName, clearError, process, setProcess} = useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char)
	};
	const updateChar = (name) => {
		clearError();
		getCharacterByName(name)
    .then(onCharLoaded)
		.then(() => setProcess('confirmed'));
	};

	const errorMessage = error ? <div className="searchform__error"><CriticalErrorMessage/></div> : null;
	const results = !char ? null : char.length > 0 ?
										<>
											<div className="searchform__bottom">
												<div className="searchform__success">There is! Visit {char[0].name} page?</div>
												<Link to={`/characters/${char[0].id}`} className="button button__secondary">
													<div className="inner">To page</div>
												</Link>
											</div>
										</> 
										: 
                    <>
											<div className="searchform__error">
                        The character was not found. Check the name and try again
                   		</div>
										</>
	return (
		<div className="searchform">
			<div className='searchform__title'>Or find a character by name:</div>
			<Formik
				initialValues={{
					name: '',
				}}
				validationSchema={Yup.object({
						name: Yup.string().required('This field is required'),
				})}
				onSubmit = { ({name}) => {
					updateChar(name);
				}}
			>
				<Form>
					<div className="searchform__top">
						<Field id='name' type="text" name="name" placeholder="Enter name"/>
						<button className="button button__main" type="submit" disabled={process === 'loading'}>
							<div className='inner'>FIND</div>
						</button>
					</div>
					<div className="searchform__bottom">
						<ErrorMessage component="div" className="searchform__error" name="name"/>
					</div>
				</Form>
			</Formik>
			{results}
			{errorMessage}
		</div>
	);
};

export default SearchForm;
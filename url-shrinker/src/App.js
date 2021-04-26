import React, { useState, useEffect } from 'react';
import { addUrl, getUrl, visitUrl } from './apiCalls/api';

const App = () => {
	const [ originalUrl, setOriginalUrl ] = useState('');
	const [ dataUrl, setDataUrl ] = useState([]);
	const [ visitedUrl, setVisitedUrl ] = useState('');

	useEffect(() => {
		(async () => {
			const data = await getUrl();
			setDataUrl(data);
		})();
	}, []);

	const submitHandler = () => {
		addUrl(originalUrl);
	};

	const visitHandler = async (codes) => {
		const data = await visitUrl(codes);
		setVisitedUrl(data);
	};

	return (
		<React.Fragment>
			<form className='form' onSubmit={submitHandler}>
				<div className='form-group'>
					<label className='title-text' htmlFor='search'>
						URL SHRINKER
					</label>
					<input
						type='text'
						className='form-control'
						id='searchText'
						aria-describedby='text'
						placeholder='Enter Original /  Long Url'
						onChange={(e) => setOriginalUrl(e.target.value)}
					/>
					<button type='submit' className='btn btn-dark mt-4'>
						SHRINK
					</button>
				</div>
			</form>
			<div className='content'>
				<h3>SHRINKER URLs</h3>
				<div className='table-holder'>
					<table className='table table-dark url-holder table-responsive'>
						<thead>
							<tr>
								<th>Original Url</th>
								<th>Shrinker Url</th>
                <th></th>
							</tr>
						</thead>

						{dataUrl.map((url) => (
							<tbody>
								<tr className='table-dark'>
									<td className='table-dark originalUrl'>{url.originalUrl}</td>
									<td className='table-dark shrinkerUrl'>
										<a href={visitedUrl} rel='noreferrer' target='_blank'>
											{url.urlCode}
										</a>
									</td>
									<td>
										<button
											type='button'
											onClick={() => visitHandler(url.urlCode)}
											className='btn btn-warning shrinkerUrl'
										>
											<a href={visitedUrl} rel='noreferrer' target='_blank'>
												VISIT SITE
											</a>
										</button>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;

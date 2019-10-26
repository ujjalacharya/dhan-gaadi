const Bunch = ({ user }) => {
	return (
		<>
			<h1>Filters: </h1>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
			<h3>Hello {user}</h3>
		</>
	);
};

Bunch.getInitialProps = () => {
	let user = 'Ujjal';
	return { user };
};

export default Bunch;

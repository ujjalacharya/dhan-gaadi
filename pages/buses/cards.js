import SingleCard from "./singleCard";

const Cards = () => {
	return (
		<div className="cards">
			<div className="card-header">
				<h2>
					<b>10</b> seats available in <strong>20</strong> buses
				</h2>
			</div>
				<h4 className="card-header" style={{ color: 'red' }}>Date- Katrik 02 2076</h4>

    <div>
     {[1, 2, 3, 4, 5].map(num => (
       <SingleCard />
     ))}
    </div>
		</div>
	);
};

export default Cards;

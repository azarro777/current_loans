import { useDispatch, useSelector } from 'react-redux';
import { setModal, setModalData } from '../../reducers/appReducer';
import './Card.css';

export const Card = (props) => {
	const {id, title, tranche, available, term_remaining} = props;
	const loans = useSelector(state => state.app.loans);
	const dispatch = useDispatch();

	const modalHandler = () => {
		dispatch(setModal(true));
		dispatch(setModalData({id, available, term_remaining}));
		console.log("Modal", props); //! Console log!
		console.log("card", id, loans.find(item => item.id === id)); //! Console log!
	};

	return (
		<div className="card">
			<div className="card-wraper">
				<div className="card-container">
					<h2 className="card-title">{title}</h2>
					<h3 className="card-text">{tranche}</h3>
				</div>
				<button className="card-button" onClick={() => modalHandler()}>INVEST</button>
			</div>
		</div>
);
};
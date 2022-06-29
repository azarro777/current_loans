import { useDispatch } from 'react-redux';
import { setModal, setModalData } from '../../reducers/appReducer';
import './Card.css';

export const Card = (props) => {
	const {id, isInvest, title, tranche, available, term_remaining} = props;
	const dispatch = useDispatch();

	const modalHandler = () => {
		dispatch(setModal(true));
		dispatch(setModalData({id, available, term_remaining}));
	};

	return (
		<div className="card">
			{isInvest && <p className="card-invested" >Invested</p>}
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
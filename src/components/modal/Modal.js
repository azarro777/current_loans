import { useState } from 'react';
import closeImg from './close.svg';
import { setAvailableAmount, setInvest, setModal } from '../../reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { convertSeconds } from '../../utils/convertSeconds';
import './Modal.css';

export const Modal = () => {
	const dispatch = useDispatch();
	const isModalActive = useSelector(state => state.app.isModalActive);
	const modalData = useSelector(state => state.app.modalData);
	const {available, term_remaining} = modalData;
	
	const [modalValue, setModalValue] = useState('');

	const investHandler = () => {
		dispatch(setAvailableAmount(Number(modalValue)));
		setModalValue('');
	};

	const closeHandler = () => {
		dispatch(setModal(false));
		dispatch(setInvest(modalData));
	};

	return (
	<div className={isModalActive ? "modal active" : "modal"}>
		<div className="modal-content">
			<button className="modal-close__button" onClick={() => closeHandler()}>
				<img src={closeImg} alt="close"/>
			</button>
			<div className="modal-content__block">
				<h1 className="modal-title">Invest in Loan</h1>
				<h3 className="modal-title__clicked">Loan title you’ve clicked</h3>
				<h3 className="modal-title__amount">Amount available: ${available}</h3>
				<h3 className="modal-title__ends">Loan ends in: {convertSeconds(term_remaining)}</h3>
				<h2 className="modal-title__investment">Investment amount</h2>
				<div className="modal-input__block">
					<input 
						type="number"
						value={modalValue} 
						onChange={(event) => setModalValue(event.target.value)} 
						className="modal-title__input"
					/>
					<button onClick={() => investHandler()} className="card-button">INVEST</button>
				</div>
			</div>
		</div>
	</div>
);
};
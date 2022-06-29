import reducer from './appReducer';
import * as actions from './appReducer';
import expect from 'expect';
import initialData from '../utils/loans.json';

describe('app reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
	loans: [],
  amount: null,
  isModalActive: false,
  modalData: {}
		});
	});
	it('should handle SET_MODAL_ACTIVE', () => {
		const setModalAction = {
			type: actions.setModal,
			payload: {bool: false}
		};
		expect(reducer({payload: {bool: false}}, setModalAction)).toEqual({payload: {bool: false}});
	});
	it('should handle SET_INVEST', () => {
		const setInvestAction = {
			type: actions.setInvest,
			payload: {bool: true}
		};
		expect(reducer({payload: {bool: true}}, setInvestAction)).toEqual({payload: {bool: true}});
	});
	it('should handle LOAD_DATA', () => {
		
		const loadData = {
			type: actions.loadData,
			payload: initialData
		};
		expect(reducer(loadData.payload.loans, loadData)).toEqual(initialData.loans);
	});
	it('should handle SET_MODAL_DATA', () => {
		const setModalData = {
			type: actions.setModalData,
			payload: {}
		};
		expect(reducer({}, setModalData)).toEqual(setModalData.payload);
	});
	it('should handle SET_AVAILABLE_AMOUNT', () => {
		const setAvailableAmount = {
			type: actions.setAvailableAmount,
			payload: jest.mock()
		};
		expect(reducer(setAvailableAmount.payload, setAvailableAmount)).toEqual(setAvailableAmount.payload);
	});
});
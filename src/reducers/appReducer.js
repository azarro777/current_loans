import { convertNumEu } from '../utils/convertNumEu';
import { convertNumUs } from '../utils/convertNumUs';

const LOAD_DATA = 'LOAD_DATA';
const SET_MODAL_ACTIVE = 'SET_MODAL_ACTIVE';
const SET_MODAL_DATA = 'SET_MODAL_DATA';
const SET_AVAILABLE_AMOUNT = 'SET_AVAILABLE_AMOUNT';
const SET_INVEST = 'SET_INVEST';

const defaultState = {
  loans: [],
  amount: null,
  isModalActive: false,
  modalData: {}
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        loans: [...action.payload],
        amount: action.payload[0].amount
      };
    case SET_MODAL_ACTIVE:
      return { ...state, isModalActive: action.payload };
    case SET_MODAL_DATA:
      return { ...state, modalData: action.payload };
    case SET_AVAILABLE_AMOUNT:
      return {
        ...state,
        modalData: {
          ...state.modalData,
          available: convertNumUs(
            convertNumEu(state.modalData.available) - +action.payload
          )
        },
        amount: convertNumUs(convertNumEu(state.amount) - +action.payload)
      };
    case SET_INVEST:
      return {
        ...state,
        loans: state.loans.map((item) =>
          item.id === action.payload.id
            ? { ...item, available: action.payload.available, isInvest: true }
            : item
        )
      };
    default:
      return state;
  }
}

export const loadData = (data) => ({ type: LOAD_DATA, payload: data });
export const setModal = (bool) => ({ type: SET_MODAL_ACTIVE, payload: bool });
export const setModalData = (data) => ({ type: SET_MODAL_DATA, payload: data });
export const setAvailableAmount = (num) => ({
  type: SET_AVAILABLE_AMOUNT,
  payload: num
});
export const setInvest = (bool) => ({ type: SET_INVEST, payload: bool });

import data from '../utils/loans.json';
import { loadData } from '../reducers/appReducer';

export const fetchData = () => {
	return dispatch => {
		try {
			dispatch(loadData(data.loans));
		} catch (error) {
			console.log(error);
		}
	}
};
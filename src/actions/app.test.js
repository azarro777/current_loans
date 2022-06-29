import React from 'react';
import { app } from './app';
import { shallow } from 'enzyme';

describe('Testing <app/>', () => {
	it('app have rendered correctly', () => {
		const app = shallow(<app/>);
		expect(app).toMatchSnapshot();
	});
});
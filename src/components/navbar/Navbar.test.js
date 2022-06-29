import React from 'react';
import { Navbar } from './Navbar';
import { shallow } from 'enzyme';

describe('Testing <Navbar/>', () => {
	it('Navbar have rendered correctly', () => {
		const navbar = shallow(<Navbar/>);
		expect(navbar).toMatchSnapshot();
	});
});
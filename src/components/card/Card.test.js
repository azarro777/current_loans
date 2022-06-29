import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

describe("on mount", () => {
  it("dispatch search action to store", () => {
		const mockStore = configureMockStore([thunk])([]);;
		const store = mockStore;
		shallow(<Provider store={store}><Card/></Provider>)
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });
	it('Card have rendered correctly', () => {
		const mockStore = configureMockStore([thunk])([]);;
		const store = mockStore;
		const card = shallow(<Provider store={store}><Card/></Provider>);
		expect(card).toMatchSnapshot();
	});
});

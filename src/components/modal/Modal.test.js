import React from 'react';
import { Modal } from './Modal';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

describe("on mount", () => {
  it("dispatch search action to store", () => {
		const mockStore = configureMockStore([thunk])([]);;
		const store = mockStore;
		shallow(<Provider store={store}><Modal/></Provider>)
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });
	it('Modal have rendered correctly', () => {
		const mockStore = configureMockStore([thunk])([]);;
		const store = mockStore;
		const modal = shallow(<Provider store={store}><Modal/></Provider>);
		expect(modal).toMatchSnapshot();
	});
});
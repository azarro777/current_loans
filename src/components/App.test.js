import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux';
import App from './App';

describe('App component', () => {
	let useEffect;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(f => f());
	};

	const mockStore = configureMockStore([thunk])([]);;
	const store = mockStore;

	useEffect = jest.spyOn(React, 'useEffect');
	mockUseEffect();
	mockUseEffect();
	
	shallow(<Provider store={store}><App /></Provider>)

	describe("on mount", () => {
    it("dispatch search action to store", () => {
      const actions = store.getActions();
      expect(actions).toEqual([]);
    });
    it("test the map function", () => {
      const wrapper = shallow((
        <div>
          <div className="foo">bax</div>
          <div className="foo">bar</div>
          <div className="foo">baz</div>
        </div>
      ));
      const texts = wrapper.find('.foo').map((node) => node.text());
      expect(texts).toEqual(['bax', 'bar', 'baz']);
    })
  });
});

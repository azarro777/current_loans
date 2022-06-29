import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import * as matches from 'jest-extended';
expect.extend(matches);

Enzyme.configure({adapter: new Adapter()});

const config = {
	jest: {
		setupFilesAfterEnv: ['./testSetup.js']
	}
};

export default config;
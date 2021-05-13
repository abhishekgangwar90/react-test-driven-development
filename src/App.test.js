// import { render, screen } from '@testing-library/react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});


test('renders app without crash', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.exists()).toBe(true)
});



test('renders only app component', () => {
  const wrapper = mount(<App/>);
  console.log(wrapper.debug())
  // expect(wrapper.exists()).toBe(true)
});

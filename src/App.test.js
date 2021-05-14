import { shallow } from 'enzyme';
import App from './App';


test('Renders App without crash', () =>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find("[data-test='App-header']").text()).toBe('React Testing Application')
})
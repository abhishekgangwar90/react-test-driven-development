import {shallow} from 'enzyme';
import Counter from './Counter';

describe('Counter component Renders', () =>{
  test('app without crash', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.exists()).toBe(true)
  });

  test('app header', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find("[data-test='Counter-header']").length).toBe(1);
  });

  test('count without crash', () =>{
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find("[data-test='Counter-count']").text()).toBe('0')
  });


  test('Increase button', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find("[data-test='Counter-button-increase']").length).toBe(1);
  });

  test('Decrease button', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find("[data-test='Counter-button-decrease']").length).toBe(1);
  });
})

describe('Counter component', () =>{
  test('Increase count on button click', () =>{
      const wrapper = shallow(<Counter/>);
      const button = wrapper.find("[data-test='Counter-button-increase']");
      button.simulate('click');

      const count = wrapper.find("[data-test='Counter-count']").text();
      expect(count).toBe("1")
  })

  test('should show error when decreasing count if count is already zero', () =>{
      const wrapper = shallow(<Counter/>);
      const button = wrapper.find("[data-test='Counter-button-decrease']");
      button.simulate('click');

      const errorText = wrapper.find("[data-test='Counter-count-error']").text();
      expect(errorText).toBe("Can not decrement the counter, As is already zero.");
  })

  test('Decrease count on button click', () =>{
      const wrapper = shallow(<Counter/>);

      const button = wrapper.find("[data-test='Counter-button-decrease']");
      button.simulate('click');

      const buttonDecrease = wrapper.find("[data-test='Counter-button-decrease']");
      buttonDecrease.simulate('click');

      const count = wrapper.find("[data-test='Counter-count']").text();
      expect(count).toBe("0")
  })
})

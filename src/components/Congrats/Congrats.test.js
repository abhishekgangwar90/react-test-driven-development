import {shallow} from 'enzyme'
import { findByTestAttr } from '../../utils/test-utils'
import Congrats from './Congrats'

/**
 * @param {*} [props={}]
 * @return {*} 
 */
const setup = (props ={}) =>{
  return shallow(<Congrats {...props}/>)
}

describe('Congrats component',() =>{

  test('Should render without error',()=>{
    const wrapper = setup({success: true});
    const att = findByTestAttr(wrapper, 'Congrats-component');
    expect(att.length).toBe(1)
  })

  test('Should show nothing when Prop `success` is false',()=>{
    const wrapper = setup({success: false});
    const attr = findByTestAttr(wrapper, 'Congrats-component');
    expect(attr.text()).toBe('')
  })

  test('Should show congrats message when props `success` is true',()=>{
    const wrapper = setup({success: true});
    const attr = findByTestAttr(wrapper, 'Congrats-component');
    expect(attr.text()).toBe('Congratulations, You have Guessed the word.')
  })
})
import { shallow } from "enzyme"
import { checkProps, findByTestAttr } from "../../utils/test-utils"
import Input from "./Input"

const defaultProps = {
  secretWord: 'Hello'
}

/**
 * A setup method which return a wrapper
 * you can provide it props as well
 * @param {*} props
 * @return {*} 
 */
const setup = (props) =>{
  const finalProps = {
    ...defaultProps,
    ...props
  }
  return shallow(<Input {...finalProps}/>)
}

describe('Input component', () =>{
  let wrapper;

  beforeEach(() =>{
    wrapper = setup()
  })

  test('renders without error', () =>{
    const node = findByTestAttr(wrapper, 'component-input');
    expect(node.length).toBe(1)
  })

  test('throws error if incorrect propTypes is passed', () =>{
    const node = checkProps(Input, { secretWord: 'false' })
    expect(node).toBe(undefined)
  })
})


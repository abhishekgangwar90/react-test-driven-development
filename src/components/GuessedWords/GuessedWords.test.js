import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/test-utils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{
    word: 'tent', letterMatched: 2
  }]
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
  return shallow(<GuessedWords {...finalProps}/>)
}

describe('When No word is guessed',() =>{
  let wrapper;

  beforeEach(() =>{
    wrapper = setup({guessedWords: []});
  })

  test('should render without error',() =>{
    const node = findByTestAttr(wrapper, 'component-guessed-word');
    expect(node.length).toBe(1)
  })

  test('should show a message to guess the words',() =>{
    const node = findByTestAttr(wrapper, 'no-guessed-words');
    expect(node.length).toBe(1)
  })
})

describe('When words are guessed', () =>{

  let wrapper;
  let testProps = [
    {
    word: 'tent', letterMatched: 2
    },{
      word: 'nice', letterMatched: 3
    }
  ]

  beforeEach(() =>{
    wrapper = setup({guessedWords: testProps});
  })
  
  test('should render without error',() =>{
    const node = findByTestAttr(wrapper, 'component-guessed-word');
    expect(node.length).toBe(1)
  })

  test('should render actual number of rows when words guess not empty', () =>{
    const node = findByTestAttr(wrapper, 'guessed-word');
    expect(node.length).toBe(testProps.length)
  })
})
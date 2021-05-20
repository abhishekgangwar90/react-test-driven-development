import checkPropsTypes from 'check-prop-types';
/**
 * findByTestAttr
 * finds a wrapper based on value of attribute data-test
 * @export
 * @param {*} wrapper - enzyme wrapper
 * @param {*} val - value of data-test attribute
 * @return {*} element
 */
export function findByTestAttr(wrapper, val){
  return wrapper.find(`[data-test='${val}']`)
}

/**
 * Checks the Props and returns the error if there is one
 * if not returns undefined
 * @export
 * @param {*} Component
 * @param {*} props
 * @return {*} 
 */
export function checkProps(component, props){
  return checkPropsTypes(component.propTypes, props, 'props', component.name)
}

export function assertProps(){

}
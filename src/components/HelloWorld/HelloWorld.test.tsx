import { HelloWorld } from 'components/HelloWorld'
import { shallow } from 'enzyme'

describe('<HelloWorld/>', () => {
  it('should render REACT / 01', () => {
    const wrapper = shallow(<HelloWorld />)
    expect(wrapper.text()).toContain('REACT / 01')
  })
})

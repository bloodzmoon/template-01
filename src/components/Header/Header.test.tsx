import Header from './index'
import { shallow } from 'enzyme'

describe('<Header/>', () => {
  it('should have all 3 library name', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toContain('React')
    expect(wrapper.text()).toContain('Typescript')
    expect(wrapper.text()).toContain('Tailwind')
  })
})

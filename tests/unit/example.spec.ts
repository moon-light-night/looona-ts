import { shallowMount,  mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
// describe('Hello', () => {
//   it('renders', () => {
//     const msg = 'new message'
//     const wrapper = mount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.isVisible()).toBeTruthy()
//   })
//   it('has class hello', () => {
//     const msg = 'new message'
//     const wrapper = mount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.classes()).toContain('hello')
//   })
//   it('parent component has component Hi', () => {
//     const msg = 'new message'
//     const wrapper = mount(HelloWorld, {
//       props: { msg }
//     })
//     console.log(wrapper)
//     const comp = wrapper.findComponent(Hi)
//     expect(comp.exists()).toBeTruthy()
//   })
// })
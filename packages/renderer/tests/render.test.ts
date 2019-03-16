import { render } from '../src'
import { expect } from 'chai'

it('works a little', () => {
  expect(render('simple string', {})).to.equal('simple string')
})

import { Registry } from './registry'

class DumyDependency {}

describe('Registry', () => {
  it('Should registry dependencies', () => {
    Registry.getInstance().register('dumy', DumyDependency)

    const dep = Registry.getInstance().inject<DumyDependency>('dumy')

    expect(dep instanceof DumyDependency).toBe(true)
  })
})

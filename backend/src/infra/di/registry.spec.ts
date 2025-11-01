import { env } from '../../env'
import { Registry } from './registry'

class DumyDependency {}

describe('Registry', () => {
  it('Should registry dependencies', () => {
    Registry.getInstance().register('dumy', new DumyDependency())

    const dep = Registry.getInstance().inject<DumyDependency>('dumy')

    expect(dep instanceof DumyDependency).toBe(true)
  })

  it('Should throw an erro if dependency doesn t exists', () => {
    Registry.getInstance().clear()

    expect(() => Registry.getInstance().inject<DumyDependency>('dumy')).toThrow(
      new Error('Dependency dumy not found')
    )
  })

  it('Should block clear if environment is not TEST', () => {
    env.app.nodeEnv = 'PROD'

    expect(() => Registry.getInstance().clear()).toThrow(
      new Error('Registry.clear should only be called on tests')
    )
  })
})

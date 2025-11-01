import { env } from '../../env'

export class Registry {
  private static instance: Registry
  private dependencies: any = {}

  private constructor() {}

  static getInstance() {
    if (!Registry.instance) {
      Registry.instance = new Registry()
    }

    return Registry.instance
  }

  register(key: string, val: any) {
    console.log(`Dependency ${key} initialized`)

    this.dependencies[key] = val
  }

  inject<T = unknown>(key: string) {
    const dependency: any = this.dependencies[key]

    if (!dependency) throw new Error(`Dependency ${key} not found`)

    return dependency as T
  }

  clear() {
    if (env.app.nodeEnv != 'TEST') {
      throw new Error('Registry.clear should only be called on tests')
    }

    this.dependencies = {}
  }
}

import { env } from 'src/env'

export class Registry {
  private static instance: Registry
  private dependencies = {}

  private constructor() {}

  static getInstance() {
    if (!Registry.instance) {
      Registry.instance = new Registry()
    }

    return Registry.instance
  }

  register(key: string, val: any) {
    this.dependencies[key] = val
  }

  inject<T = unknown>(key: string) {
    const dependency = this.dependencies[key]

    if (!dependency) throw new Error(`Dependency ${key} not found`)

    return dependency as T
  }

  clear() {
    if (env.app.nodeEnv != 'TESTE') {
      throw new Error('Registry.clear should only be called on tests')
    }

    this.dependencies = {}
  }
}

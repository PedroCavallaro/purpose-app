import { Registry } from './registry'

export class Module {
  static setMainModule(module: { [x: string]: any }) {
    const entries = Object.entries(module)

    for (const [key, val] of entries) {
      Registry.getInstance().register(key, val)
    }
  }
}

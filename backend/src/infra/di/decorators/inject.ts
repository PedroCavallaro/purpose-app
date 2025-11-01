import { Registry } from '../registry'

export function Inject(name: string) {
  return (target: any, propertyKey: string) => {
    target[propertyKey] = new Proxy(
      {},
      {
        get(_: any, propertyKey: string) {
          const dependency = Registry.getInstance().inject<any>(name)

          return dependency[propertyKey]
        }
      }
    )
  }
}

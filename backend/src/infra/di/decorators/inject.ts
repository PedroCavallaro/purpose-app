import { Registry } from '../registry'

export function Inject(key: string) {
  return (target: any, propertyKey: string) => {
    target[propertyKey] = new Proxy(
      {},
      {
        get(_: any, propertyKey: string) {
          console.log(propertyKey)

          const dependency = Registry.getInstance().inject<any>(key)
          return dependency[propertyKey]
        }
      }
    )
  }
}

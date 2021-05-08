// /plugins/logger.ts
export class Utils {
  split(data: string){
    const delimiter = "=>"
    const index = data.indexOf(delimiter)
    return [data.substring(0, index).trim(), data.substring(index + delimiter.length, data.length).trim()]
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}

// /plugins/logger.ts
export class Utils {
  formatArrayValue(arr: string[], delimiter: string = ', '): any {
    if (arr == null) {
      return ''
    }
    if (arr.length === 1) {
      return arr[0]
    } else {
      const value: string = arr.join(delimiter)
      return value
    }
  }

  getProjectFooter(lang: string) {
    const value =
      lang === 'ja' ? process.env.projectFooterJa : process.env.projectFooterEn
    return value
  }

  getProjectName(lang: string) {
    const value =
      lang === 'ja' ? process.env.projectNameJa : process.env.projectNameEn
    return value
  }

  getProjectDescription(lang: string) {
    const value =
      lang === 'ja'
        ? process.env.projectDescriptionJa
        : process.env.projectDescriptionEn
    return value
  }

  truncate(str: any, length: number): string {
    if (str && str['@id']) {
      return ''
    }
    str = String(str)
    return str.length <= length ? str : str.substring(0, length) + '...'
  }

  getCurrentFiscalYear() {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    return currentMonth < 4 ? currentYear - 1 : currentYear
  }

  split(data: string){
    const delimiter = "=>"
    const index = data.indexOf(delimiter)
    return [data.substring(0, index).trim(), data.substring(index + delimiter.length, data.length).trim()]
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}

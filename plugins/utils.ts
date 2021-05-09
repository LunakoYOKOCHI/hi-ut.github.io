// /plugins/logger.ts
export class Utils {
  split(data: string){
    const delimiter = "=>"
    const index = data.indexOf(delimiter)
    return [data.substring(0, index).trim(), data.substring(index + delimiter.length, data.length).trim()]
  }

  calcYearFromSyohoVol(vol: number){
    if(vol <= 28){
      return 1965 + vol + "年"
    } else {
      return 1964 + vol + "年度"
    }
  }

  calcSyohoVolFromYear(year: number){
    return year - 1965
  }

  calcKiyoVolFromYear(year: number){
    return year - 1990
  }

  // NUM=値 LEN=桁数
  zfill(NUM: number, LEN: number){
	  return ( Array(LEN).join('0') + NUM ).slice( -LEN );
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}

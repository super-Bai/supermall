import {sendRequest} from "./request";

export function getDetailData (iid) {
  return sendRequest({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function getRecommendData () {
  return sendRequest({
    url: '/recommend'
  })
}

export class Good {
  constructor (itemInfo, columns, shopInfo) {
    this.itemInfo = itemInfo
    this.columns = columns
    this.shopInfo = shopInfo
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.services = shopInfo.services
  }
}

export class ShopInfo {
  constructor (shopInfo) {
    this.shopInfo = shopInfo
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
  }
}

export class ShowInfo {
  constructor (detailInfo) {
    this.detailInfo = detailInfo
    this.showDesc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}

export class ShowParams {
  constructor (itemParams) {
    this.itemParams = itemParams
    this.itemInfo = itemParams.info
    this.itemRule = itemParams.rule
    this.image = itemParams.info.images ? itemParams.info.images[0] : ''
  }
}

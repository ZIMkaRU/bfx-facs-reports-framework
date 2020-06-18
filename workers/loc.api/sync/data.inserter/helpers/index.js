'use strict'

const searchClosePriceAndSumAmount = require(
  './search-close-price-and-sum-amount'
)
const filterMethodCollMapByList = require(
  './filter-method-coll-map-by-list'
)
const {
  normalizeApiData,
  getAuthFromDb,
  getAllowedCollsNames
} = require('./utils')
const {
  checkCollType,
  isInsertableArrObjTypeOfColl,
  isUpdatableArrObjTypeOfColl,
  isUpdatableArrTypeOfColl
} = require('./check-coll-type')
const getMethodArgMap = require('./get-method-arg-map')

module.exports = {
  searchClosePriceAndSumAmount,
  filterMethodCollMapByList,
  normalizeApiData,
  getAuthFromDb,
  getAllowedCollsNames,
  checkCollType,
  isInsertableArrObjTypeOfColl,
  isUpdatableArrObjTypeOfColl,
  isUpdatableArrTypeOfColl,
  getMethodArgMap
}

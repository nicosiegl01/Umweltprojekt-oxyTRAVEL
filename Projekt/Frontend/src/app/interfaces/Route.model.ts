
export interface Route {
  hasTollRoad:boolean,
  hasBridge: boolean,
  boundingBox: object,
  distance: number,
  hasTimedRestriction:boolean,
  hasTunnel:boolean,
  hasHighway:boolean,
  computedWaypoints: [],
  routeError:object,
  formattedTime:string,
  sessionId:string,
  hasAccessRestriction:boolean,
  realTime:number,
  hasSeasonalClosure: boolean,
  hasCountryCross:boolean,
  fuelUsed:number,
  legs:object,
  options:object
  locations:object,
  time:number,
  hasUnpaved:boolean,
  locationSequence:object,
  hasFerry:boolean
}

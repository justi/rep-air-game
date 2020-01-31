'use strict'

class WorldEvent {
  constructor (year, type) {
    this.year = year
    this.type = type
  }

  run(state) {
    if (typeof this[type] == 'function') {
      return this[type](state)
    }
    return state
  }

  volcanoEruption (state) {
    return state.pollution.water += 1
  }
}

import { FETCH_DATA } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_DATA: {
      const data = [ ...action.payload.data ]

      return {
        ...state,
        ...data,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

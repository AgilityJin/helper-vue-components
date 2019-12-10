import * as Common from './common'
import * as Mobile from './mobile'
import * as Desktop from './desktop'

export * from './common'
export * from './mobile'
export * from './desktop'

export default {
  ...Common,
  ...Mobile,
  ...Desktop
}

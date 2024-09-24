import { ability } from '@nsr/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const useCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(useCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)

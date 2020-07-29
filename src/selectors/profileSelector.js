export const currentAccountSelector = (state) => (
  state.profileReducer.currentAccount
)

export const currentAccountTypeSelector = (state) => (
  currentAccountSelector(state) && currentAccountSelector(state).type
)

export const mainAccountSelector = (state) => (
  state.profileReducer.accounts.filter(account => account && account.type === 'MAIN')[0]
)

export const mainAccountIdSelector = (state) => (
  mainAccountSelector(state) && mainAccountSelector(state).rpId
)
import * as mutations from '@/vuex/mutations'

const { showLoginError,showFlyingBird ,showRegisterError,login,hideRegisterError, hideLoginError,hideFlyingBird,logout,setToken
, pickNewMessageBox,getPigeonList,getPigeonMessage ,declinePigeon } = mutations
describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state={loginError:false}
    // apply mutation
    showLoginError(state)
    // assert result
    expect(state.loginError).toBe(true)
  })
  it('INCREMENT', () => {
    // mock state
    const state={showFlyingBird:false}
    // apply mutation
    showFlyingBird(state)
    // assert result
    expect(state.showFlyingBird).toBe(true)
  })
  it('INCREMENT', () => {
    // mock state
    const state={showRegisterError :false}
    // apply mutation
    showRegisterError (state)
    // assert result
    expect(state.showRegisterError ).toBe(false)
  })


  it('INCREMENT', () => {
    // mock state
    const state={user:''}
    // apply mutation
    login (state,1)
    // assert result
    expect(state.user).toBe(1)
  })
  it('INCREMENT', () => {
    // mock state
    const state={registerError:false}
    // apply mutation
    hideRegisterError (state)
    // assert result
    expect(state.registerError).toBe(false)
  })
  it('INCREMENT', () => {
    // mock state
    const state={loginError:false}
    // apply mutation
    hideLoginError (state)
    // assert result
    expect(state.loginError).toBe(false)
  })
  it('INCREMENT', () => {
    // mock state
    const state={showFlyingBird:false}
    // apply mutation
    hideFlyingBird (state)
    // assert result
    expect(state.showFlyingBird).toBe(false)
  })
  it('INCREMENT', () => {
    // mock state
    const state={   user:localStorage.getItem('user'),
      token:localStorage.getItem('token')}
    // apply mutation
    logout (state)
    // assert result
    expect(state.user).toBe(null)
    expect(state.token).toBe(null)
  })
  it('INCREMENT', () => {
    // mock state
    const state={token:''}
    // apply mutation
    setToken (state,1)
    // assert result
    expect(state.token).toBe(1)
  })
  it('INCREMENT', () => {
    // mock state
    const state={ toBePickUpMessageList:null}
    // apply mutation
    const pigeon={}
    pickNewMessageBox (state,pigeon)
    // assert result
    expect(state.userPigeonList).toBe(pigeon)
  })
  it('INCREMENT', () => {
    // mock state
    const state={userPigeonList:null}
    // apply mutation
    const newlist=[]
    getPigeonList (state,newlist)
    // assert result
    expect(state.userPigeonList).toBe(newlist)
  })
  it('INCREMENT', () => {
    // mock state
    const state={userPigeonMessageList:null}
    // apply mutation
    const messageList=[]
    getPigeonMessage (state,messageList)
    // assert result
    expect(state.userPigeonMessageList).toBe(messageList)
  })
  // it('INCREMENT', () => {
  //   // mock state
  //   const state={userPigeonList:null}
  //   // apply mutation
  //   const pigeonId=1
  //   declinePigeon (state,pigeonId)
  //   // assert result
  //   expect(state.pigeonId).not.toBe(pigeon.id)
  // })
})

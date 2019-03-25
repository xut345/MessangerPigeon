import * as mutations from '@/vuex/mutations'

const { showLoginError,showFlyingBird ,showRegisterError,login,hideRegisterError, hideLoginError,hideFlyingBird,logout,setToken
, pickNewMessageBox,getPigeonList,getPigeonMessage , addPigeonToList, sendResponse, respondPigeon, declinePigeon } = mutations

describe('mutations', () => {
  it('showLoginError', () => {
    const state={loginError:false}
    showLoginError(state)
    expect(state.loginError).toBe(true)
  })

  it('showFlyingBird', () => {
    const state={showFlyingBird:false}
    showFlyingBird(state)
    expect(state.showFlyingBird).toBe(true)
  })

  it('showRegisterError', () => {
    const state={showRegisterError :false}
    showRegisterError (state)
    expect(state.showRegisterError ).toBe(false)
  })


  it('login', () => {
    const state={user:''}
    login (state,1)
    expect(state.user).toBe(1)
  })

  it('hideRegisterError', () => {
    const state={registerError:true}
 
      hideRegisterError (state)

expect(state.registerError).toBe(true)
    
  })

  it('hideLoginError', () => {
    const state={loginError:true}
    hideLoginError (state)

  expect(state.loginError).toBe(true)
  })

  it('INCREMENT', () => {
    const state={showFlyingBird:false}
    hideFlyingBird (state)
    expect(state.showFlyingBird).toBe(false)
  })

  it('logout', () => {
    const state={   user:localStorage.getItem('user'),
      token:localStorage.getItem('token')}
    logout (state)
    expect(state.user).toBe(null)
    expect(state.token).toBe(null)
  })

  it('setToken', () => {
    const state={token:''}
    setToken (state,1)
    expect(state.token).toBe(1)
  })

  it('pickNewMessageBox', () => {
    const state={ toBePickUpMessageList:null, userPigeonList:[]}

    const pigeon={}
    const userPigeonList=[pigeon]
    pickNewMessageBox (state,pigeon)

    expect(state.userPigeonList).toEqual(userPigeonList)
    expect(state.toBePickUpMessageList).toBe(pigeon)
  })

  it('getPigeonList', () => {
    const state={userPigeonList:null}
    const newlist=[]
    getPigeonList (state,newlist)
    expect(state.userPigeonList).toBe(newlist)
  })

  it('getPigeonMessage', () => {
    const state={userPigeonMessageList:null}
    const messageList=[]
    getPigeonMessage (state,messageList)
    expect(state.userPigeonMessageList).toBe(messageList)
  })

  it('addPigeonToList', () => {
    const state={userPigeonList:[]}
    const newPigeon={}
    addPigeonToList (state,newPigeon)
    expect(state.userPigeonList).toEqual([{}])
  })

  it('sendResponse', () => {
    const state={toBePickUpMessageList:{"messages":[]}}
    const newMessage={}
    sendResponse (state,newMessage)
    expect(state.toBePickUpMessageList).toEqual({"messages":[{}]})
  })

  it('respondPigeon', () => {
    const state={userPigeonMessageList:[]}
    const newMessage={}
    respondPigeon (state,newMessage)
    expect(state.userPigeonMessageList).toEqual([{}])
  })


  it('declinePigeon', () => {
    const state={userPigeonList:[{"id":1},{"id":2}]}
    const id=1
    declinePigeon (state,id)
    expect(state.userPigeonList).toEqual([{"id":2}])
  })

  

  

  
  
  
})

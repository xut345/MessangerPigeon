import * as mutations from '@/vuex/mutations'
import * as actions from '@/vuex/actions'
const testAction = (action, pigeonId, state, expectedMutations) => {

  const commit = (type, pigeonId) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.declinePigeon);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

 // Call the action with mocked store and arguments
  action({ commit, state }, pigeonId);


};
const testAction_1 = (action, pigeonList, state, expectedMutations) => {

  const commit = (type, pigeonList) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.getPigeonList);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state }, pigeonList);


};
const testAction_2 = (action, messageList, state, expectedMutations) => {

  const commit = (type, pigeonList) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.getPigeonMessage);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state }, messageList);


};
const testAction_3 = (action, newPigeon, state, expectedMutations) => {

  const commit = (type, newPigeon) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.addPigeonToList);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state }, newPigeon);


};
const testAction_4 = (action, state, expectedMutations) => {

  const commit = (type) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.pickNewMessageBox);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state });


};
const testAction_5 = (action, message, state, expectedMutations) => {

  const commit = (type,message) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.sendResponse);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state }, message);


};
const testAction_6 = (action, message, state, expectedMutations) => {

  const commit = (type,message) => {
    const mutation = expectedMutations;

    try {
      expect(mutation.type).toBe(action.respondPigeon);
      // if (pigeonId) {
      //   expect(mutation.pigeonId).toBe(pigeonId_1);
      // }
    } catch (error) {
      done(error);
    }

  };

  // Call the action with mocked store and arguments
  action({ commit, state }, message);


};
describe('actions', () => {
  /**
   * Unit Test which will test the add-action.
   */
  it('declinePigeon', () => {
    // Test the action.
    testAction(actions.declinePigeon,
      1,
      { all: [] },
      [{ type: mutations.declinePigeon, pigeonId: 1 }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_1(actions.getPigeonList,
      {},
      { all: [] },
      [{ type: mutations.getPigeonList, pigeonList: {} }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_2(actions.getPigeonMessage,
      {},
      { all: [] },
      [{ type: mutations.getPigeonMessage, pigeonList: {} }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_3(actions.addPigeonToList,
      {},
      { all: [] },
      [{ type: mutations.addPigeonToList, newPigeon: {} }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_4(actions.pickNewMessageBox,
      {},
      { all: [] },
      [{ type: mutations.pickNewMessageBox}]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_5(actions.sendResponse,
      '',
      { all: [] },
      [{ type: mutations.sendResponse, message: '' }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_6(actions.respondPigeon,
      '',
      { all: [] },
      [{ type: mutations.respondPigeon, message: '' }]);
  });
  it('declinePigeon', () => {
    // Test the action.
    testAction_7(actions.login,
      '',
      { all: [] },
      [{ type: mutations.login }]);
  });
  const testAction_7 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.login);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_8(actions.logout,
      '',
      { all: [] },
      [{ type: mutations.logout}]);
  });
  const testAction_8 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.logout);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_9(actions.setToken,
      '',
      { all: [] },
      [{ type: mutations.setToken}]);
  });
  const testAction_9 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.setToken);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_10(actions.showFlyingBird,
      '',
      { all: [] },
      [{ type: mutations.showFlyingBird}]);
  });
  const testAction_10 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.showFlyingBird);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_11(actions.hideFlyingBird,
      '',
      { all: [] },
      [{ type: mutations.hideFlyingBird}]);
  });
  const testAction_11 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.hideFlyingBird);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_12(actions.showLoginError,
      '',
      { all: [] },
      [{ type: mutations.showLoginError}]);
  });
  const testAction_12 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.showLoginError);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_13(actions.hideLoginError,
      '',
      { all: [] },
      [{ type: mutations.hideLoginError}]);
  });
  const testAction_13 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.hideLoginError);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_14(actions.showRegisterError,
      '',
      { all: [] },
      [{ type: mutations.showRegisterError}]);
  });
  const testAction_14 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.showRegisterError);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };
  it('declinePigeon', () => {
    // Test the action.
    testAction_16(actions.hideRegisterError,
      '',
      { all: [] },
      [{ type: mutations.hideRegisterError}]);
  });
  const testAction_16 = (action, state, expectedMutations) => {

    const commit = (type) => {
      const mutation = expectedMutations;

      try {
        expect(mutation.type).toBe(action.hideRegisterError);
        // if (pigeonId) {
        //   expect(mutation.pigeonId).toBe(pigeonId_1);
        // }
      } catch (error) {
        done(error);
      }

    };

    // Call the action with mocked store and arguments
    action({ commit, state });


  };


});

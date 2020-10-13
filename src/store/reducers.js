import actionTypes from './actionTypes';

export function authReducer(state = {}, payload) {
    try {
        if (typeof payload === "object") {
            //console.log("\n\nAuthState Mutation Started:::\n" + JSON.stringify(state) + "\n\nPayload Data:::\n" + JSON.stringify(payload));

            switch (payload.type) {
                case actionTypes.UPDATE_AUTH:
                    state = { ...state, ...payload };
                    break;
                case actionTypes.DEL_ITEM_AUTH:
                    payload.itemName in state && delete state[payload.itemName];
                    state = { ...state };
                    break;
                case actionTypes.CLEAN_AUTH:
                    state = { type: payload.type };
                    break;
            }

            //console.log("\n\nAuthState Mutation Finished:::\n" + JSON.stringify(state) + "\n\nPayload Data:::\n" + JSON.stringify(payload));
        } else {
            throw new Error("Error: Payload is not a object");
        }
    } catch (error) {
        console.error("\n\nAuthState Mutation Error:::\nType of payload : " + typeof payload + "\nMessage : " + error.message);
    } finally {
        return state;
    }
}

export function mainReducer(state = {}, payload) {
    try {
        if (typeof payload === "object") {
            //console.log("\n\nMainState Mutation Started:::\n" + JSON.stringify(state) + "\n\nPayload Data:::\n" + JSON.stringify(payload));

            switch (payload.type) {
                case actionTypes.UPDATE_MAIN:
                    state = { ...state, ...payload };
                    break;
                case actionTypes.DEL_ITEM_MAIN:
                    payload.itemName in state && delete state[payload.itemName];
                    state = { ...state };
                    break;
                case actionTypes.CLEAN_MAIN:
                    state = { type: payload.type };
                    break;
            }

            //console.log("\n\nMainState Mutation Finished:::\n" + JSON.stringify(state) + "\n\nPayload Data:::\n" + JSON.stringify(payload));
        } else {
            throw new Error("Error: Payload is not a object");
        }
    } catch (error) {
        console.error("\n\nMainState Mutation Error:::\nType of payload : " + typeof payload + "\nMessage : " + error.message);
    } finally {
        return state;
    }
}
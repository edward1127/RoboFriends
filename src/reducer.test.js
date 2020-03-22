import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField:''
    }
    it ('should return the initial state', ()=> {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField:''})
    })

    it ('should handle CHANGE_SEARCHFIELD', ()=> {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({searchField:'abc'})
    })
})

describe('requestRobots0', () => {
    const initialRobots = {
        isPending:false,
        robots:[],
        error:''
    } 

    it ('should return the initial state', ()=> {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialRobots);
    })

    it ('should handel REQUEST_ROBOTS_PENDING action', ()=> {
        expect(reducers.requestRobots(initialRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending:true}
        })).toEqual({
            robots: [],
            isPending: true,
            error:''
        });
    })

    it ('should handel REQUEST_ROBOTS_SUCCESS action', ()=> {
        expect(reducers.requestRobots(initialRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error:''
        });
    })


    it ('should handel REQUEST_ROBOTS_FAILED action', ()=> {
        expect(reducers.requestRobots(initialRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOOO!!!!'
        })).toEqual({
            robots: [],
            error:'NOOOOOO!!!!',
            isPending: false
        });
    })
})

// const Players = require('./nba-model')
// const db = require('../../data/dbConfig')

describe("Players model", () => {
    
    it("correct env", ()=>{
        expect(process.env.NODE_ENV).toBe("testing")
    })

})
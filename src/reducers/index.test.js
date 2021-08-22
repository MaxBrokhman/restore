const rewire = require("rewire")
const index = rewire("./index")
const updateCartItems = index.__get__("updateCartItems")
const updateOrderTotal = index.__get__("updateOrderTotal")
const getIndex = index.__get__("getIndex")
// @ponicode
describe("updateCartItems", () => {
    test("0", () => {
        let callFunction = () => {
            updateCartItems("The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", { total: 300, price: 571.00 }, 10, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateCartItems("Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", { total: 0.0, price: 25.00 }, 10, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateCartItems(["New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"], { total: 0, price: -10 }, 10, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateCartItems("New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", { total: 10000, price: -10 }, 1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateCartItems("The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", { total: 6.0, price: 25.00 }, -10, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updateCartItems("", {}, -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateOrderTotal", () => {
    test("0", () => {
        let callFunction = () => {
            updateOrderTotal("The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateOrderTotal("Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateOrderTotal("The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateOrderTotal("New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateOrderTotal("The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updateOrderTotal(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getIndex", () => {
    test("0", () => {
        let callFunction = () => {
            getIndex({ cartItems: ["New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"] }, "projects/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getIndex({ cartItems: ["Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"] }, "projects/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getIndex({ cartItems: ["The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"] }, "projects/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getIndex({ cartItems: ["The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"] }, "proj_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getIndex({ cartItems: ["New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"] }, "projectId-1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getIndex(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

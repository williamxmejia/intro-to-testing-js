// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when executed', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when executed', function(){
        expect(sayHello(null)).toBe('Hello, World!')
    });
    it('should return "Hello, World!" when executed', function(){
        expect(sayHello(!isNaN(NaN))).toBe('Hello, World!')
    });
});

describe('isFive', function(){
    it('should be a defined function' ,function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean value when executed', function(){
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return "true" when executed', function(){
        expect(isFive(5)).toBe(true)
    });
    it('should return "true" when executed', function(){
        expect(isFive("5")).toBe(true)
    });
});

describe('isEven',function(){
    it('should expect function',function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean when executed', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return "true" when executed', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return "true" when executed', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return "false" when executed', function(){
        expect(isEven(3)).toBe(false);
    });
    it('should return "false" when executed', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('should return "true" when executed', function(){
        expect(isEven("8")).toBe(true);
    });
    it('should return "false" when executed', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return "false" when executed', function(){
        expect(isEven(true)).toBe(false);
    });
    it('should return "false" when executed', function(){
        expect(isEven(false)).toBe(false);
    });
    it('should return "false" when executed', function(){
        expect(isEven(false)).toBe(false);
    });
});

describe('isVowel', function(){
    it('should expect a function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when executed', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return "true" when executed', function(){
        expect(isVowel("a")).toBe(true)
    });
    it('should return "true" when executed', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return "true" when executed', function(){
        expect(isVowel('y')).toBe(false);
    });
    it('should return "false" when executed', function(){
        expect(isVowel(true || false)).toBe(false);
    });
});

describe('add', function(){
    it('should expect a function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return "5" when executed', function(){
        expect(add(2, 3)).toBe(5);
    });
    it('should return "-12" when executed', function(){
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return "11" when executed', function(){
        expect(add("5", 6)).toBe(11);
    });
    it('should return "6" when executed', function(){
        expect(add("-4","10")).toBe(6);
    });
    it('should return "NaN" when executed', function(){
        expect(add('banana', 'split')).toBeNaN();
    });
    it('should return "NaN" when executed', function(){
        expect(add(2, 'apples')).toBeNaN();
    });
    it('should return "NaN" when executed', function(){
        expect(add()).toBeNaN();
    });
})
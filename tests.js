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
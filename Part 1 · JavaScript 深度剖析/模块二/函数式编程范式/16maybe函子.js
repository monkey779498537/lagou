/** maybe函子：
 *    作用：对外部空值做处理（控制副作用在允许范围内）
 */

 class Maybe {
   static of (value) {
     return new Maybe(value)
   }
   constructor(value) {
     this._value = value
   }
   map(fn) {
     return this.isNullValue() ? Maybe.of(null) : Maybe.of(fn(this._value))
   }
   isNullValue() {
     return this._value === null || this._value === undefined
   }
 }
 var r = Maybe.of(55)
          .map(x => x + 1)

  var r2 = Maybe.of(6)
            .map(x => x + 1)
            .map(x => x = null)
            .map(x => x * x)
  console.log(r, r2)
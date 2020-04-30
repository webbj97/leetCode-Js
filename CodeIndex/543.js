/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-13 17:15:48
 */
var A = function (params) {

}
A.prototype.show = function (text) {
    console.log('text:1', text);
}
A.prototype.hid = function (text) {
    this.show('2')
    console.log('hid:1', text);
    this.show('3')
}
var a = new A()
a.hid('1')
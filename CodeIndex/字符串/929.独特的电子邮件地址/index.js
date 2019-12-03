/**
 * @param {string[]} emails
 * @return {number}
 */
// var numUniqueEmails = function(emails) {
//     var obj = []
//     emails.forEach((item,index) => {
//         let em = item.split('@')
//         console.log('em[0]1:', em[0]);
        
//         em[0] = em[0].replace(/\./g,'')
//         console.log('em[0]2:', em[0]);
//         em[0] = em[0].replace(/(\w*)+(\+\w*)/g,'$1')
//         console.log('em[0]3:', em[0]);
//         obj[index] = em[0]+'@'+em[1]
//         console.log('---');
        
//     });
//     console.log('obj:', obj[1],obj[2]);
//     var arr = new Set(obj)
//     return arr.size
// };

var numUniqueEmails = function(emails) {
    var obj = []
    emails.forEach((item,index) => {
        let em = item.split('@')
        em[0] = em[0].replace(/\./g,'')
        var idx = em[0].indexOf('+')
        if(idx != -1){
            em[0] = em[0].slice(0, idx)
        }
        obj[index] = em[0]+'@'+em[1]
    });
    var arr = new Set(obj)
    return arr.size
};

var arg = ["a@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com",
"fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com",
"r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com",
"r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com",
"fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"]
var res = numUniqueEmails(arg)
console.log('res:', res);

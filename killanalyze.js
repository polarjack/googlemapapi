var kill = require('./kill.json')
// var after = require('./onlyh5n6.json')
var after = require('./noth5n6.json')

var fs = require('fs')
function main() {
var maindisease = kill.features.filter(i => i.disease == "H5N6")
var otherdisese = kill.features.filter(i => i.disease != "H5N6")

var towrite = {
    "title": "H5N6", 
    "data": otherdisese
}
towrite = JSON.stringify(towrite)
fs.writeFile("noth5n6" + '.json', towrite, 'utf8');
}

function second() {
    var date = [
        "106.02.14", 
        "106.02.15",
        "106.02.16",
        "106.02.17",
        "106.02.18",
        "106.02.19",
        "106.02.20",
        "106.02.21",
        "106.02.22",
        "106.02.23",
        "106.02.24",
        "106.02.25"]
    var store = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var mount = []
    after.data.map((value) => {
        var sum = 0;
        date.map((v, i) => {
            if(v == value.killday){
                store[i] += value.mount
            }
        })
    })
    
    date.map((a,i) => {
        var element = { [a] : store[i]}
        mount.push(element)
        console.log(store[i])
        // console.log(a)
    })
    console.log(mount)
}
second()


var mine;
//divide by 100 as coinhive uses scale of 0.00 - 1.00 for mining
var useage = (document.getElementById('CPU_Usage').value)/100;
var key = "LZufdXpkJRUBgMrNeqNyzpQVfJsXEyZg";//your coinhive site key
try {//try mine
  mine = new CoinHive.Anonymous(key, {throttle: useage});
  mine.start()
}
catch (err) {//addblockers often cause errors
  console.log(err)
  console.log("You caught me")
}

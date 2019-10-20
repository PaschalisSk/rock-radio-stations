window.onload = function(){

  var addListeners = function(){
    var stationEls = document.getElementById('stations-list').children;

    for(var i = 0; i < stationEls.length; i++){
      stationEls[i].onclick = function(){
        var name = this.getAttribute('name');
        var src = this.getAttribute('src');
        changeStation(name, src);
      }
    }
  }

  var changeStation = function(name, src){
    document.getElementById('player').src = src;
    document.getElementById('player').setAttribute('name', name);
    updateInfo();
  };

  var updateInfo = function(){
    var stationName = document.getElementById('player').getAttribute('name');
    document.getElementById('info-name').innerHTML = stationName;
  }

  updateInfo();
  addListeners();
}

function theBeatlesPlay(musicians,instruments){
  var music=[]
  for (let i=0;i<musicians.length;i++){
    //use push() not unshift()
    music.push(musicians[i]+" plays "+instruments[i])
  }
  return music
}

function johnLennonFacts(array){
  var n=array.length
  while(n>0){
    //array[n]=array[n]+"!!!"
    array[n]+"!!!"
    n--
  }
  return array
}

function theBeatlesPlay(musicians,instruments){
  var music=[]
  for (let i=0;i<musicians.length;i++){
    //use push() not unshift()
    music.push(musicians[i]+" plays "+instruments[i])
  }
  return music
}

function johnLennonFacts(array){
  var n=0
  while(n<array.length){
    array[n]=array[n]+"!!!"
    n++
  }
  return array
}

function iLoveTheBeatles(n){
  var love=[]
  do {
    love[n]="I love the Beatles!"
    n++
  } while (n<15)
  return love
}

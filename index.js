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
  //var facts=array
  //var exclam="!!!"
  while(n<array.length){
    //array[n]//=array[n]+"!!!"
    //array[n]+="!!!"
    //facts[n]=facts[n]+"!!!"
    //facts[n]=array[n]+"!!!"
    //facts.push(array[n]+exclam)
    n++
  }
  return array
  //return facts
}

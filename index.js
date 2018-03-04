function theBeatlesPlay(musicians,instruments){
  var music=[]
  for (let i=0;i<musicians.length;i++){
    music.push(musicians[i]+" plays "+instruments[i])
  }
  return music
}

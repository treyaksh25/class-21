function isTouching(object1,object2){
  if (movingRect.x - ring.x < ring.width/2 + movingRect.width/2
    && ring.x - movingRect.x < ring.width/2 + movingRect.width/2
    && movingRect.y - ring.y < ring.height/2 + movingRect.height/2
    && ring.y - movingRect.y < ring.height/2 + movingRect.height/2) 
    {
      return true;
}
else {
  return false;

}
}
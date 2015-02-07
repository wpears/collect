function col (str){
  str
    ? col.obj[str] = this
    : col.obj.anon
      ? col.obj.anon.push(this)
      : col.obj.anon = [this]
    ;
  return this;
}

col.obj = {};
col.dump = function(){
  var ret;
  if(col.obj.anon&&Object.keys(col.obj).length===1){
    if(col.obj.anon.length===1) ret = col.obj.anon[0];
    else ret = col.obj.anon;
  }else{
    ret = col.obj;
  }
  col.obj = {};
  return ret; 
}

Array.prototype.collect = col;

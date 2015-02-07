function col (str){
  str
    ? col.obj[str] = this
    : col.obj.anon.push(this)
    ;
  return this;
}

col.obj = {anon:[]};
col.dump = function(){
  var ret;
  if(Object.keys(col.obj).length===1){
    if(col.obj.anon.length===1) ret = col.obj.anon[0];
    else ret = col.obj.anon;
  }else{
    ret = col.obj;
  }
  col.obj = {anon:[]};
  return ret; 
}

Array.prototype.collect = col;

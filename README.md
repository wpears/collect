### Experiments allowing introspection into chained array calls.
 -  Hacks on Array.prototype.. what could go wrong.

#### Usage
    //Standard example functions...
    function square(x){
      return x*x
    }

    function under20(x){
      return x<20
    }

    [2,3,4,5,6].map(square).collect().filter(under20).dump()
    //[4,9,16,25,36]

    [2,3,4,5,6].collect().map(square).collect().filter(under20).dump()
    //[[2,3,4,5,6],[4,9,16,25,36]]

    [2,3,4,5,6].collect("some").map(square).collect("props").filter(under20).dump()
    //{"some":[2,3,4,5,6],"props":[4,9,16,25,36]}

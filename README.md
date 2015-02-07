### Experiments allowing introspection into chained array calls.
 -  Hacks on Array.prototype.. what could go wrong.

#### Usage

    [2,3,4,5,6].map(function(x){return x*x}).collect().filter(function(x){return x <20}).collect.dump()
    //[4,9,16,25,36]

    [2,3,4,5,6].collect().map(function(x){return x*x}).collect().filter(function(x){return x <20}).collect.dump()
    //[[2,3,4,5,6],[4,9,16,25,36]]

    [2,3,4,5,6].collect("some").map(function(x){return x*x}).collect("props").filter(function(x){return x <20}).collect.dump()
    //{"some":[2,3,4,5,6],"props":[4,9,16,25,36]}

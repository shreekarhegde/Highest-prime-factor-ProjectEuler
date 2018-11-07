    function largestPrimeFactor(n){
    var i=2;
    while (i<=n){
        console.log(i,n,'from while')
        if (n%i == 0){
            n/=i; 
            console.log(n,i,'from if');   
        }else{
            i++;
        }
    }   
    console.log(i);
    }
    var a = 39; 
    largestPrimeFactor(a);
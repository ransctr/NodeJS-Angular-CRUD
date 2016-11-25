app.filter('charLimit' , function(){
    return function(input , length){
        if(!length){
            length = 10;
        }
        if(!input){
            return ''
        }

        if(input.length <= length){
            return input
        }
        else{
            return input.substring(0,length) + '...'
        }
    }
})

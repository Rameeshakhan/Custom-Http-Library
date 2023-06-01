function httpLibrary(){
    this.http = new XMLHttpRequest()
}


// http method to get data
httpLibrary.prototype.get = function(url,callback){
    this.http.open("GET" , url, true)
    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            // const result = this.responseText
           callback(null , self.http.responseText)
        }else{
            callback("Error" + self.http.status)
        }
    }
    this.http.send()
}

// http method to post data
httpLibrary.prototype.post = function(url){
    this.http.open("POST" , url , true)
    this.http.onload = function(){
        if(this.status === 200){
            const result = this.responseText
            return result
        }
    }
    this.http.send()
}

// http method to update data

//http method to delete data

//http://www.ruanyifeng.com/blog/2010/02/url_encoding.html

//https://juejin.im/entry/589921640ce46300560ef894

function ajax(params){
    params = params || {}
    params.data = params.data || {}
    let json = params.jsonp?jsonp(params) : json(params)

    function json(params){
        params.data = formmatData(params.data)
        params.type = (params.type || 'GET').toUpperCase()
        let xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHttp')
        }
        xhr.onreadystatechange = function(){
            if(xhr.readystate === 4){
                if(xhr.status>=200 || xhr<300){
                    let type = xhr.getResponseHeader('content-type')
                    let response = null
                    if(type.indexOf('xml') !== -1){
                        response = xhr.responseXML
                    }else if(type.indexOf('applicant/json') !== -1){
                        response = JSON.parse(xhr.responseText)
                    }else{
                        response = xhr.responseText
                    }
                    xhr.success && xhr.success(response)
                }else{
                    xhr.error && xhr.error(xhr.status)
                }
            }
        };
        if(params.type === 'GET') {
            xhr.open(method , params.url + '?' + params.data , true)
            xhr.send(null)
        }else{
            xhr.open(method, params.url , true)
            xhr.setRequestHeader('content-type', 'application/json ;charset="UTF-8"')
            xhr.send(params.data)
        }
        return xhr 
    }


    function jsonp(params){
        params.data = formmatData(params.data)
        let callbackName = params.jsonp
        let head = document.getElementsByTagName('head')[0]
        let script = document.createElement('script')
        head.appendChild(script)
        
        let url = params.url + '?' + formmatData(params.data)
        //发送请求
        script.url = url

        //请求的回调函数
        window[callbackName] = function(json){
            head.removeChild(scrpt) //script只有在第一次设置url时会发送请求，所以用完需要去除
            window[callbackName] = null
            clearTimeout(script.timer)
            params.success && params.success(json)
        }

        //绑定一个超时处理函数
        if(params.time){
            script.timer = setTimeout(() => {
                head,removeChild(script)
                window[callbackName] = null
                params.error && params.error('time out error')
            }, time);
        }
    }



    function formmatData(data){
        if(!data){
            return null
        }
        let arr = []
        for(let key in data){
            arr.push(encodeURIComponent(key)+'='+encodeURIComponent(data[key]))
        }
        return arr.join('&')
    }   
}

ajax({
    url:'url',
    type:'get',
    data:'data',
    jsonp:false,
    success:function(data){

    },
    error:function(status){

    }
})




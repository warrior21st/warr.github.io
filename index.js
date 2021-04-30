var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if (xhr.readyState==4){
        if (xhr.status==200)
        {
            var arr=JSON.parse(xhr.responseText);
            var html="<ul>";
            for(var i in arr){
                var text=arr[i]["name"];
                var url=arr[i]["html_url"];

                if(text.toLowerCase()=="readme.md"){
                    continue;
                }

                html+="<li class='text-primary'><h5><a class='text-primary' href='"+url+"'>"+text+"</a></h5></li>";
            }
            html+="</ul>";

            document.getElementById("blogs").innerHTML=html;
        }
        else
        {
            alert("Problem retrieving XML data");
        }
    }
};
xhr.open("GET","https://api.github.com/repos/warrior21st/blog/contents",false);
xhr.send(null);
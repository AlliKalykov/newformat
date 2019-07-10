

var img_obj =
    {
        "folder_name": "",
        "arr":[]
    };


function donw() {

    for (var i = 0; i < $("input[type=checkbox]").length; i++) {
        if ($("input[type=checkbox]")[i].checked) {
            img_obj.arr.push($("input[value=" + i + "]").val());
        }
    }
       img_obj.folder_name = $("input").attr('name');

      /* $.ajax({
            type: "POST",
            url: "/photo_download/image",

            data: {'img_array':img_arr.toString(),'name_folder':name_folder},
            success: function(msg){
               alert(msg);
            }
        });
        */

    $.ajax({
        url: "/photo_download/image",
        data: {"array":JSON.stringify(img_obj)},
        type: "POST",
    }).done(function(result) {
         var t  = JSON.parse(result);

        for(var i = 0; i < t.img.length;i++) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.href = t.img[i];
            link.download = "data.jpg";
            link.click();
            document.body.removeChild(link);
        }
    });


}
function cheked_all() {
    $("input[type=checkbox]").attr('checked','checked');
}

function download_one(id,folder){
    var img_obj =
        {
            "folder_name": "" +folder,
            "arr":[id]
        };

    $.ajax({
        url: "/photo_download/image",
        data: {"array":JSON.stringify(img_obj)},
        type: "POST",
    }).done(function(result) {
        var t  = JSON.parse(result);

        for(var i = 0; i < t.img.length;i++) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.href = t.img[i];
            link.download = "data.jpg";
            link.click();
            document.body.removeChild(link);
        }
    });

}
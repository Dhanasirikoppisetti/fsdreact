
var mycards=[{
    "Image":"http://127.0.0.1:5501/lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi"
},

    {"Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi"
},

   { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },

    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   },
    { "Image":"./lohitha.jpg",
    "Price":"1200",
    "Brand":"Gucchi",
   }]

var Cards=mycards.map(ele=>{
   return( `<div class="card">
                <div class="image">
                    <img src=${ele.Image} />
                </div>
                <div class="content">
                    <div>Price: ${ele.Price} </div>
                    <div>Brand: ${ele.Brand}</div>
                </div>
            </div>`)
   })
   Cards=Cards.join(" ")
var parent=document.getElementsByClassName("card-parent")[0];
parent.innerHTML=Cards;



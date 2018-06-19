var myDocument = {
    header: "document header",
    body: "document body",
    footer: "document footer",
    date: "document date",
    application: {
        appHeader: 2,
        appBody: "application body",
        appFooter: "application footer",
        appDate: "application date",
        appObj: {}
    },
    addInfo: function(){
        myDocument.application.appHeader = prompt('Заполните значение для свойства application header: ');
        myDocument.application.appBody = prompt('Заполните значение для свойства application body: ');
        myDocument.application.appFooter = prompt('Заполните значение для свойства application footer: ');
        myDocument.application.appDate = prompt('Заполните значение для свойства application date: ');  
    },
    printInfo: function(){
        for (var key in myDocument) {
            if (typeof myDocument[key] === "object") {
                for (var innerKey in myDocument[key]) {
                    document.write("Ключ: " + innerKey + ", <br>" + "Значение: " + myDocument[key][innerKey] + " <br>" +  "<br>");
                }
            }
            document.write("Ключ: " + key + ", <br>"  +  "Значение: " + myDocument[key] + " <br>" +  "<br>");
        }
        document.write("<a href='001_script.html' role='button' class='btn btn-success btn-lg active'>Назад </a>");
    }
    
}





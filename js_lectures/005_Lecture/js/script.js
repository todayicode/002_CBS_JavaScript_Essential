var documenty = {
    header: "some header",
    body: "body",
    footer: "footer",
    date: "today",
    application: {
        header_header: {},
        body_body: {},
        footer_footer: {},
        date_date: {}
    },
    addValue: function(){
        documenty.application.header_header = prompt('Заполните значение для свойства header_header: ');
        documenty.application.body_body = prompt('Заполните значение для свойства body_body: ');
        documenty.application.footer_fotter = prompt('Заполните значение для свойства footer_fotter: ');
        documenty.application.date_date = prompt('Заполните значение для свойства date_date: ');  
    } 
}

for (var key in documenty) {
    if (typeof documenty[key] === "object") {
        for (var innerKey in documenty[key]) {
            document.write("Ключ: " + innerKey + ", значение: " + documenty[innerKey] + " <br>");
        }
    }
    document.write("Ключ: " + key + ", значение: " + documenty[key] + " <br>");
}


let formDef1=[
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'},
];
let formDef2=[
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {label:'Зарегистрироваться:',kind:'submit'},
];

createForm(formDef1);
createForm(formDef2);


function createForm(form) {
    var form1 = document.getElementById("form1");           
    var form2 = document.getElementById("form2"); 
    switch (form) {
    case formDef1:
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let siteNameText = document.createTextNode(formDef1[0].label);
            label.appendChild(siteNameText);
            let siteName = document.createElement("input");
            label.appendChild(siteName);
            siteName.setAttribute("type", "text");
            siteName.setAttribute("style","margin-left: 42px", "width: 300px");
            siteName.setAttribute("name","sitename"); 
        };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let urlText = document.createTextNode(formDef1[1].label);
            label.appendChild(urlText);
            let url = document.createElement("input");
            label.appendChild(url);
            url.setAttribute("type", "text");
            url.setAttribute("style","margin-left: 74px", "width: 300px");
            url.setAttribute("name","url"); 
        };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let visitorsText = document.createTextNode(formDef1[2].label);
            label.appendChild(visitorsText);
            let visitors = document.createElement("input");
            label.appendChild(visitors);
            visitors.setAttribute("type", "text");
            visitors.setAttribute("style","margin-left: 5px","width: 145px");
            visitors.setAttribute("name","visitors"); 
        };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let emailText = document.createTextNode(formDef1[3].label);
            label.appendChild(emailText);
            let email = document.createElement("input");
            label.appendChild(email);
            email.setAttribute("type", "text");
            email.setAttribute("style","margin-left: 34px", "width: 300px");
            email.setAttribute("name","email"); 
        };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let catalogText = document.createTextNode(formDef1[4].label);
            label.appendChild(catalogText);
            let heading = document.createElement("select");
            heading.setAttribute("name", "division");
            heading.setAttribute("style", "margin-left: 27px");
            label.appendChild(heading);
           {
                let option1 = document.createElement("option");
                heading.appendChild(option1);
                let health = document.createTextNode(formDef1[4].variants[0].text);
                option1.setAttribute("value", "1");
                option1.appendChild(health);
            };
            {
                let option2 = document.createElement("option");
                heading.appendChild(option2);
                let home = document.createTextNode(formDef1[4].variants[1].text);
                option2.setAttribute("value", "2");
                option2.appendChild(home);
            };
            {
                let option3 = document.createElement("option");
                heading.appendChild(option3);
                let appliances = document.createTextNode(formDef1[4].variants[2].text);
                option3.setAttribute("value", "3");
                option3.appendChild(appliances);
            };
        };
           {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let catalogText = document.createTextNode(formDef1[5].label);
            label.appendChild(catalogText);
            
            let radioButton1 = document.createElement("input");
            radioButton1.setAttribute('type', 'radio');
            radioButton1.setAttribute("value", "1");
            radioButton1.setAttribute('name', "payment");
            radioButton1.setAttribute("style", "margin-left: 59px");
            label.appendChild(radioButton1);
          
            let free = document.createTextNode(formDef1[5].variants[0].text);
            label.appendChild(free);
            
            let radioButton2 = document.createElement("input");
            radioButton2.setAttribute('type', 'radio');
            radioButton2.setAttribute("value", "2");
            radioButton2.setAttribute('name', "payment");
            radioButton2.setAttribute("style", "margin-left: 50px");
            label.appendChild(radioButton2);

            let paid = document.createTextNode(formDef1[5].variants[1].text);
            label.appendChild(paid);
          
            let radioButton3 = document.createElement("input");
            radioButton3.setAttribute('type', 'radio');
            radioButton3.setAttribute("value", "3");
            radioButton3.setAttribute('name', "payment");
            radioButton3.setAttribute("style", "margin-left: 50px");
            label.appendChild(radioButton3);
             
            let vip = document.createTextNode(formDef1[5].variants[2].text);
            label.appendChild(vip);

           };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let review = document.createTextNode(formDef1[6].label);
            label.appendChild(review);
            let allowReviews = document.createElement("input");
            allowReviews.setAttribute("type", "checkbox");
            allowReviews.setAttribute("style","margin-left: 16px");
            allowReviews.setAttribute("name","reviews");
            allowReviews.setAttribute("checked","true");
            label.appendChild(allowReviews);
        };
        {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let description = document.createTextNode(formDef1[7].label);
            label.appendChild(description);
            label.appendChild(br);
            let siteDescription = document.createElement("textarea");
            siteDescription.setAttribute("style","width: 500px; height: 50px");
            siteDescription.setAttribute("name","description");
            label.appendChild(siteDescription);
          
        };
        {
            let br = document.createElement("br");
            form1.appendChild(br);
            let publish = document.createElement("input");
            publish.setAttribute("type","submit");
            publish.setAttribute("value","Опубликовать");
            form1.appendChild(publish);
         };
        break;

    case formDef2:                   
         {
            let hr = document.createElement("hr");
            form2.appendChild(hr);
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let surnameText = document.createTextNode(formDef2[0].label);
            label.appendChild(surnameText);
            let surname = document.createElement("input");
            surname.setAttribute("type", "text");
            surname.setAttribute("style","margin-left: 78px; width: 300px");
            surname.setAttribute("name","lastname");
            label.appendChild(surname);
        };
        {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let nameText = document.createTextNode(formDef2[1].label);
            label.appendChild(nameText);
            let name = document.createElement("input");
            name.setAttribute("type", "text");
            name.setAttribute("style","margin-left: 111px; width: 300px");
            name.setAttribute("name","firstname");
            label.appendChild(name);
        };
        {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let secondnameText = document.createTextNode(formDef2[2].label);
            label.appendChild(secondnameText);
            let secondname = document.createElement("input");
            secondname.setAttribute("type", "text");
            secondname.setAttribute("style","margin-left: 77px; width: 300px");
            secondname.setAttribute("name","secondname");
            label.appendChild(secondname);
        };
        {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let ageText = document.createTextNode(formDef2[3].label);
            label.appendChild(ageText);
            let age = document.createElement("input");
            age.setAttribute("type", "text");
            age.setAttribute("style","margin-left: 86px; width: 300px");
            age.setAttribute("name","age");
            label.appendChild(age);
        };
        {
            let signup = document.createElement("input");
            signup.setAttribute("type", "submit");
            signup.setAttribute("value", "Зарегистрироваться");
            form2.appendChild(signup);
        };
    break;
    }
}

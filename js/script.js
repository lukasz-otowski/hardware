window.onload = function () {

    const pageTitle = document.title;
    const navHandle = document.querySelector("nav ul li:nth-child(2) ul")
    
    console.log(navHandle);
    
    switch (pageTitle) {

        case "Welcome":
            let child = navHandle.children[0];
            child.classList.add("current");
            console.log(child);
            break;

        case "Motherboard":
            let child1 = navHandle.children[1];
            child1.classList.add("current");
            console.log(child1);
            break;
            
        case "Central processing unit":
            let child2 = navHandle.children[2];
            child2.classList.add("current");
            console.log(child2);
            break;
            
        case "HDD and SSD":
            let child3 = navHandle.children[3];
            child3.classList.add("current");
            console.log(child3);
            break;
            
        case "RAM":
            let child4 = navHandle.children[4];
            child4.classList.add("current");
            console.log(child4);
            break;
            
        case "Power supply":
            let child5 = navHandle.children[5];
            child5.classList.add("current");
            console.log(child5);
            break;
            
        case "Disc drive":
            let child6 = navHandle.children[6];
            child6.classList.add("current");
            console.log(child6);
            break;
            
        case "Sources":
            let child7 = navHandle.children[7];
            child7.classList.add("current");
            console.log(child7);
            break;

        default:
            console.log('Where did you get in ?!');
    }

};
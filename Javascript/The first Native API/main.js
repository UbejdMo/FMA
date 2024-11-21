let site = prompt("Which website do you want to visit?");

        if(site == "google" || site =="youtube"){
            let search = prompt(`what do u want to search on ${site}?`);
            window.location.href = `https://www.${site}.com/search?q=${search}`;
        }
        else{
            window.location.href = `https://www.${site}.com`;
         }
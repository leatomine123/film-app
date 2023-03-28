const no = {
    "end":"This is the end",
    "searchbox":"Søk...."

}

const en = {
    "end":"This is the end",
    "searchbox":"Search...."

}



class Dictionary{

    constructor(...languages){
        this.languagefiles = languages
        this.dictionary = null;
        this.currentLanguage = null
    }

    setLanguage =  function(lang){
        // Velger språket som skal brukes.
 
        this.currentLanguage = lang;

        this.dictionary = lang === "no" ? no:en;
        
    }

    get = function(key){
        // Henter riktig verdi basert på key i dictionary.
        return this.dictionary[key];
    }

    getAll = function() {
        return this.dictionary;
    }

    keys = function(){
        // retunerer alle keys i dictionary 
        return Object.keys( this.dictionary);
    }
}


export default Dictionary;

/*
This object will contain a dictionary of several words, prefixes, and suffixes
* each category of word will itself be a dictionary with several attributes.
* 
* @titles {array of objects}  assorted titles and honorifics ex: "his majesty, lord"
* @prefixes {array of objects}  assorted name prefixes ex: "mr." or "Dr."
* @names {array of objects}  primary names
* @surnames {array of objects} last names
* @suffixes {array of objects}  assorted suffixes to follow primary names
* @epithets {array of objects}  assorted descriptive 'titles' or nicknames to follow all other names
* 
  * ##Word SubType Object Syntax
  * Regardless of subtype, all word objects should include the following @properties:
  * @word {string} - the actual word or phrase to be used in the generated name which will be seen by the user
  * @gender {string} - expected values: 'male', 'female', 'none'
  * @personality {array{strings}} - categorizes name word based on 'personality type' - see {array} @personalities for accepted values  [[ TODO ! ]]
  * @theme {array{strings}} - tags with name themes, like 'food', 'sciFi', etc.

* NAME ASSEMBLY: Names should be generated with word-parts from the above properties 
* in the following order: @title > @prefix > @name > @suffix > @epithet
* Generated names must always include a selection from the {names} property at a minimum.
* 
* FUTURE: Create methods that assemble selections from the various properties to generate names.
*/

var nameGenerator = {"names": [
    { "word":"Ravioli",
      "gender": "none",
      "personality": ["sophisticated"],
      "theme": ["food"]
      },
    { "word":"Cheeseburger",
      "gender":"male",
      "personality": ["lazy"],
      "theme": ["food"]
      },
    { "word":"Meatloaf",
      "gender":"male",
      "personality":["lazy"],
      "theme":["food"]
    }
    ]};

    
//1.Class Movie
/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("Jailer","Zee studios", "PG-14");
console.log(movieDetails);





//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Jailer","Zee studios");
console.log(movie1);

const movie2 = new movies("Jailer","Zee studios","PG-14");
console.log(movie2);

/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Jailer", "Zee studios", "PG");
let moviee2 = new Moviee("Leo", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Mark Antony", "KRG Studios", "PG");
let movie4 = new Moviee("Chandramuki2", "Raj kamal films", "PG-13");
let movie5 = new Moviee("Ponniyin Selvan2", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);





//Q.2:
class Circle{
    constructor(radius ,color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;

    }
    set radiusCircle(radius){
        console.log("radius set")
        this.radius = radius; 
        
    }
    
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
         return `"circle[radius =${this.radius} , color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius *this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0 ,"red");
console.log(obj1.radiusCircle);

obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorcircle = "blue";
console.log(obj1.colorCircle);
console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle);




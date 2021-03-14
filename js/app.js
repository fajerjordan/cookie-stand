'use strict';


////////////////////////////////// Seattle city /////////////////////////////////////////
let Seattle = {
    cityName: 'Seattle',
    minCus: 23, 
    maxCus: 65, 
    avgCook: 6.3,
    workHours: ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ],
    result:[],
    num_cus_per_hrs: function() {
        let numCus = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
      //  console.log(numCus);
        return numCus ; 
    },
simuAmouCook: function() {
    return Math.floor(this.avgCook*this.num_cus_per_hrs());
},
showRusl: function() {
    let element= document.getElementById(this.cityName);
    for (let i = 0; i <this.workHours.length; i++) {
        this.result.push(this.simuAmouCook());
        let tag= document.createElement('li');
        tag.innerHTML= this.workHours[i] +  ' : ' + this.simuAmouCook() + ' cookies' ;
        element.appendChild(tag);
        console.log( this.workHours[i] + ' : ' + this.simuAmouCook()+ ' cookies');
    }
},
};



////////////////////////////////// Tokyo city /////////////////////////////////////////
let Tokyo = {
    cityName: 'Tokyo',
    minCus: 3, 
    maxCus: 24, 
    avgCook: 1.2,
    workHours: ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ],
    result:[], 
    num_cus_per_hrs: function() {
        let numCus = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        console.log(numCus);
        return numCus ; 
    },
simuAmouCook: function() {
    return Math.floor(this.avgCook*this.num_cus_per_hrs());
},
showRusl: function() {
    let element= document.getElementById(this.cityName);
    for (let i = 0; i <this.workHours.length; i++) {
        this.result.push(this.simuAmouCook());
        let tag= document.createElement('li');
        tag.innerHTML= this.workHours[i] +  ' : ' + this.simuAmouCook() + ' cookies' ;
        element.appendChild(tag);
        console.log( this.workHours[i] + ' : ' + this.simuAmouCook()+ ' cookies');
    }
},
};




////////////////////////////////// Dubai city /////////////////////////////////////////
let Dubai = {
    cityName: 'Dubai',
    minCus: 11, 
    maxCus: 38, 
    avgCook: 3.7,
    workHours: ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ],
    result:[], 
    num_cus_per_hrs: function() {
        let numCus = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        console.log(numCus);
        return numCus ; 
    },
simuAmouCook: function() {
    return Math.floor(this.avgCook*this.num_cus_per_hrs());
},
showRusl: function() {
    let element= document.getElementById(this.cityName);
    for (let i = 0; i <this.workHours.length; i++) {
        this.result.push(this.simuAmouCook());
        let tag= document.createElement('li');
        tag.innerHTML= this.workHours[i] +  ' : ' + this.simuAmouCook() + ' cookies' ;
        element.appendChild(tag);
        console.log( this.workHours[i] + ' : ' + this.simuAmouCook()+ ' cookies');
    }
},
};




////////////////////////////////// Paris city /////////////////////////////////////////
let Paris = {
    cityName: 'Paris',
    minCus: 20, 
    maxCus: 38, 
    avgCook: 2.3,
    workHours: ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ],
    result:[], 
    num_cus_per_hrs: function() {
        let numCus = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        console.log(numCus);
        return numCus ; 
    },
simuAmouCook: function() {
    return Math.floor(this.avgCook*this.num_cus_per_hrs());
},
showRusl: function() {
    let element= document.getElementById(this.cityName);
    for (let i = 0; i <this.workHours.length; i++) {
        this.result.push(this.simuAmouCook());
        let tag= document.createElement('li');
        tag.innerHTML= this.workHours[i] +  ' : ' + this.simuAmouCook() + ' cookies' ;
        element.appendChild(tag);
        console.log( this.workHours[i] + ' : ' + this.simuAmouCook()+ ' cookies');
    }
},
};





////////////////////////////////// Lima city /////////////////////////////////////////
let Lima = {
    cityName: 'Lima',
    minCus: 2, 
    maxCus: 16, 
    avgCook: 4.6,
    workHours: ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ],
    result:[], 
    num_cus_per_hrs: function() {
        let numCus = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        console.log(numCus);
        return numCus ; 
    },
simuAmouCook: function() {
    return Math.floor(this.avgCook*this.num_cus_per_hrs());
},
showRusl: function() {
    let element= document.getElementById(this.cityName);
    for (let i = 0; i <this.workHours.length; i++) {
        this.result.push(this.simuAmouCook());
        let tag= document.createElement('li');
        tag.innerHTML= this.workHours[i] +  ' : ' + this.simuAmouCook() + ' cookies' ;
        element.appendChild(tag);
        console.log( this.workHours[i] + this.simuAmouCook());
    }
},
};



//////////////////////////////// Show results //////////////////////////////////////////

Seattle.showRusl();
Tokyo.showRusl();
Dubai.showRusl();
Paris.showRusl();
Lima.showRusl();


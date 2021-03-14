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


//////////////////////////////////// constructor ////////////////////////////////////////


'use strict'
let workHours= ['','6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];]
let hourlySum=0;
let locaionSum= [];
let main=document.getElementById('sales');
let tabelHead=document.createElement('th');
let tabelRow=document.createElement('tr');
let table=document.createElement('tablel');
let tabelData=document.createElement('td');
let footer=document.createElement('tfoot');
let header=document.createElement('thead');

main.appendChild(table);
header.appendChild(tabelRow);
tabelRow.appendChild(tabelHead);
for(let i=0; i<=workHours.length;i++){
    if)i<workHours.length){
        tabelHead.innerText=(workHours[i]);
        tabelHead=document.createElement('th');
        tabelRow/appendChild(tabelHead);
    } else if (i===workHours.length){
        tabelHead.innerText=('Total sales for the day')
    }
}
function cookiesStand(minSales, maxSales, avgSales, locaion){
    this.minSales=minSales;
    this.maxSales=maxSales;
    this.avgSales=avgSales;
    this.locaion=location;
}

cookiesStand.prototype.data=function(){
    tabelRow=document.createElement('tr');
    tabelHead=document.createElement('th');
    hourlySum=0;
    for(let i= 0; i<workHours.length;i++){

        if(i===workHours.length-1){
            tabelData.innerText=hourlySum;
            tabelRow.appendChild(tabelData);
            tabelData=document.createElement('td');
            break;
        }
        if (i==0){
            tabelHead.innerText=this.locaion;
            tabelRow.appendChild(tabelHead);
        }
        tabelData.innerText=Math.floor((Math.random()*(this.maxSales-this.minSales-1)+this.minSales)*this.avgSales);
        locaionSum.push(parseInt(tabelData.innerText));
        hourlySum+=parseInt(tabelData.innerText);

        tabelRow.appendChild(tabelData);
        tabelData=document.createElement('td');
    }
};

let seattle= new cookiesStand(23, 65, 6.3, 'Seattle');
seattle.data();

let Tokyo= new cookiesStand(3,24,1.2, 'Tokyo');
Tokyo.data();

let Dubai= new cookiesStand(11,38,3.7, 'Dubai');
Dubai.data();

let Paris= new cookiesStand(20, 38, 2.3, 'Paris');
Paris.data();

let Lima= new cookiesStand(2,16,2.3, 'Lima');
Lima.data();

tabel.appendChild(footer);
tabelRow=document.createElement('th');
footer.appendChild(tabelRow);
tabelHead=document.createElement('th');
tabelRow.appendChild(tabelHead);
tabelHead.innerHTML='total';
for(let j=0;j<15;j++){
    let count=0;
    for (let i=0+j;i<75;i+=15){
        count+=locaionSum[i];
    }
    tabelData=document.createElement('td');
    tabelRow.appendChild(tabelData);
    tabelData.innerText=count;
}
hourlySum=0;
for(let i=0; i<locaionSum.length;i++)
hourlySum+=locaionSum[i];
}
tabelData.document.createElement('td');
tabelRow.appendChild(tabelData);
tabelData.innerText=hourlySum;

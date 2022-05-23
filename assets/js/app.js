let cl = console.log;

const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
	

// 1. Filter the list of inventors for those who were born in the 15th century
// 2. Give us an array of the inventors first and last names // "Albert Einstein"
// 4. How many years did all the inventors live all together?

let fifteencenBorn = [];

inventors.forEach((ele)=>{
	if((ele.year >= 1500) && (ele.year < 1600)){
		fifteencenBorn.push(ele);
	}
});

cl(fifteencenBorn);

let fullnamearr =[];

inventors.forEach((ele) => fullnamearr.push(`${ele.first} ${ele.last}`));

cl(fullnamearr);

let addofAll = 0;
//inventors.forEach((ele)=>{
//	let age = ele.passed - ele.year;
	//addofAll= addofAll+age; or
//	addofAll += age;
//});
inventors.forEach((ele) => addofAll += (ele.passed-ele.year));
cl(addofAll);
	
let companies = [
	{ name: "Company One", category: "Finance", start: 1981 , end: 2003},
	{ name: "Company Two", category: "Retail", start: 1992 , end: 2008},
	{ name: "Company Three", category: "Auto", start: 1999 , end: 2007},
	{ name: "Company Four", category: "Retail", start: 1989 , end: 2010},
	{ name: "Company Five", category: "Technology", start: 2009 , end: 2014},
	{ name: "Company Six", category: "Finance", start: 1987 , end: 2010},
	{ name: "Company Seven", category: "Auto", start: 1986 , end: 1996},
	{ name: "Company Eight", category: "Technology", start: 2011 , end: 2016},
	{ name: "Company Nine", category: "Retail", start: 1981 , end: 1989},
];

//1 company names

let compName = []; 

//companies.forEach(function(comp){
//	cl(comp.name);
//	compName.push(comp.name);
//});
//cl(compName);

//companies.forEach((comp) => {
//cl(comp.name);
//	compName.push(comp.name);
	
//});
//cl(compName);

companies.forEach(comp => compName.push(comp.name));
cl(compName);

// ['1981-2003','1992-2008',]

let compyears = [];

//companies.forEach(function(comp) {
	//cl(comp.start +"-"+comp.end);
	//cl(`${comp.start}-${comp.end}`);
//	compyears.push(`${comp.start}-${comp.end}`);
//});

//cl(compyears);

companies.forEach(comp => compyears.push(`${comp.start}-${comp.end}`));
cl(compyears);

// [{compname:"company one", duration:12},{compname:"company one", duration:15]

let compDuration = [];

//companies.forEach((ele)=> {
//	let obj ={
//		compname:ele.name,
//		duration:ele.end - ele.start,
//	}
	//cl(obj);
//	compDuration.push(obj);
//});
//cl(compDuration);
	
companies.forEach(ele => compDuration.push({compname:ele.name,duration:ele.end - ele.start,}));
cl(compDuration);


// companies run atleast 10 yrs

let durAtleast10 = [];
companies.forEach((tenyrs) =>{
	if((tenyrs.end - tenyrs.start)>= 10){
		//cl(tenyrs);
		durAtleast10.push(tenyrs);
	}
})

cl(durAtleast10);

// category:"retail" , run atleast 15yrs;
 let retail15yrs = [];
 
 companies.forEach((comp) =>{
	 if((comp.category.toLowerCase().trim() === "retail")&&((comp.end -comp.start)>=15)){
	 //cl(comp);
		retail15yrs.push(comp);
	 }
 });
 cl(retail15yrs);
		 



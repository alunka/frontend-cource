 'use strict';

const data = [
  { id: 1, language: "JavaScript", popularity: 19.1 },
  { id: 2, language: "Java", popularity: 14 },
  { id: 3, language: "Python", popularity: 13.4 },
  { id: 4, language: "C#", popularity: 13.3 },
  { id: 5, language: "TypeScript", popularity: 13.3 },
  { id: 6, language: "PHP", popularity: 7.1 },
  { id: 7, language: "Kotlin", popularity: 3.2 },
  { id: 8, language: "C++", popularity: 2.8 },
  { id: 9, language: "DB", popularity: 2.7 },
  { id: 10, language: "Swift", popularity: 2.5 },
  { id: 11, language: "Go", popularity: 1.9 },
  { id: 12, language: "Ruby", popularity: 1.8 },
  { id: 13, language: "Dart", popularity: 1.1 },
  { id: 14, language: "Scala", popularity: 0.8 },
  { id: 15, language: "Apex", popularity: 0.7 },
  { id: 16, language: "C", popularity: 0.7 },
  { id: 17, language: "1C", popularity: 0.4 },
  { id: 18, language: "Groovy", popularity: 0.3 },
  { id: 19, language: "Rust", popularity: 0.3 },
];

let percent, colorPersent = 100;
let basePercent = null;
for (let obj of data) {;
    let divElement = document.createElement('div');
    divElement.className = 'progress-bar';
    percent = basePercent === null ? 100 : obj.popularity / basePercent * 100;
    divElement.style.width =  `${percent * 0.7}%`;
    let addDiv = null;
    if(obj.popularity < 1) {
        divElement.style.backgroundColor = '#8f8c8c';
        divElement.style.color = 'black';
        addDiv = document.createElement('div');
        addDiv.innerHTML = `${obj.popularity}%`;
    } else {
        divElement.style.filter = `brightness(${colorPersent}%)`;
        divElement.innerHTML = `${obj.popularity}%`;
    }
    
    colorPersent += 5;
    if(basePercent === null) {
        basePercent = obj.popularity;
    }
    let divElementWrapper = document.createElement('div');
    divElementWrapper.className = 'progress-wrapper';
    divElementWrapper.innerHTML = `<span style="padding: 2px; width: 200px;">${obj.language}</span>`;
    divElementWrapper.id = `programming_lenguage_${obj.id}`;
    divElementWrapper.appendChild(divElement);
    
    if (addDiv !== null) {
        addDiv.style.padding = '6px';
        divElementWrapper.appendChild(addDiv);
    }
    document.getElementById('statistics').appendChild(divElementWrapper);
}

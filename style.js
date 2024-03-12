function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function openQuestion(evt, questionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(questionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Optionally add to make the first tab open by default:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tablinks")[0].click();
});


function showNextQuestion(questionNumber) {
    var currentQuestion = document.getElementById("Question" + (questionNumber - 1));
    var nextQuestion = document.getElementById("Question" + questionNumber);
    
    if (currentQuestion) {
        currentQuestion.style.display = "none";
    }
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    }
}

const app = Vue.createApp({
    data() {
        return {
            images: [
                { src: 'path/to/visualization1.png', alt: 'Visualization 1', caption: 'Visualization 1 Caption' },
                // Add more images
            ],
            selectedImage: null
        };
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        }
    }
}).mount('#app');


const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: '',
            rawJson: '',
            cleanedJson: ''
        };
    },
    methods: {
        showTab(tabName) {
            this.currentTab = tabName;
        },
        async fetchData() {
            const apiKey = 'your_api_key_here';
            const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
            const data = await response.json();
            this.rawJson = JSON.stringify(data.articles.slice(0, 2), null, 2); // Before cleaning: Show raw data
            
            // After cleaning: Simplify data structure
            const cleanedData = data.articles.slice(0, 2).map(({source, title, url}) => ({
                source: source.name,
                title,
                url
            }));
            this.cleanedJson = JSON.stringify(cleanedData, null, 2);
        }
    }
}).mount('#app');

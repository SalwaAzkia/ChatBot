document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    const messagesContainer = document.getElementById('messages');
    
    // menghapus pesan
    const previousHelpMessage = document.querySelector('.help-message');
    if (previousHelpMessage) {
        previousHelpMessage.remove();
    }

    // syntax pengecekan menghapus gambar
    const previousImages = document.querySelectorAll('.image-message');
    previousImages.forEach(image => image.remove());

    if (messageText) {
        addMessage(messageText);
        messageInput.value = '';
    }
});

function addMessage(text) {
    const messagesContainer = document.getElementById('messages');
    let helpMessageDisplayed = false;

    // Check for keywords
    if (text.toLowerCase().includes("sedih") || text.toLowerCase().includes("ga bahagia") || text.toLowerCase().includes("sedih banget")) {
        createImageMessage('pictures/1.jpg', 'This is just a phase, aku yakin kamu pasti bisa lewati ini!');
    } else if (text.toLowerCase().includes("kangen") || text.toLowerCase().includes("rumah") || text.toLowerCase().includes("aku kangen rumah")) {
        createImageMessage('pictures/2.jpg', 'Missing home is not about giving up, jangan lupa kabari orang rumah ya!');
    } else if (text.toLowerCase().includes("capek") || text.toLowerCase().includes("lelah") || text.toLowerCase().includes("letih")) {
        createImageMessage('pictures/3.jpg', 'Rasa lelah kamu pasti hilang kok, tapi kebaikannya ga akan lekang.');
    } else if (text.toLowerCase().includes("hidup") || text.toLowerCase().includes("untuk apa") || text.toLowerCase().includes("buat apa") || text.toLowerCase().includes("ngapain")) {
        createImageMessage('pictures/4.jpg', 'And the life of this world is nothing but play and amusement.');
    } else if (text.toLowerCase().includes("alam semesta") || text.toLowerCase().includes("diciptakan") || text.toLowerCase().includes("makrokosmos")) {
        createImageMessage('pictures/5.jpg', 'Pasti kamu bosan dan bertanya-tanya ya?');
    } else if (text.toLowerCase().includes("merasa") || text.toLowerCase().includes("kesepian") || text.toLowerCase().includes("feeling") || text.toLowerCase().includes("lonely")) {
        createImageMessage('pictures/6.jpg', 'Bahkan setiap hari kita selalu ditinggal lho, buktinya ada malam dan siang. iya kan?');
    } else if (text.toLowerCase().includes("temanku") || text.toLowerCase().includes("peduli") || text.toLowerCase().includes("sama aku")) {
        createImageMessage('pictures/7.jpg', 'I know ure so sick of having to explain to the world that friendship is still love');
    } else if (text.toLowerCase().includes("ibadah") || text.toLowerCase().includes("kayaknya") || text.toLowerCase().includes("kurang") || text.toLowerCase().includes("maksimal")) {
        createImageMessage('pictures/8.jpg', 'Iman seorang Muslim itu ga sama di setiap harinya lho. Ada kalanya iman tersebut akan naik, tapi tak jarang akan mengalami penurunan.');
        createImageMessage('pictures/8b.jpg', 'Jadi sekarang udah tau dong, bagaimana caranya beriman?');
    } else if (text.toLowerCase().includes("kok mereka gini ke aku?") || text.toLowerCase().includes("sebenarnya aku kenapa?")) {
        createImageMessage('pictures/9.jpg', 'ppl come and ppl whut? yes! and go.');
    } else if (text.toLowerCase().includes("kenapa harus aku?")) {
        createImageMessage('pictures/10.jpg', 'Tuhan kamu ga membebankan kamu lewat kemampuan kamu kok, kita hadapi bareng-bareng');
    } else if (text.toLowerCase().includes("duh") || text.toLowerCase().includes("i'm") || text.toLowerCase().includes("doomed") || text.toLowerCase().includes("dosa aku") || text.toLowerCase().includes("akan terampuni")) {
        createImageMessage('pictures/11.jpg', 'Sesungguhnya Allah mengampuni dosa-dosa semuanya. Sesungguhnya Dia-lah Yang Maha Pengampun lagi Maha Penyayang.');
    } else if (text.toLowerCase().includes("is that true") || text.toLowerCase().includes("perempuan disibukkan dengan ilmu?")) {
        createImageMessage('pictures/12.jpg', 'If you educate a man, you educate an individual. But if you educate a woman you educate a family (nation).');
        createImageMessage('pictures/12b.jpg', 'Lalu bagaimana tips menjadi "Perempuan yang selalu disibukkan dengan ilmu"');
        createImageMessage('pictures/12c.jpg', 'Sha, "ilmu apa yang sebaiknya dipelajari oleh perempuan?');
        createImageMessage('pictures/12d.jpg', 'Jadi sekarang udah tau dong, kenapa perempuan harus disibukkan dengan ilmu?');
    } else if (text.toLowerCase().includes("kita usahakan untuk jadi apa?") || text.toLowerCase().includes("kita") || text.toLowerCase().includes("usahakan") || text.toLowerCase().includes("apa?")) {
        createImageMessage('pictures/13.jpg', 'omaga leggo girl! ᐢᗜᐢ');
    } else if (text.toLowerCase().includes("menurutmu apa yang perlu diperbaiki?")) {
        createImageMessage('pictures/14.jpg', 'jadi menurutmu, apa yang perlu kamu perbaiki?');
    } else if (text.toLowerCase().includes("what makes allah happy?")) {
        createImageMessage('pictures/15.jpg', 'get the point here, mate?');
    } else if (text.toLowerCase().includes("aku takut deh") || text.toLowerCase().includes("mereka judge aku")) {
        createImageMessage('pictures/16.jpg', 'You only live once, and people always judge based on their level of understanding.');
        createImageMessage('pictures/16b.jpg', '❀');
    } else if (text.toLowerCase().includes("aku sepelekan dan") || text.toLowerCase().includes("biarkan saja") || text.toLowerCase().includes("mental")) {
        createImageMessage('pictures/17.jpg', 'Kamu tau? tubuhmu mempunyai hak atas dirimu, termasuk kesehatan mental kamu ini.');
        createImageMessage('pictures/17b.jpg', ' lalu aku harus ngapain? ');
        createImageMessage('pictures/17c.jpg', 'Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri." (QS. Ar-Ra’d: 11)');
        createImageMessage('pictures/17d.jpg', 'Jadi mulai sekarang jangan sepelekan kesehatan mental kamu lagi ya!');
    } else if (text.toLowerCase().includes("why do people always come and go?")) {
        createImageMessage('pictures/18.jpg', 'Remember! If your friends are stopping you from getting close to Allah, they’re not for you. Real friends want the best of both worlds for you. ');
    } else if (text.toLowerCase().includes("The") || text.toLowerCase().includes("truly")|| text.toLowerCase().includes("best") || text.toLowerCase().includes("for me?")) {
        createImageMessage('pictures/19.jpg', 'Don’t rush, don’t worry, and don’t force the perfect outcome. The universe has a plan, trust the process and believe in divine timing.');
    } else if (text.toLowerCase().includes("sepertinya aku") || text.toLowerCase().includes("telat")|| text.toLowerCase().includes("berproses") || text.toLowerCase().includes("prosesku telat")) {
        createImageMessage('pictures/20.jpg', 'Just enjoy the process, kalo kata Jaz "Jangan takut untuk melangkah bersamaku~" ahaha.');
    } else if (text.toLowerCase().includes("aku gamau lagi") || text.toLowerCase().includes("berada")|| text.toLowerCase().includes("di kampus dan di kota") || text.toLowerCase().includes("ini lagi")) {
        createImageMessage('pictures/21.jpg', 'duh, isnt this one is just a phase?');
    } else if (text.toLowerCase().includes("who told us to study?")) {
        createImageMessage('pictures/22.jpg', 'now you know, girl');
    } else if (text.toLowerCase().includes("apa tuhan akan meninggalkanku?")) {
        createImageMessage('pictures/23.jpg', 'sesungguhnya tuhan kamu itu dekat, lebih dekat dari apa yang kamu kira.');
    } else if (text.toLowerCase().includes("I") || text.toLowerCase().includes("feel like")|| text.toLowerCase().includes("I can’t") || text.toLowerCase().includes("forgive myself")) {
        createImageMessage('pictures/24.jpg', 'How beautiful is it that Allah will eagerly forgive you for the things you can’t even forgive yourself for.');
    } else if (text.toLowerCase().includes("falling in love") || text.toLowerCase().includes("doesn’t like a good idea")|| text.toLowerCase().includes("these day") || text.toLowerCase().includes("right?")) {
        createImageMessage('pictures/25.jpg', 'it depens, how do you see urself there, buddy?');
    } else if (text.toLowerCase().includes("harus dan") || text.toLowerCase().includes("musti") || text.toLowerCase().includes("menjadi anak") || text.toLowerCase().includes("bagaimana?")) {
        createImageMessage('pictures/26.jpg', 'musti bisa jadi anak mamah ayah yang baik dooongg!! ˃ᗜ˂');
    } else if (text.toLowerCase().includes("why do i need to be sad like this?")) {
        createImageMessage('pictures/27.jpg', 'Y’all are adults now. You’re responsible for your emotional intellegence at this point. It’s no longer about who hurt you or who made you this way; It’s about what YOU can do to fix YOUR problems. Playing the blame game will leave you stuck and bitter.');
    } else if (text.toLowerCase().includes("cannot push any further,") || text.toLowerCase().includes("i am too")|| text.toLowerCase().includes("tired")) {
        createImageMessage('pictures/28.jpg', 'YEAY YOU DID GREAT! NASHA PROUD OF YOU.');
    } else if (text.toLowerCase().includes("aku memaafkan, tapi sampai kapan?")) {
        createImageMessage('pictures/29.jpg', 'Mari belajar untuk bermurah hati dalam memaafkan, karena kita juga kan selalu membutuhkan ampunan dari Allah.');    
    } else if (text.toLowerCase().includes("menjadi wanita") || text.toLowerCase().includes("anggun")|| text.toLowerCase().includes("seperti?")) {
        createImageMessage('pictures/30.jpg', 'Dan mari menjadi wanita muslimah yang terjaga, senang menuntut ilmu, dan taat pada Allah. كوني امرأة أنيقة صالحةkuunī imra’ah ’anīqah ṣāliḥah');
    } else if (text.toLowerCase().includes("yaa") || text.toLowerCase().includes("Rabb,")|| text.toLowerCase().includes("please give them") || text.toLowerCase().includes("happiness")) {
        createImageMessage('pictures/31.jpg', 'I love them sm!');
    } else if (text.toLowerCase().includes("aku kalah dari mereka")) {
        createImageMessage('pictures/32.jpg', 'Ternyata dari kekalahan, kamu bisa berkesplorasi dan ternyata diam-diam bertumbuh itu seru ya!');
    } else if (text.toLowerCase().includes("tentang") || text.toLowerCase().includes("berjalan")|| text.toLowerCase().includes("di tempat") || text.toLowerCase().includes("sepi")) {
        createImageMessage('pictures/33.jpg', 'aku temani ya, jangan sedih dan takut!');
    } else if (text.toLowerCase().includes("i am not") || text.toLowerCase().includes("giving")|| text.toLowerCase().includes("my greatest") || text.toLowerCase().includes("right now")) {
        createImageMessage('pictures/34.jpg', 'gapapa.. coba lagi di hari esok ya. ada aku yang temani kamu.');
    } else if (text.toLowerCase().includes("My lord, do not allow") || text.toLowerCase().includes("my heart")|| text.toLowerCase().includes("for the things that aren’t written") || text.toLowerCase().includes("for me")) {
        createImageMessage('pictures/35.jpg', 'Ya Allah jika aku pernah berbuat zalim padanya maka ampunilah aku, dan jika aku merasa bahwa dia berbuat zalim padaku maka sembuhkanlah aku dan yakinkan padaku bahwa sesungguhnya dia tidak bermaksud demikian. Maka ampunilah kami keduanya.');
    } else if (text.toLowerCase().includes("if all I managed today was getting out of my bed, would you still be proud?") || text.toLowerCase().includes("this day")|| text.toLowerCase().includes("was getting out of my bed,") || text.toLowerCase().includes("would you still be proud?")) {
        createImageMessage('pictures/36.jpg', 'Yes, I am proud of you for getting up today, and make life feel easier to live again.');
    } else if (text.toLowerCase().includes("things") || text.toLowerCase().includes("seem hard") || text.toLowerCase().includes("lately")) {
        createImageMessage('pictures/37.jpg', 'Remember, these are good memories you haven’t made yet.');
    } else if (text.toLowerCase().includes("rasanya seperti") || text.toLowerCase().includes("kesusahan")|| text.toLowerCase().includes("dan ditekan gini") || text.toLowerCase().includes("sih sha/s")) {
        createImageMessage('pictures/38.jpg', 'between effortless and struggles');
    } else if (text.toLowerCase().includes("are you sure you saw me that way?")) {
        createImageMessage('pictures/39.jpg', 'Yes, I’m sure I saw you that way.');
    } else if (text.toLowerCase().includes("am i enough for myself?")) {
        createImageMessage('pictures/40.jpg', 'And if today all you did was hold yourself together, I’m still proud of you ❤');
    } else if (text.toLowerCase().includes("orang yang mau") || text.toLowerCase().includes("mengakhiri dirinya sendiri")|| text.toLowerCase().includes("gitu") || text.toLowerCase().includes("kok ada ya sha?")) {
        createImageMessage('pictures/41.jpg', 'tolong hidup lebih lama lagi ya!');
    } else if (text.toLowerCase().includes("being attractive?")) {
        createImageMessage('pictures/42.jpg', 'Yes, you need to be that person, mate.');
    } else if (text.toLowerCase().includes("can i skip the process?")) {
        createImageMessage('pictures/43.jpg', 'Keep moving forward, buddy. I am right beside you.');
    } else if (text.toLowerCase().includes("when is my right season?")) {
        createImageMessage('pictures/44.jpg', 'kamu tau kan, siapa yang menciptakan waktu? jadi serahin aja ya, sambil bertawakkal juga. you can do it, aku temani ya!');
    } else if (text.toLowerCase().includes("i kept rebuilding myself, sha") ) {
        createImageMessage('pictures/45.jpg', 'Remember everything else may fail, but God’s love will remain.');
    } else if (text.toLowerCase().includes("you’re right i needed that hurt")) {
        createImageMessage('pictures/46.jpg', 'well, i’ve told you so');
    } else if (text.toLowerCase().includes("in a humble state, i think i learn better")) {
        createImageMessage('pictures/47.jpg', 'So, humble yourself before Allah humbles you.');
    } else if (text.toLowerCase().includes("emotional") || text.toLowerCase().includes("hygiene")) {
        createImageMessage('pictures/48.jpg', 'Dengan menjaga kebersihan mental, nanti kamu bisa merasakan hidup yang lebih bahagia dan damai.');
    } else if (text.toLowerCase().includes("i wanna build") || text.toLowerCase().includes("my thick wall")) {
        createImageMessage('pictures/49.jpg', 'Stay true to your values and principles, and focus on being the best version of yourself. Trust that those who matter will appreciate you for who you are.');
    } else if (text.toLowerCase().includes("slow down, girl!")) {
        createImageMessage('pictures/50.jpg', 'oh my gosh You’re so ahead of yourself that you forgot what you need');
    } else if (text.toLowerCase().includes('will be like huh?')) {
        createImageMessage('pictures/51.jpg', 'You’ve got this girl! oh goshhh');
    } else if (text.toLowerCase().includes('guess i just wasted my love') || text.toLowerCase().includes("on the wrong buddy.")) {
        createImageMessage('pictures/52.jpg', 'gapapa, pengalaman kan mengajarkan kita untuk lebih bijak dalam memilih siapa yang layak menerima cinta kita di masa depan.');
    } else if (text.toLowerCase().includes("you said i got my") || text.toLowerCase().includes("powerful power?")) {
        createImageMessage('pictures/53.jpg', 'you are a pure little creator of your art.');
    } else if (text.toLowerCase().includes("i am getting distracted again")) {
        createImageMessage('pictures/54.jpg', 'Take a deep breath and refocus. It’s okay to get distracted sometimes, but let’s get back on track now.');
    } else if (text.toLowerCase().includes("i need improvement")) {
        createImageMessage('pictures/55.jpg', 'Taking the first step towards self-improvement is already a big achievement. Remember, growth is a journey, not a destination. I’m here to support you along the way.');
    } else if (text.toLowerCase().includes("should i use") || text.toLowerCase().includes("my energy")|| text.toLowerCase().includes("on my") || text.toLowerCase().includes("desires?")) {
        createImageMessage('pictures/56.jpg', 'yes! use it with ur brain please.');
    } else if (text.toLowerCase().includes("be so independent")) {
        createImageMessage('pictures/57.jpg', 'Find your strength in being independent from the opinions of others, and anchor your life in the guidance of Allah’s words. Let His teachings shape your actions and decisions.');
    } else if (text.toLowerCase().includes("deeply rooted in my own essence")) {
        createImageMessage('pictures/58.jpg', 'You’re the captain of your ship, navigating the waters of life with unwavering determination.');
    } else if (text.toLowerCase().includes("how did i weeping like this?")) {
        createImageMessage('pictures/59.jpg', 'oh girl, who hurt you?');
    } else if (text.toLowerCase().includes("judging me harshly fr")) {
        createImageMessage('pictures/60.jpg', ' ');
    } else if (text.toLowerCase().includes("it is time to what?")) {
        createImageMessage('pictures/61.jpg', ' ');
    } else if (text.toLowerCase().includes("i only made the little progress")) {
        createImageMessage('pictures/62.jpg', ' ');
    } else if (text.toLowerCase().includes("let my coffee sit too long and was surprised it was no longer hot.")) {
        createImageMessage('pictures/63.jpg', '☕');
    } else if (text.toLowerCase().includes("aku mau pasrah aja")) {
        createImageMessage('pictures/64.jpg', 'gapapa.. gapapa kok!');
    } else if (text.toLowerCase().includes("should i take the risk or stay in my comfort zone?")) {
        createImageMessage('pictures/65.jpg', ' ');
    } else if (text.toLowerCase().includes("i am still alive")) {
        createImageMessage('pictures/66.jpg', ' ');
    } else if (text.toLowerCase().includes("did i just evolve?")) {
        createImageMessage('pictures/67.jpg', ' ');
    } else if (text.toLowerCase().includes("kamu bangga ga sha jadi teman aku?") ) {
        createImageMessage('pictures/68.jpg', ' ');
    } else if (text.toLowerCase().includes("i need the urge to become better") ) {
        createImageMessage('pictures/69.jpg', 'That’s great! Embrace it and keep pushing yourself.');
    } else if (text.toLowerCase().includes("comfort zone")) {
        createImageMessage('pictures/70.jpg', 'great things never came from comfort zones.');
    } else if (text.toLowerCase().includes("college is tough")) {
        createImageMessage('pictures/71.jpg', 'do you wanna see what happens if you don’t give up?');
    } else if (text.toLowerCase().includes("aku ga bisa mengelola waktu dengan baik")) {
        createImageMessage('pictures/72.jpg', 'ini tips dari aku, jadi. jangan. menyia. nyiakan. waktu!');
    } else if (text.toLowerCase().includes("i am unable to bear this anymore")) {
        createImageMessage('pictures/73.jpg', ' ');
    } else if (text.toLowerCase().includes("i develop my own self-resilience")) {
        createImageMessage('pictures/74.jpg', 'good movement, girl!');
    } else if (text.toLowerCase().includes("why did i expect so much from people?")) {
        createImageMessage('pictures/75.jpg', 'bro that hit so hard');
    } else if (text.toLowerCase().includes("kenapa manusia itu adiktif sama rasa sakit?") ) {
        createImageMessage('pictures/76.jpg', 'duh, jangan kayak gini ya!');
    } else if (text.toLowerCase().includes("bertumbuh kembang dengan keraguan orang lain")) {
        createImageMessage('pictures/77.jpg', ' ');
    } else if (text.toLowerCase().includes("kamu berdoa untuk aku kayak apa sha?")) {
        createImageMessage('pictures/78.jpg', 'hidup bahagia ya..');
    } else if (text.toLowerCase().includes("i ask allah for that")) {
        createImageMessage('pictures/79.jpg', 'What we want doesn’t always happen based on our timing. It happens when Allah knows it’s best. And of course, Allah knows best');
    } else if (text.toLowerCase().includes("sepertinya langkahku terlambat lagi") ) {
        createImageMessage('pictures/80.jpg', 'jangan ragukan diri kamu dulu ya!');
    } else if (text.toLowerCase().includes("tenang aja, semua udah diatur") ) {
        createImageMessage('pictures/81.jpg', 'duh, jangan berfikir yang aneh aneh dulu ya!');
    } else if (text.toLowerCase().includes("i feel afraid and invisible") ) {
        createImageMessage('pictures/82.jpg', ' ');
    } else if (text.toLowerCase().includes("this is what i wanted to be") ) {
        createImageMessage('pictures/83.jpg', ' ');
    } else if (text.toLowerCase().includes("i used to worry about every little thing i did")) {
        createImageMessage('pictures/84.jpg', 'Stop worrying about what other people think of you. Most people aren’t thinking about you at all.');
    } else if (text.toLowerCase().includes("those friends who are there beside me")) {
        createImageMessage('pictures/85.jpg', 'Hiduplah lebih lama dan wujudkan satu persatu whislist yang menantimu.');
    } else if (text.toLowerCase().includes("kesibukkan yang aku mau")) {
        createImageMessage('pictures/86.jpg', 'Aku bangga banget bisa mengenalmu ❤️');
    } else if (text.toLowerCase().includes("who am i without my non-academic achievements?")) {
        createImageMessage('pictures/87.jpg', ' ');
    } else if (text.toLowerCase().includes("the words of bullies always haunt me")) {
        createImageMessage('pictures/88.jpg', 'YES! YOU ARE!');
    } else if (text.toLowerCase().includes("i will live, sha")) {
        createImageMessage('pictures/89.jpg', ' ');
    } else if (text.toLowerCase().includes("aku sudah berani tidak disukai")) {
        createImageMessage('pictures/90.jpg', ' ');
    } else if (text.toLowerCase().includes("everything has been too much")) {
        createImageMessage('pictures/91.jpg', 'Take care of yourself. Life is a lot. You’ll get there when you get there.');
    } else if (text.toLowerCase().includes("walking on the track")) {
        createImageMessage('pictures/92.jpg', ' ');
    } else if (text.toLowerCase().includes("keinginannya dan keinginanku")) {
        createImageMessage('pictures1/93.jpg', ' ');
    } else if (text.toLowerCase().includes("ada beban di pundakku")) {
        createImageMessage('pictures1/94.jpg', 'sesungguhnya Allah mengampuni dosa semuanya');
    } else if (text.toLowerCase().includes("diri yang melampaui batas terhadap diri sendiri")) {
        createImageMessage('pictures1/95.jpg', ' ');
    } else if (text.toLowerCase().includes("i let everything go and i trust him")) {
        createImageMessage('pictures1/96.jpg', 'Pour your heart out to him, empty it all out so that you feel better.');
    } else if (text.toLowerCase().includes("did my lord know about my situation?")) {
        createImageMessage('pictures1/97.jpg', ' ');
    } else if (text.toLowerCase().includes("tell him")) {
        createImageMessage('pictures1/98.jpg', 'Even a bad day is just 24 hours');
    } else if (text.toLowerCase().includes("i got a bad day")) {
        createImageMessage('pictures1/99.jpg', ' ');
    } else if (text.toLowerCase().includes("who's the stargirl?")) {
        createImageMessage('pictures1/100.jpg', 'me duh');
    } else if (text.toLowerCase().includes("keyword yang sesuai")) {
        createImageMessage('pictures1/keyword.jpg', 'tadaaa!! ✮');
    } else if (text.toLowerCase().includes("halo") || text.toLowerCase().includes("sha")) {
        createImageMessage('pictures1/halosha.jpg', 'halooo!! kamu mau tanya apaaa? ᵔᴗᵔ');
    } else if (text.toLowerCase().includes("  ")) {
        createImageMessage('pictures/101.jpg', ' ');
    } else {
        // Handle other cases or default case
    
        const helpMessage = document.createElement('div');
        helpMessage.classList.add('help-message');
        helpMessage.textContent = "mm.. sepertinya aku belum bisa membantumu untuk ini";
        messagesContainer.appendChild(helpMessage);
        helpMessageDisplayed = true;
    }

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function createImageMessage(imageSrc, description) {
    const messagesContainer = document.getElementById('messages');
    
    const imageElement = document.createElement('div');
    imageElement.classList.add('image-message');
    imageElement.innerHTML = `<img src="${imageSrc}" alt="${description}"><p class="description">${description}</p>`;
    
    // Remove any previous help messages
    const previousHelpMessage = document.querySelector('.help-message');
    if (previousHelpMessage) {
        previousHelpMessage.remove();
    }

    messagesContainer.appendChild(imageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


function createImageMessage(imageSrc, description) {
    const messagesContainer = document.getElementById('messages');
    
    const imageElement = document.createElement('div');
    imageElement.classList.add('image-message');
    imageElement.innerHTML = `<img src="${imageSrc}" alt="${description}"><p>${description}</p>`;
    
    // Remove any previous help messages
    const previousHelpMessage = document.querySelector('.help-message');
    if (previousHelpMessage) {
        previousHelpMessage.remove();
    }

    messagesContainer.appendChild(imageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event listener for color options
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedColor = this.dataset.color;
        const container = document.querySelector('.container');
        container.className = `container ${selectedColor}`;
        
        const headerImage = document.querySelector('.header img');
        switch(selectedColor) {
            case 'theme-black':
                headerImage.src = 'headers/Header2.png';
                break;
            case 'theme-green':
                headerImage.src = 'headers/Header3.png';
                break;
            case 'theme-blue':
                headerImage.src = 'headers/Header4.png';
                break;
            case 'theme-red':
                headerImage.src = 'headers/Header5.png';
                break;
            case 'theme-yellow':
                headerImage.src = 'headers/Header6.png';
                break;
            default:
                headerImage.src = 'headers/Header1.png';
                break;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById('background-music');
    const controlButton = document.getElementById('music-control');

    controlButton.addEventListener('click', toggleMusic);

    function toggleMusic() {
        if (music.paused) {
            music.play();
            controlButton.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            music.pause();
            controlButton.innerHTML = '&#9658;'; // Play icon
        }
    }

    // Ensure the correct icon is displayed when the page loads
    if (music.paused) {
        controlButton.innerHTML = '&#9658;'; // Play icon
    } else {
        controlButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    }
});

// Popup functionality
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.popup-button').forEach(button => {
    button.addEventListener('click', function() {
        const popupType = this.dataset.popup;
        openPopup(popupType);
    });
});

closeButton.addEventListener('click', function() {
    closePopup();
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});

const guideImages = [
    'guide/guide.jpg',
    'guide/guide2.jpg',
    'guide/guide3.png',
    'guide/guide4.png',
    'guide/guide5.png',
    'guide/guide6.png',
    'guide/guide7.png',
    'guide/guide8.png',
];

const historyImages = [
    'history/history1.png',
    'history/history2.png',
    'history/history3.png',
    'history/history4.png',
];

const thanksImages = [
    'thanks/thanks1.png',
    'thanks/thanks2.png',
    'thanks/thanks3.png',
];

let currentIndex = 0;
let currentImages = [];

function openPopup(popupType) {
    currentIndex = 0; // Reset the index to the first image

    if (popupType === 'guide') {
        currentImages = guideImages;
    } else if (popupType === 'history') {
        currentImages = historyImages;
    } else if (popupType === 'thanks') {
        currentImages = thanksImages;
    }

    popupImage.src = currentImages[currentIndex];
    document.getElementById('prev-button').style.display = currentImages.length > 1 ? 'block' : 'none';
    document.getElementById('next-button').style.display = currentImages.length > 1 ? 'block' : 'none';
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

document.getElementById('prev-button').addEventListener('click', () => {
    showPreviousImage();
});

document.getElementById('next-button').addEventListener('click', () => {
    showNextImage();
});

function showPreviousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
    popupImage.src = currentImages[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
    popupImage.src = currentImages[currentIndex];
}

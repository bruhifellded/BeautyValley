let isChineseMode = sessionStorage.getItem('isChinese') === 'true';


function toggleLanguage() {

    isChineseMode = !isChineseMode;

    sessionStorage.setItem('isChinese', String(isChineseMode));

    LoadLanguage();
}


function LoadLanguage() {

    const englishEls = document.querySelectorAll('.English_Lang');
    const chineseEls = document.querySelectorAll('.Chinese_Lang');



    if (isChineseMode) {

        englishEls.forEach(englishEl => {

            englishEl.style.display = 'none';

        });

        chineseEls.forEach(chineseEl => {

            chineseEl.style.display = 'block';

        });


    } else {

        englishEls.forEach(englishEl => {

            englishEl.style.display = 'block';

        });

        chineseEls.forEach(chineseEl => {

            chineseEl.style.display = 'none';

        });

    }
}


LoadLanguage();

const TranslateButton = document.querySelectorAll('.Tran_Btn');

TranslateButton.forEach(TButton => {

    TButton.addEventListener('click', toggleLanguage);

});
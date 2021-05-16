function addClass(el, klass){
    el.classList.add(klass);
}

function removeClass(el, klass){
    el.classList.remove(klass);
}


const accordionItems = document.querySelectorAll('.accordion-item');

const accordionContent = document.querySelectorAll('.answer');

const iconOne = document.getElementsByClassName('fa-chevron-circle-right');

const iconTwo = document.getElementsByClassName('fa-chevron-circle-down');

//show first by default

accordionItems[0].querySelector('.answer').classList.remove('hidden');

//hide each on click
accordionItems.forEach(function(accordion){
    //clicked target
    const accordionTitleRow = accordion.firstElementChild;

    accordionTitleRow.addEventListener('click', toggleAccordion);

});

function toggleAccordion(e){
    accordionContent.forEach(function(content){
        //check if clicked row matches the contents previous element sibling

        if(content.previousElementSibling === e.target){
            removeClass(content, 'hidden');
            addClass(content.parentElement, 'active');
            
        }else{
            removeClass(content.parentElement, 'active');
            addClass(content, 'hidden');
        }
    })
}




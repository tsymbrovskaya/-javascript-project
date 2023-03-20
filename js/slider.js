const slides = [
    {
        img:'images/slider/slider1.jpg',
        city: 'Rostov-on-Don<br>LCD admiral',
        apartment_area: '81 m2',
        repair_time: '3.5 months',
        repair_cost: 'Upon request',
        subtitle: 'Rostov-on-Don, Admiral',
        description: 'Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br> market we have made happy more than 1000 families'
    },
    {
        img:'images/slider/slider2.png',
        city: 'Sochi<br>Thieves',
        apartment_area: '105 m2',
        repair_time: '4 months',
        repair_cost: 'Upon request',
        subtitle: 'Sochi Thieves',
        description: 'Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br> market we have made happy more than 1000 families'
    },
    {
        img:'images/slider/slider3.png',
        city: 'Rostov-on-Don<br>Patriotic',
        apartment_area: '93 m2',
        repair_time: '3 months',
        repair_cost: 'Upon request',
        subtitle: 'Rostov-on-Don Patriotic',
        description: 'Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br> market we have made happy more than 1000 families'
    },
]

function displaySlide(slide) {
    const img = document.querySelector('.gallery-slider.desktop .slider-item')
    img.src = slide.img

    const city = document.querySelector('.gallery-info.desktop .gallery-city')
    city.innerHTML = slide.city

    const apartment_area = document.querySelector('.gallery-info.desktop .gallery-apartment-area')
    apartment_area.innerHTML = slide.apartment_area

    const repair_time = document.querySelector('.gallery-info.desktop .gallery-repair-time')
    console.log(repair_time)
    repair_time.innerHTML = slide.repair_time

    const repair_cost = document.querySelector('.gallery-info.desktop .gallery-repair-cost')
    repair_cost.innerHTML = slide.repair_cost

    const description = document.querySelector('.gallery-title .gallery-description')
    console.log(description)
    description.innerHTML = slide.description
}

function activateSlideButtons(index){

    const dots = document.querySelectorAll('.nav.desktop .dot')
    dots.forEach(function (dot){
        dot.classList.remove('active')
    })
    let dot = dots[index]
    dot.classList.add('active');


    const subtitles = document.querySelectorAll('.gallery-subtitle.desktop .subtitle')
    subtitles.forEach(function (subtitle){
        subtitle.classList.remove('active')
    })
    let subtitle = subtitles[index]
    subtitle.classList.add('active')

}


function sliderNav (slides){
    const gallery_subtitle_block = document.querySelector('.gallery-subtitle.desktop')
    console.log(gallery_subtitle_block)

    let subtitle_list = ''
    let dots_list = '<img class="arrow-left" onclick="slidePrev()" src="images/arrow.svg">'

    slides.forEach(function (slide, index){
        subtitle_list += `<a class="subtitle" onclick="activateSlide(${index})">${slide.subtitle}</a>`
        dots_list += `<div class="dot" onclick="activateSlide(${index})" ></div>`
    })

    dots_list += '<img class="arrow-right" onclick="slideNext()" src="images/arrow.svg">'

    gallery_subtitle_block.innerHTML = subtitle_list

    const nav_desktop = document.querySelector('.gallery-left .nav.desktop')
    console.log(nav_desktop)
    nav_desktop.innerHTML = dots_list

}

sliderNav(slides)
let active_slide_index = 0

function activateSlide(index){
    console.log(active_slide_index)
    let slide = slides[index]
    displaySlide(slide)
    activateSlideButtons(index)
    active_slide_index = index
}


activateSlide(0)

function slidePrev(){
    console.log(active_slide_index)
    active_slide_index = active_slide_index -1
    console.log(active_slide_index)

    slides.length
    console.log(slides.length)
    if(active_slide_index <0){
        activateSlide(slides.length -1)
    }else {
        activateSlide(active_slide_index)
    }

}

function slideNext(){
    console.log(active_slide_index)
    active_slide_index = active_slide_index +1
    console.log(active_slide_index)

    slides.length
    console.log(slides.length)
    if(active_slide_index >= slides.length){
        activateSlide(0)
    }else {
        activateSlide(active_slide_index)
    }
}

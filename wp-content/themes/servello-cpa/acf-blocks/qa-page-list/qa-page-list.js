if (document.querySelector('.qa-page-list')) {

    // Get the current protocol (includes the colon at the end, e.g., 'http:' or 'https:')
    const protocol = window.location.protocol;
    
    // Get the current hostname (e.g., 'example.com')
    const hostname = window.location.hostname;
    
    const urls = [
        '/',
        '/about/',
        '/about/clinical-outcomes/',
        '/about/leadership/',
        '/about/news/',
        '/long-headline-title-featured-article-here/',
        '/about/senior-fellows/',
        '/about/senior-fellows/claudia-black-phd-msw/',
        '/about/the-meadows-model/',
        
        '/treatment/',
        '/treatment/detox/',
        '/treatment/types-of-therapy/',
        '/treatment/types-of-therapy/brain-center/',
        '/treatment/what-we-treat/',
        '/treatment/what-we-treat/mental-health/',
        
        '/locations/',
        '/locations/outpatient-treatment/',
        '/locations/residential-treatment/',
        '/locations/virtual-treatment/',
        '/locations/workshops/',
        '/location/claudia-black-young-adult-center/',
        
        '/admissions/',
        '/admissions/insurance/',
        '/admissions/length-of-stay/',
        '/admissions/paying-for-treatment/',
        '/admissions/referrals/',
        
        '/resources/',
        '/resources/alumni/',
        '/resources/articles/',
        '/resources/events/',
        '/resources/podcasts/',
        '/resources/podcasts/beyond-theory/',
        '/episode/s1-e1-jennifer-angier-on-the-deeds-of-mercy/',
        '/episode/s6-e13-dr-kevin-mccauley-on-a-compassionate-view-of-addiction/',
        
        '/careers/',
        '/careers/benefits/',
        '/contact/'
      ];
      
      console.log(urls.length)

      urls.forEach(function(each){
        let newLink = document.createElement('a')
        newLink.textContent = `${protocol}//${hostname}${each}`
        newLink.href = `${protocol}//${hostname}${each}`
        newLink.target = '_blank'
    
        let list = document.querySelector('.all-links')
        list.appendChild(newLink)
      })
    
    let button = document.querySelector('.open-all-links')
    button.addEventListener('click',function(event){
        urls.forEach(function(each){
            // console.log(each)
            const href = each
            window.open(href, '_blank');
        })
    })
}
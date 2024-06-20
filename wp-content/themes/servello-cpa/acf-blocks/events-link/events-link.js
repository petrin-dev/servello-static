setInterval(function(){
    updateLinks()
},500)

function updateLinks() {
    let coverLinks = document.querySelectorAll('.wp-block-post-featured-image a')
    coverLinks.forEach(function(each){
        each.target = "_blank"
        // console.log(each)
    })
    
    let dateLinks = document.querySelectorAll('.wp-block-post-date a')
    dateLinks.forEach(function(each){
        each.target = "_blank"
        // console.log(each)
    })
    
    let moreLinks = document.querySelectorAll('.wp-block-post-excerpt__more-link')
    moreLinks.forEach(function(each){
        each.target = "_blank"
        // console.log(each)
    })
}
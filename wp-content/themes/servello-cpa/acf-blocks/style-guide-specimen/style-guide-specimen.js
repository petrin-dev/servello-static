function showStyles() {
    let specimens = document.querySelectorAll('.specimen-group');
    specimens.forEach(function(each) {
        let specimen = each.querySelector('.specimen');
 
        // Reassign specimen if it's a blockquote and has a nested <p> element
        if (specimen.tagName === 'BLOCKQUOTE' && specimen.querySelector('p')) {
            specimen = specimen.querySelector('p');
        }
 
        let specimenStyles = window.getComputedStyle(specimen);
        let targets = each.querySelectorAll('.specimen-value');
 
        targets[0].textContent = specimenStyles.fontSize;
        targets[1].textContent = specimenStyles.lineHeight;
        targets[2].textContent = specimenStyles.letterSpacing;
 
    });
 }
 


window.addEventListener('resize', function() {
    showStyles()
});
  
window.addEventListener('load', function() {
    showStyles()
  });
  
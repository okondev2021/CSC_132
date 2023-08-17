document.addEventListener('DOMContentLoaded',function(){



    const width = window.innerWidth



    if(width <= 768 && width >= 600){

        // Set the display property of the last child element to none
        const parentDiv = document.querySelector('.collaborators_track')
        parentDiv.lastElementChild.style.display = 'none'

        // Switch collaborators after the set time

        const parent = document.querySelector('.collaborators_track')
        const numbersOfContributors = parent.childElementCount

        var animationCount = []
        for(let i = 1; i<= numbersOfContributors; i++){
            animationCount.push(i)
        }

        setInterval(()=>{

            const prevFirst = parentDiv.firstElementChild

            parentDiv.firstElementChild.remove()
            parentDiv.lastElementChild.style.display = 'block'

            parentDiv.append(prevFirst)
            prevFirst.style.display = 'none'

        }, 3000 )

    }



    if(width <= 500){

        document.querySelectorAll(".collaborator").forEach(function(collaborator){
            collaborator.style.display = 'none'
        })
        document.getElementById('collaborator_1').style.display = 'block'

        





    }



})
































    // // displaying both left and right part of the hero section once the page loads
    // document.querySelector('.hero_left').classList.add('reveal_hero')
    // document.querySelector('.hero_right').classList.add('reveal_hero')

    // // reveal projects with a smooth transition when scrolled to where they are positioned
    // window.addEventListener('scroll',revealProjects)

    // function revealProjects(){
    //     document.querySelectorAll('.project').forEach(function(section){
    //         var windowheight = window.innerHeight
    //         var revealtop = section.getBoundingClientRect().top
    //         var reavealpoint = 0
    //         if (revealtop < windowheight - reavealpoint){
    //             section.classList.add('reveal_projects')
    //         }
    //         else{
    //             section.classList.remove('reveal_projects')
    //         }
    //     })
    // }